"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
exports.routes = (0, express_1.Router)();
exports.routes.use('/user');
exports.routes.use((req, res) => {
    res.render('notFound');
});
//# sourceMappingURL=mainRoutes.js.map