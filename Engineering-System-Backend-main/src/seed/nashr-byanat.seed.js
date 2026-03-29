import { Nashr } from "../models/office-records.model.js";

const subtype = "byanat-almashro3";

const seedPayload = {
  projectCode: "4585551456",
  subtype,
  title: "بيانات المشروع - مكتب النشر",
  amount: 125252500,
  status: "active",
  metadata: {
    financialYear: "2026/2025",
    selectedProject: {
      code: "4585551456",
      name: "صيانة وتشغيل شبكة الكهرباء والمولدات",
    },
    project: {
      projectTypeCode: "اعمال المباني",
      cardReceivedDate: "2020-02-08",
      releaseDate: "2020-02-08",
      publishingMethod: "مناقصة محدودة",
      actualStartDate: "2020-02-15",
      actualEndDate: "2025-08-10",
      requestingParty: "مركز تدريب المنشاة النموذجي بالهايكسلت",
      estimatedCost: "125252500",
      bonusRate: "0.25",
      financialMemoNo: "500",
      responsibleBranch: "فرع الصيانة",
      company: "شاكر للمقاولات العامة والموردات",
      publishDate: "2025-05-20",
      responsibleEmployee: "الاستاذة/مي",
      openingDate: "2025-10-02",
      parentProject: "4585551456",
    },
    shorot: [
      { id: "sh-1", kod: "455", ismNaw3Shart: "القيمة التقديرية", mosalsal: "9", wasf: "اكثر من 500 الف جنية", tartib: "2", qima: "" },
      { id: "sh-2", kod: "787", ismNaw3Shart: "طريقة التعاقد", mosalsal: "99", wasf: "المناقصة المحدودة", tartib: "3", qima: "500" },
    ],
    tarshihCompanies: [
      { id: "tr-1", sharika: "المقاولون العرب", raqmSijl: "20026", raqmMwafaqa: "5454", isDeleted: false },
      { id: "tr-2", sharika: "اطلس العامة للمقاولات", raqmSijl: "454", raqmMwafaqa: "7878", isDeleted: false },
    ],
    bunod: [
      { id: "bn-1", mosalsal: "1", wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "وحدة", kamiya: "10", qima: "200", isDeleted: false },
      { id: "bn-2", mosalsal: "2", wasf: "توريد مهمات", kod: "4", wahda: "وحدة", kamiya: "3", qima: "150", isDeleted: false },
    ],
    requestingParties: [
      "مركز تدريب المنشاة النموذجي بالهايكسلت",
      "إدارة الإمداد",
      "فرع الصيانة",
    ],
  },
};

export const seedNashrByanat = async () => {
  const existing = await Nashr.findOne({ subtype });
  if (existing) return;
  await Nashr.create(seedPayload);
};
