"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuracurRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class DuracurRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const duraCurControllers = new controller_1.DuraCurController();
        router.get('/', duraCurControllers.getDuracurso);
        router.get('/:id', duraCurControllers.getDuracursobyId);
        router.post('/id', duraCurControllers.createduracur);
        router.put('/:id', duraCurControllers.updateduracur);
        router.delete('/:id', duraCurControllers.deleteduracur);
        return router;
    }
}
exports.DuracurRoutes = DuracurRoutes;
