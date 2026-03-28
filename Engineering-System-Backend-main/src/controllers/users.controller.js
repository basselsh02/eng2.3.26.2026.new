import { repositories } from "../repositories/index.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await repositories.User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { page, pageSize } = req.query;
    const result = await repositories.User.find({}, { page, pageSize, sort: { createdAt: -1 } });
    res.json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};
