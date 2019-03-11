"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Accounts = /** @class */ (function () {
    function Accounts(id, balance) {
        this.id = id;
        this.balance = balance;
    }
    Accounts.prototype.setId = function (id) {
        this.id = id;
    };
    Accounts.prototype.getId = function () {
        return this.id;
    };
    Accounts.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Accounts.prototype.getBalance = function () {
        return this.balance;
    };
    Accounts.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Accounts.prototype.withDraw = function (amount) {
        this.balance -= amount;
    };
    return Accounts;
}());
exports.default = Accounts;
