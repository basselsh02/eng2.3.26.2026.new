import { repositories } from "../repositories/index.js";

export const createTask = async (req, res, next) => {
  try {
    const task = await repositories.Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

export const assignTask = async (req, res, next) => {
  try {
    const { officeId, taskId } = req.params;
    const task = await repositories.Task.updateOne(
      { officeId, taskId },
      { assignedTo: req.body.assignedTo }
    );

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    return res.json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};
