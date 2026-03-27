import { repositories } from "../repositories/index.js";

export const createProject = async (req, res, next) => {
  try {
    const project = await repositories.Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const { page, pageSize } = req.query;
    const result = await repositories.Project.find({}, { page, pageSize, sort: { createdAt: -1 } });
    res.json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};
