import { Project } from "../models/project.model.js";

const seedProjects = [
  {
    code: "NSH-2026-001",
    name: "Booklet Publication Program",
    office: "nashr",
    financialYear: 2026,
    status: "active",
    projectType: "publishing",
    budget: 350000,
    conditions: ["Paper quality >= 80gsm", "Delivery in 15 days"],
    companiesNominated: ["Dar Al-Handasa Press", "Future Print Co"],
  },
  {
    code: "OQD-2026-004",
    name: "Contract Governance Modernization",
    office: "oqood",
    financialYear: 2026,
    status: "active",
    projectType: "service",
    budget: 620000,
    conditions: ["Monthly committee review", "Legal compliance checkpoint"],
    companiesNominated: ["Al Waseet Legal", "ContractHub LLC"],
  },
  {
    code: "SYN-2026-010",
    name: "Critical Maintenance Recovery",
    office: "siyana",
    financialYear: 2026,
    status: "halted",
    projectType: "maintenance",
    budget: 480000,
    conditions: ["Site safety verified", "Root cause attached"],
    companiesNominated: ["RapidFix", "MENA Maintenance"],
  },
  {
    code: "TWR-2026-014",
    name: "National Supplies Framework",
    office: "tawridat",
    financialYear: 2026,
    status: "draft",
    projectType: "supply",
    budget: 950000,
    conditions: ["Form 41 ready", "Settlement SLA <= 30 days"],
    companiesNominated: ["Al-Noor Trading", "Iraq Supplies Group"],
  },
  {
    code: "MZN-2026-020",
    name: "Budget & Accounts Reconciliation",
    office: "mizaniya",
    financialYear: 2026,
    status: "active",
    projectType: "service",
    budget: 280000,
    conditions: ["Guarantee tracking enabled", "Invoice aging report"],
    companiesNominated: ["Delta Finance", "Qaf Accounting"],
  },
];

export const seedMockProjects = async () => {
  const existing = await Project.countDocuments();
  if (existing > 0) return;
  await Project.insertMany(seedProjects);
};
