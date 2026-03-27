import { repositories } from "../repositories/index.js";
import { OFFICE_DATA_MODELS } from "../constants/offices.js";

const suggestionConfig = {
  Project: { labelField: "name", valueField: "_id", searchFields: ["name", "code"] },
  Task: { labelField: "title", valueField: "_id", searchFields: ["title", "taskId"] },
  Nashr: { labelField: "title", valueField: "_id", searchFields: ["title", "projectCode"] },
  Oqood: { labelField: "title", valueField: "_id", searchFields: ["title", "projectCode"] },
  Siyana: { labelField: "title", valueField: "_id", searchFields: ["title", "projectCode"] },
  Tawridat: { labelField: "title", valueField: "_id", searchFields: ["title", "projectCode"] },
  Mashtarawat: { labelField: "title", valueField: "_id", searchFields: ["title", "projectCode"] },
  Mizaniya: { labelField: "title", valueField: "_id", searchFields: ["title", "projectCode"] },
  Hesabat: { labelField: "title", valueField: "_id", searchFields: ["title", "projectCode"] },
};

const buildQuery = (search, searchFields) => {
  if (!search) return {};
  return {
    $or: searchFields.map((field) => ({ [field]: { $regex: search, $options: "i" } })),
  };
};

export const getSuggestions = async (req, res, next) => {
  try {
    const { model, search, page, pageSize } = req.query;
    const normalizedModel = OFFICE_DATA_MODELS[model] || model;
    const repo = repositories[normalizedModel];
    const config = suggestionConfig[normalizedModel];

    if (!repo || !config) {
      return res.status(400).json({ success: false, message: "Unsupported model for suggestions" });
    }

    const query = buildQuery(search, config.searchFields);
    const result = await repo.find(query, {
      page,
      pageSize,
      sort: { [config.labelField]: 1 },
      projection: { [config.labelField]: 1 },
    });

    const suggestions = result.items.map((item) => ({
      label: item[config.labelField],
      value: String(item[config.valueField]),
    }));

    return res.json({ success: true, suggestions, pagination: result.pagination });
  } catch (error) {
    next(error);
  }
};
