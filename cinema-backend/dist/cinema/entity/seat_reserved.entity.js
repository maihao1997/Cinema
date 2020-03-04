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
const seat_entity_1 = require("./seat.entity");
const reservation_entity_1 = require("./reservation.entity");
const movie_theater_entity_1 = require("./movie_theater.entity");
const screening_entity_1 = require("./screening.entity");
let SeatReserved = class SeatReserved {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], SeatReserved.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => seat_entity_1.Seat),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], SeatReserved.prototype, "seat_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => reservation_entity_1.Reservation),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], SeatReserved.prototype, "reservation_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => movie_theater_entity_1.MovieTheater),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], SeatReserved.prototype, "movie_theater_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => screening_entity_1.Screening),
    typeorm_1.JoinColumn(),
    __metadata("design:type", String)
], SeatReserved.prototype, "screening_id", void 0);
SeatReserved = __decorate([
    typeorm_1.Entity()
], SeatReserved);
exports.SeatReserved = SeatReserved;
//# sourceMappingURL=seat_reserved.entity.js.map