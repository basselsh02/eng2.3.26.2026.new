import apiClient from "./client";

export const getNashrFullData = async (projectCode = "4585551456") => {
  const { data } = await apiClient.get("/api/nashr/full-data", { params: { projectCode } });
  return data?.data || {};
};

export const getNashrRecords = async (params = {}) => {
  const { data } = await apiClient.get("/api/nashr", { params });
  return data?.items || [];
};

export const createNashrProjectRecord = async (payload) => {
  const { data } = await apiClient.post("/api/nashr/project", payload);
  return data?.data;
};

export const softDeleteNashrNominatedCompany = async (id) => {
  const { data } = await apiClient.patch(`/api/nashr/nominated-company/${id}/soft-delete`);
  return data?.data;
};
