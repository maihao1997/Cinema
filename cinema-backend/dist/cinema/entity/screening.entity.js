"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const movie_theater_entity_1 = require("./movie_theater.entity");
const auditorium_entity_1 = require("./auditorium.entity");
const movie_entity_1 = require("./movie.entity");
let Screening = class Screening {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Screening.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => movie_theater_entity_1.MovieTheater),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], Screening.prototype, "movie_theater_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => movie_entity_1.Movie),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], Screening.prototype, "movie_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => auditorium_entity_1.Auditorium),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], Screening.prototype, "auditorium_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Screening.prototype, "time_start", void 0);
Screening = __decorate([
    typeorm_1.Entity()
], Screening);
exports.Screening = Screening;
//# sourceMappingURL=screening.entity.js.map