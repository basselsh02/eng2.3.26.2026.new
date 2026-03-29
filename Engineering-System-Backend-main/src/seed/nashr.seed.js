import { Nashr } from "../models/office-records.model.js";

const projectCode = "4585551456";

const nashrSeedRecords = [
  {
    projectCode,
    subtype: "project",
    title: "اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 مدان",
    amount: 125252500,
    location: "مركز تدريب المنشاة النموذجي بالهايكسلت",
    status: "active",
    metadata: {
      projectTypeCode: "اعمال المباني",
      financialYear: "2026/2025",
      issueDate: "2020-02-08",
      publishingMethod: "المناقصة المحدودة",
      actualStartDate: "2020-02-15",
      actualEndDate: "2025-08-10",
      branchNoteNumber: "500",
      branchName: "فرع الصيانة",
      company: "شاكر للمقاولات العامة والموردات",
      publishDate: "2025-05-20",
      employeeName: "الاستاذة/مي",
      actualOpenDate: "2025-10-02",
      mainProjectCode: "4585551456",
      bonusRate: 0.25,
    },
  },
  {
    projectCode,
    subtype: "project-condition",
    title: "القيمة التقديرية",
    metadata: { kod: "455", mosalsal: "9", wasf: "اكثر من 500 الف جنية", tartib: "2", qima: "" },
  },
  {
    projectCode,
    subtype: "project-condition",
    title: "طريقة التعاقد",
    metadata: { kod: "787", mosalsal: "99", wasf: "المناقصة المحدودة", tartib: "3", qima: "500" },
  },
  {
    projectCode,
    subtype: "nominated-company",
    title: "المقاولون العرب",
    metadata: { raqmSijl: "20026", raqmMwafaqa: "5454" },
  },
  {
    projectCode,
    subtype: "nominated-company",
    title: "اطلس العامة للمقاولات",
    metadata: { raqmSijl: "454", raqmMwafaqa: "7878" },
  },
  {
    projectCode,
    subtype: "work-item",
    title: "تم التعاقد بالمناقصة المحدودة",
    amount: 5451121,
    metadata: { mosalsal: 1, kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "5451121.0000" },
  },
  {
    projectCode,
    subtype: "tahsilat",
    title: "اعمال رفع كفاءة شبكة الكهرباء الرئيسية",
    amount: 45478744,
    metadata: { raqmMashro3: "2588888", kodFar3: "12", ismFar3Monafez: "فرع الصيانة", matbo3: "20", meba3: "16" },
  },
  {
    projectCode,
    subtype: "bay3-krassat-project",
    title: "توريد اسمنت لزوم مباني ميناء ابو قير الجديد",
    amount: 41545451012.544,
    metadata: { raqmMashro3: "2588888", kodFar3: "65", ismFar3Monafez: "فرع الامداد" },
  },
  {
    projectCode,
    subtype: "bay3-krassat-company",
    title: "شركة المقاولون العرب",
    metadata: { kod: "ملتزم", tamAlShra: true, tariqaDaf3: "بدون" },
  },
  {
    projectCode,
    subtype: "tiba3a-mozakrat",
    title: "اعمال التصميمات لرفع كفاءة مستشفى سوهاج العسكري",
    amount: 487754,
    metadata: { raqmMashro3: "2588888", kodFar3: "877", ismFar3Monafez: "اللواء 150 اشغال", askariMadani: true },
  },
];

export const seedNashrRecords = async () => {
  const existing = await Nashr.countDocuments();
  if (existing > 0) return;

  await Nashr.insertMany(nashrSeedRecords);
};
