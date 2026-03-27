import { repositories } from "../repositories/index.js";
import { buildDataTableQuery, parseFilters, parseSorting } from "../services/query-builder.service.js";

export const createOfficeController = (modelName) => {
  const repo = repositories[modelName];

  const createRecord = async (req, res, next) => {
    try {
      const created = await repo.create(req.body);
      res.status(201).json({ success: true, data: created });
    } catch (error) {
      next(error);
    }
  };

  const getRecords = async (req, res, next) => {
    try {
      const { page, pageSize } = req.query;
      const result = await repo.find({}, { page, pageSize });
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  const getDataTable = async (req, res, next) => {
    try {
      const { page, pageSize, globalFilter, filters: rawFilters, sorting: rawSorting } = req.query;
      const filters = parseFilters(rawFilters);
      const query = buildDataTableQuery({ globalFilter, filters });
      const sort = parseSorting(rawSorting);

      const result = await repo.find(query, { page, pageSize, sort });
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  return {
    createRecord,
    getRecords,
    getDataTable,
  };
};
