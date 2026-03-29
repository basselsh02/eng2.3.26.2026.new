import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Project } from "../models/project.model.js";
import { Company } from "../models/company.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const seedDataDir = path.join(__dirname, "data");
const projectsCsvPath = path.join(seedDataDir, "projects.csv");
const companiesCsvPath = path.join(seedDataDir, "companies.csv");

const splitCsvLine = (line) => {
  const values = [];
  let buffer = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        buffer += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(buffer.trim());
      buffer = "";
      continue;
    }

    buffer += char;
  }

  values.push(buffer.trim());
  return values;
};

const parseCsv = async (filePath) => {
  const csv = await fs.readFile(filePath, "utf8");
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return [];

  const headers = splitCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const row = splitCsvLine(line);
    return headers.reduce((acc, header, index) => {
      acc[header] = row[index] ?? "";
      return acc;
    }, {});
  });
};

const toNumber = (value, fallback = 0) => {
  const normalized = String(value ?? "")
    .replaceAll(/[$,]/g, "")
    .trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const parseList = (value) =>
  String(value ?? "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

export const seedProjectsAndCompaniesFromExcel = async () => {
  const [existingProjects, existingCompanies] = await Promise.all([
    Project.countDocuments(),
    Company.countDocuments(),
  ]);

  if (existingProjects > 0 || existingCompanies > 0) return;

  const [projectRows, companyRows] = await Promise.all([
    parseCsv(projectsCsvPath),
    parseCsv(companiesCsvPath),
  ]);

  const companies = companyRows.map((row) => ({
    name: row.name,
    commercialRegister: row.commercialRegister,
    approvalNumber: row.approvalNumber,
    specialization: row.specialization,
    status: row.status || "active",
  }));

  const projects = projectRows.map((row) => ({
    code: row.code,
    name: row.name,
    office: row.office,
    financialYear: toNumber(row.financialYear, new Date().getFullYear()),
    status: row.status || "draft",
    projectType: row.projectType,
    budget: toNumber(row.budget, 0),
    conditions: parseList(row.conditions),
    companiesNominated: parseList(row.companiesNominated),
  }));

  if (companies.length) {
    await Company.insertMany(companies);
  }

  if (projects.length) {
    await Project.insertMany(projects);
  }
};
