import { createOfficeRouter } from "./common.route-factory.js";
import { getNashrFullData } from "../controllers/nashr.controller.js";

const router = createOfficeRouter("Nashr", [
  "tahsilat",
  "bay3-krassat",
  "tiba3a-mozakrat",
  "project",
  "project-condition",
  "nominated-company",
  "work-item",
  "bay3-krassat-project",
  "bay3-krassat-company",
]);

router.get("/full-data", getNashrFullData);

export default router;
