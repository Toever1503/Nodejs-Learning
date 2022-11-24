"use strict";

import ResourceHandler from "../../bases/route/ResourceHandler.js";
import RequestHandler from "../../bases/route/RequestHandler.js";
import dashboardHandler from "./dashboard/DashboardHandler.js";

const ADMIN_PREFIX_PATH = '/admin/';

const adminController = new ResourceHandler(ADMIN_PREFIX_PATH)
adminController
    .get(new RequestHandler("", dashboardHandler.dashboard))
;
export default adminController;