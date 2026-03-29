import apiClient from "./client";

export const getNashrFullData = async (projectCode = "4585551456") => {
  const { data } = await apiClient.get("/api/nashr/full-data", { params: { projectCode } });
  return data?.data || {};
};
