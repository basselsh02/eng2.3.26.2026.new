import { BaseRepository } from "./base.repository.js";
import { Project } from "../models/project.model.js";
import { Task } from "../models/task.model.js";
import { User } from "../models/user.model.js";
import {
  Nashr,
  Oqood,
  Siyana,
  Tawridat,
  Mashtarawat,
  Mizaniya,
  Hesabat,
} from "../models/office-records.model.js";

export const repositories = {
  Project: new BaseRepository(Project),
  Task: new BaseRepository(Task),
  User: new BaseRepository(User),
  Nashr: new BaseRepository(Nashr),
  Oqood: new BaseRepository(Oqood),
  Siyana: new BaseRepository(Siyana),
  Tawridat: new BaseRepository(Tawridat),
  Mashtarawat: new BaseRepository(Mashtarawat),
  Mizaniya: new BaseRepository(Mizaniya),
  Hesabat: new BaseRepository(Hesabat),
};
