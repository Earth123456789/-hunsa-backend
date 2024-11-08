"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ServiceController_1 = require("../controllers/ServiceController");
const router = (0, express_1.Router)();
router.post("/create", ServiceController_1.createService);
router.get("/", ServiceController_1.getAllServices);
router.get("/:id", ServiceController_1.getServiceById);
router.put("/edit/:id", ServiceController_1.updateService);
router.delete("/:id", ServiceController_1.deleteService);
exports.default = router;
