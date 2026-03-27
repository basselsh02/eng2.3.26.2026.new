export class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(payload) {
    return this.model.create(payload);
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async findOne(query) {
    return this.model.findOne(query);
  }

  async find(query = {}, options = {}) {
    const { sort = { createdAt: -1 }, page = 1, pageSize = 20, projection } = options;
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
      this.model.find(query, projection).sort(sort).skip(skip).limit(pageSize),
      this.model.countDocuments(query),
    ]);

    return {
      items,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize) || 1,
      },
    };
  }

  async updateOne(filter, payload) {
    return this.model.findOneAndUpdate(filter, payload, { new: true, runValidators: true });
  }
}
