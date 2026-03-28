import { z } from "zod";
import { OFFICE_ENUM, PROJECT_STATUS, PROJECT_TYPE } from "./constants/offices.js";
import { OFFICE_REQUIRED_ROLES, USER_ROLES } from "./models/user.model.js";

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
});

export const createProjectSchema = z.object({
  code: z.string().min(2),
  name: z.string().min(2),
  office: z.enum(OFFICE_ENUM),
  financialYear: z.number().int().min(2000),
  status: z.enum(PROJECT_STATUS).default("draft"),
  projectType: z.enum(PROJECT_TYPE),
  budget: z.number().nonnegative(),
  conditions: z.array(z.string()).default([]),
  companiesNominated: z.array(z.string()).default([]),
  printData: z.record(z.any()).optional(),
});

export const createTaskSchema = z.object({
  officeId: z.enum(OFFICE_ENUM),
  taskId: z.string().min(1),
  assignedTo: z.string().optional(),
  title: z.string().min(2),
  description: z.string().optional(),
  status: z.enum(["pending", "completed"]).optional(),
  metadata: z.record(z.any()).optional(),
});



export const createUserSchema = z
  .object({
    arabicName: z.string().min(2),
    englishName: z.string().min(2),
    password: z.string().min(8),
    role: z.enum(USER_ROLES),
    officeAssignedTo: z.enum(OFFICE_ENUM).nullable().optional(),
  })
  .superRefine((value, ctx) => {
    const officeValue = value.officeAssignedTo ?? null;

    if (OFFICE_REQUIRED_ROLES.includes(value.role) && !officeValue) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["officeAssignedTo"],
        message: "officeAssignedTo is required for موظف and رئيس القسم",
      });
    }
  })
  .transform((value) => ({
    ...value,
    officeAssignedTo: OFFICE_REQUIRED_ROLES.includes(value.role) ? value.officeAssignedTo ?? null : null,
  }));

export const assignTaskSchema = z.object({
  assignedTo: z.string().min(1),
});

export const suggestionsQuerySchema = z.object({
  model: z.string().min(1),
  search: z.string().optional().default(""),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
});

export const officeRecordSchema = z.object({
  projectCode: z.string().optional(),
  subtype: z.string().min(2),
  title: z.string().min(2),
  amount: z.number().nonnegative().default(0),
  eventDate: z.coerce.date().optional(),
  location: z.string().optional(),
  status: z.string().optional(),
  committee: z
    .object({
      members: z.array(z.string()).default([]),
      results: z.array(z.string()).default([]),
    })
    .optional(),
  offers: z
    .array(
      z.object({
        company: z.string().optional(),
        value: z.number().nonnegative().optional(),
        notes: z.string().optional(),
      })
    )
    .optional(),
  metadata: z.record(z.any()).optional(),
  printData: z.record(z.any()).optional(),
});

export const dataTableQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
  globalFilter: z.string().optional(),
  filters: z.string().optional(),
  sorting: z.string().optional(),
});
