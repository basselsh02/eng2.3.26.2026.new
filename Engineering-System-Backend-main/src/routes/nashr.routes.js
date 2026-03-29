import { Router } from "express";
import { createOfficeRouter } from "./common.route-factory.js";
import { repositories } from "../repositories/index.js";
import { Project } from "../models/project.model.js";

const router = createOfficeRouter("Nashr", ["tahsilat", "bay3-krassat", "tiba3a-mozakrat"]);
const repo = repositories.Nashr;
const pageSubtype = "byanat-almashro3";

const normalizeByanatPayload = (metadata = {}) => ({
  ...metadata,
  tarshihCompanies: (metadata.tarshihCompanies || []).map((item) => ({ ...item, isDeleted: !!item.isDeleted })),
  bunod: (metadata.bunod || []).map((item) => ({ ...item, isDeleted: !!item.isDeleted })),
  shorot: metadata.shorot || [],
  requestingParties: metadata.requestingParties || [],
});

router.get("/byanat-almashro3", async (_req, res, next) => {
  try {
    const record = await repo.findOne({ subtype: pageSubtype });
    if (!record) {
      return res.status(404).json({ success: false, message: "Byanat record not found" });
    }
    return res.json({ success: true, data: record });
  } catch (error) {
    return next(error);
  }
});

router.put("/byanat-almashro3", async (req, res, next) => {
  try {
    const { metadata = {}, projectCode = "", title = "بيانات المشروع - مكتب النشر" } = req.body;
    const payload = {
      subtype: pageSubtype,
      title,
      projectCode,
      metadata: normalizeByanatPayload(metadata),
    };

    const updated = await repo.updateOne({ subtype: pageSubtype }, payload, { upsert: true, setDefaultsOnInsert: true });
    return res.json({ success: true, data: updated });
  } catch (error) {
    return next(error);
  }
});

router.get("/byanat-almashro3/projects", async (req, res, next) => {
  try {
    const query = String(req.query.query || "").trim();
    const regex = query ? new RegExp(query, "i") : null;
    const projects = await Project.find(
      {
        office: "nashr",
        ...(regex ? { $or: [{ code: regex }, { name: regex }] } : {}),
      },
      { code: 1, name: 1, financialYear: 1 },
    ).limit(20);

    return res.json({
      success: true,
      items: projects.map((project) => ({ code: project.code, name: project.name, financialYear: project.financialYear })),
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/byanat-almashro3/requesting-parties", async (req, res, next) => {
  try {
    const query = String(req.query.query || "").trim().toLowerCase();
    const record = await repo.findOne({ subtype: pageSubtype });
    const parties = record?.metadata?.requestingParties || [];
    const filtered = parties.filter((item) => item.toLowerCase().includes(query));
    return res.json({ success: true, items: filtered });
  } catch (error) {
    return next(error);
  }
});

router.post("/byanat-almashro3/requesting-parties", async (req, res, next) => {
  try {
    const partyName = String(req.body.name || "").trim();
    if (!partyName) {
      return res.status(400).json({ success: false, message: "name is required" });
    }

    const record = await repo.findOne({ subtype: pageSubtype });
    if (!record) {
      return res.status(404).json({ success: false, message: "Byanat record not found" });
    }

    const set = new Set(record.metadata.requestingParties || []);
    set.add(partyName);

    const updated = await repo.updateOne(
      { subtype: pageSubtype },
      { metadata: { ...record.metadata, requestingParties: Array.from(set) } },
    );

    return res.status(201).json({ success: true, item: partyName, data: updated });
  } catch (error) {
    return next(error);
  }
});

export default router;
