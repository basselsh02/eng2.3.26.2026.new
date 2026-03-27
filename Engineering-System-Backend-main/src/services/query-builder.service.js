const toRegex = (value) => ({ $regex: String(value), $options: "i" });

export const buildDataTableQuery = ({ globalFilter, filters }) => {
  const query = {};

  if (globalFilter) {
    query.$or = [{ title: toRegex(globalFilter) }, { projectCode: toRegex(globalFilter) }, { subtype: toRegex(globalFilter) }];
  }

  if (Array.isArray(filters) && filters.length) {
    const conditions = filters
      .map((filter) => {
        const { id, value, type } = filter;
        if (!id || value === undefined || value === null || value === "") return null;

        if (type === "range" && Array.isArray(value)) {
          const [min, max] = value;
          const range = {};
          if (min !== undefined && min !== null && min !== "") range.$gte = Number(min);
          if (max !== undefined && max !== null && max !== "") range.$lte = Number(max);
          return Object.keys(range).length ? { [id]: range } : null;
        }

        if (type === "select") {
          if (Array.isArray(value)) return { [id]: { $in: value } };
          return { [id]: value };
        }

        return { [id]: toRegex(value) };
      })
      .filter(Boolean);

    if (conditions.length) {
      query.$and = [...(query.$and || []), ...conditions];
    }
  }

  return query;
};

export const parseSorting = (sortingRaw) => {
  try {
    const sorting = JSON.parse(sortingRaw || "[]");
    if (!Array.isArray(sorting) || !sorting.length) return { createdAt: -1 };

    return sorting.reduce((acc, item) => {
      if (item?.id) acc[item.id] = item.desc ? -1 : 1;
      return acc;
    }, {});
  } catch {
    return { createdAt: -1 };
  }
};

export const parseFilters = (filtersRaw) => {
  try {
    const parsed = JSON.parse(filtersRaw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};
