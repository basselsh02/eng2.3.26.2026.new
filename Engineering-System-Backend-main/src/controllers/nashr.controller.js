import { repositories } from "../repositories/index.js";

const repo = repositories.Nashr;

const toPayload = (record) => ({
  id: String(record._id),
  projectCode: record.projectCode,
  title: record.title,
  amount: record.amount,
  eventDate: record.eventDate,
  location: record.location,
  status: record.status,
  committee: record.committee,
  offers: record.offers,
  metadata: record.metadata || {},
  printData: record.printData || {},
  subtype: record.subtype,
});

export const getNashrFullData = async (req, res, next) => {
  try {
    const { projectCode } = req.query;
    const query = projectCode ? { projectCode, status: { $ne: "deleted" } } : { status: { $ne: "deleted" } };

    const { items } = await repo.find(query, { page: 1, pageSize: 500, sort: { createdAt: -1 } });

    const grouped = {
      project: null,
      conditions: [],
      nominatedCompanies: [],
      workItems: [],
      tahsilat: [],
      bay3KrassatProjects: [],
      bay3KrassatCompanies: [],
      tiba3aMozakrat: [],
    };

    items.forEach((record) => {
      const payload = toPayload(record);
      switch (record.subtype) {
        case "project":
          grouped.project = payload;
          break;
        case "project-condition":
          grouped.conditions.push(payload);
          break;
        case "nominated-company":
          grouped.nominatedCompanies.push(payload);
          break;
        case "work-item":
          grouped.workItems.push(payload);
          break;
        case "tahsilat":
          grouped.tahsilat.push(payload);
          break;
        case "bay3-krassat-project":
          grouped.bay3KrassatProjects.push(payload);
          break;
        case "bay3-krassat-company":
          grouped.bay3KrassatCompanies.push(payload);
          break;
        case "tiba3a-mozakrat":
          grouped.tiba3aMozakrat.push(payload);
          break;
        default:
          break;
      }
    });

    res.json({ success: true, data: grouped });
  } catch (error) {
    next(error);
  }
};

export const softDeleteNominatedCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await repo.updateOne(
      { _id: id, subtype: "nominated-company" },
      { status: "deleted" },
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "السجل غير موجود" });
    }

    return res.json({ success: true, data: { id: String(updated._id), status: updated.status } });
  } catch (error) {
    return next(error);
  }
};

export const softDeleteWorkItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await repo.updateOne(
      { _id: id, subtype: "work-item" },
      { status: "deleted" },
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "السجل غير موجود" });
    }

    return res.json({ success: true, data: { id: String(updated._id), status: updated.status } });
  } catch (error) {
    return next(error);
  }
};
