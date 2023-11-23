"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateduracurDto = void 0;
class CreateduracurDto {
    constructor(cursoDuracion) {
        this.cursoDuracion = cursoDuracion;
    }
    static create(props) {
        const { cursoDuracion } = props;
        if (!cursoDuracion)
            return ['CursoDuracion property is required', undefined];
        return [undefined, new CreateduracurDto(cursoDuracion)];
    }
}
exports.CreateduracurDto = CreateduracurDto;
