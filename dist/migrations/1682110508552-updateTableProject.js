"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableProject1682110508552 = void 0;
class UpdateTableProject1682110508552 {
    constructor() {
        this.name = 'UpdateTableProject1682110508552';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "projects" ADD "link_repo" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "projects" ADD "link_page" character varying NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "link_page"`);
            yield queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "link_repo"`);
        });
    }
}
exports.UpdateTableProject1682110508552 = UpdateTableProject1682110508552;
//# sourceMappingURL=1682110508552-updateTableProject.js.map