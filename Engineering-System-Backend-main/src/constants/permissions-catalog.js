export const PERMISSION_ACTIONS = ["read", "update", "soft_delete"];

export const HIERARCHY_ROLES = ["سوبر أدمن", "مدير الادارة", "مدير الفرع", "رئيس القسم", "موظف"];

// Catalog aligned with current sidebar structure (modules -> tabs -> pages -> fields)
export const PERMISSIONS_CATALOG = [
  {
    moduleId: "users-management",
    moduleLabel: "إدارة المستخدمين",
    tabs: [
      {
        tabId: "users-tab",
        tabLabel: "صفحات الإدارة",
        pages: [
          {
            pageId: "users",
            pageLabel: "إدارة المستخدمين",
            fields: [
              { fieldKey: "arabicName", fieldLabel: "الاسم بالعربي" },
              { fieldKey: "englishName", fieldLabel: "الاسم بالإنكليزي" },
              { fieldKey: "password", fieldLabel: "كلمة المرور" },
              { fieldKey: "role", fieldLabel: "الدور" },
              { fieldKey: "officeAssignedTo", fieldLabel: "المكتب المخصص" },
            ],
          },
        ],
      },
    ],
  },
  {
    moduleId: "nashr",
    moduleLabel: "مكتب النشر",
    tabs: [
      {
        tabId: "manager-tasks",
        tabLabel: "مهام المدير",
        pages: [
          { pageId: "nashr-mohamat-almodir", pageLabel: "مهام المدير", fields: [{ fieldKey: "task", fieldLabel: "المهمة" }] },
        ],
      },
      {
        tabId: "employee-tasks",
        tabLabel: "مهام الموظف",
        pages: [
          { pageId: "nashr-mohamat-almowazaf", pageLabel: "مهام الموظف", fields: [{ fieldKey: "task", fieldLabel: "المهمة" }] },
        ],
      },
      {
        tabId: "work-pages",
        tabLabel: "صفحات العمل",
        pages: [
          { pageId: "nashr-byanat-almashro3", pageLabel: "بيانات المشروع", fields: [{ fieldKey: "projectData", fieldLabel: "بيانات المشروع" }] },
          { pageId: "nashr-istkmal-byanat", pageLabel: "استكمال بيانات المشروع بالنشر", fields: [{ fieldKey: "completionData", fieldLabel: "بيانات الاستكمال" }] },
          { pageId: "nashr-tahsilat", pageLabel: "التحصيلات", fields: [{ fieldKey: "collectionRecord", fieldLabel: "سجل التحصيل" }] },
          { pageId: "nashr-bay3-krassat", pageLabel: "بيع الكراسات واستلام التأمين الابتدائي", fields: [{ fieldKey: "saleRecord", fieldLabel: "سجل البيع" }] },
          { pageId: "nashr-tiba3a-mozakrat", pageLabel: "طباعة مذكرات النشر", fields: [{ fieldKey: "printMemo", fieldLabel: "بيانات المذكرة" }] },
        ],
      },
    ],
  },
  {
    moduleId: "oqood",
    moduleLabel: "مكتب العقود",
    tabs: [
      {
        tabId: "manager-tasks",
        tabLabel: "مهام المدير",
        pages: [
          { pageId: "oqood-ejra2at", pageLabel: "الإجراءات", fields: [{ fieldKey: "procedures", fieldLabel: "بيانات الإجراءات" }] },
          { pageId: "oqood-mawqif-mali", pageLabel: "تسجيل الموقف المالي للمشروعات", fields: [{ fieldKey: "financialStatus", fieldLabel: "الموقف المالي" }] },
        ],
      },
      {
        tabId: "employee-tasks",
        tabLabel: "مهام الموظف",
        pages: [
          { pageId: "oqood-byanat-almashro3", pageLabel: "بيانات المشروع", fields: [{ fieldKey: "projectData", fieldLabel: "بيانات المشروع" }] },
          { pageId: "oqood-tasjil-byan", pageLabel: "تسجيل بيان المشروع", fields: [{ fieldKey: "projectStatement", fieldLabel: "بيان المشروع" }] },
        ],
      },
    ],
  },
  {
    moduleId: "siyana",
    moduleLabel: "مكتب الصيانة",
    tabs: [
      {
        tabId: "work-pages",
        tabLabel: "صفحات العمل",
        pages: [
          { pageId: "siyana-bayan-mutawaqif", pageLabel: "بيان بالمتوقف في قسم الصيانة حتى تاريخ", fields: [{ fieldKey: "stoppedItems", fieldLabel: "البيان" }] },
        ],
      },
    ],
  },
  {
    moduleId: "tawridat",
    moduleLabel: "مكتب التوريدات",
    tabs: [
      {
        tabId: "manager-tasks",
        tabLabel: "مهام المدير",
        pages: [{ pageId: "tawridat-mohamat-almodir", pageLabel: "مهام المدير", fields: [{ fieldKey: "task", fieldLabel: "المهمة" }] }],
      },
      {
        tabId: "employee-tasks",
        tabLabel: "مهام الموظف",
        pages: [{ pageId: "tawridat-mohamat-almowazaf", pageLabel: "مهام الموظف", fields: [{ fieldKey: "task", fieldLabel: "المهمة" }] }],
      },
      {
        tabId: "work-pages",
        tabLabel: "صفحات العمل",
        pages: [
          { pageId: "tawridat-tasjil-mawqif", pageLabel: "تسجيل الموقف الحالي للمشروع", fields: [{ fieldKey: "currentStatus", fieldLabel: "الموقف الحالي" }] },
          { pageId: "tawridat-mutabaat-taswyat", pageLabel: "متابعة التسويات", fields: [{ fieldKey: "settlements", fieldLabel: "التسويات" }] },
          { pageId: "tawridat-byan-awamar", pageLabel: "بيان أوامر التوريد", fields: [{ fieldKey: "supplyOrders", fieldLabel: "أوامر التوريد" }] },
          { pageId: "tawridat-daribat", pageLabel: "نموذج ضريبة المبيعات", fields: [{ fieldKey: "salesTax", fieldLabel: "بيانات الضريبة" }] },
          { pageId: "tawridat-taqarir", pageLabel: "متابعة التقارير", fields: [{ fieldKey: "reports", fieldLabel: "التقارير" }] },
        ],
      },
    ],
  },
  {
    moduleId: "mashtarawat",
    moduleLabel: "مكتب المشتريات",
    tabs: [
      {
        tabId: "manager-tasks",
        tabLabel: "مهام المدير",
        pages: [{ pageId: "mashtarawat-mohamat-almodir", pageLabel: "مهام المدير", fields: [{ fieldKey: "task", fieldLabel: "المهمة" }] }],
      },
      {
        tabId: "employee-tasks",
        tabLabel: "مهام الموظف",
        pages: [{ pageId: "mashtarawat-mohamat-almowazaf", pageLabel: "مهام الموظف", fields: [{ fieldKey: "task", fieldLabel: "المهمة" }] }],
      },
      {
        tabId: "work-pages",
        tabLabel: "صفحات العمل",
        pages: [
          { pageId: "mashtarawat-byanat", pageLabel: "بيانات المشروعات", fields: [{ fieldKey: "projectsData", fieldLabel: "بيانات المشروعات" }] },
          { pageId: "mashtarawat-mahdar", pageLabel: "محضر إجراءات", fields: [{ fieldKey: "minutes", fieldLabel: "المحضر" }] },
        ],
      },
    ],
  },
  {
    moduleId: "mizaniya",
    moduleLabel: "مكتب الميزانية",
    tabs: [
      {
        tabId: "work-pages",
        tabLabel: "صفحات العمل",
        pages: [
          { pageId: "mizaniya-ta3aqud", pageLabel: "بيان التعاقد", fields: [{ fieldKey: "contractStatement", fieldLabel: "بيان التعاقد" }] },
          { pageId: "mizaniya-makhsamat", pageLabel: "تسجيل المخصمات", fields: [{ fieldKey: "deductions", fieldLabel: "المخصمات" }] },
        ],
      },
    ],
  },
  {
    moduleId: "hesabat",
    moduleLabel: "مكتب الحسابات",
    tabs: [
      {
        tabId: "work-pages",
        tabLabel: "صفحات العمل",
        pages: [
          { pageId: "hesabat-daman", pageLabel: "تسجيل خطابات الضمان", fields: [{ fieldKey: "guaranteeLetters", fieldLabel: "خطابات الضمان" }] },
          { pageId: "hesabat-mutabaat", pageLabel: "متابعة دخول وخروج المستخلصات", fields: [{ fieldKey: "mustakhlasat", fieldLabel: "حركة المستخلصات" }] },
          { pageId: "hesabat-taqarir", pageLabel: "التقارير", fields: [{ fieldKey: "reports", fieldLabel: "التقارير" }] },
        ],
      },
    ],
  },
];

export const buildSuperAdminGrants = () =>
  PERMISSIONS_CATALOG.flatMap((module) =>
    module.tabs.flatMap((tab) =>
      tab.pages.flatMap((page) =>
        page.fields.map((field) => ({
          moduleId: module.moduleId,
          tabId: tab.tabId,
          pageId: page.pageId,
          fieldKey: field.fieldKey,
          read: true,
          update: true,
          soft_delete: true,
        }))
      )
    )
  );
