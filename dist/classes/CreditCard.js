"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreditCard = /** @class */ (function () {
    function CreditCard(id, account_id, lastUsed, pinCode, wrongPinCodeAttempts, hasBeenBlocked, account) {
        this.id = id;
        this.account_id = account_id;
        this.account = account;
        this.lastUsed = lastUsed;
        this.pinCode = pinCode;
        this.wrongPinCodeAttempts = wrongPinCodeAttempts;
        this.hasBeenBlocked = hasBeenBlocked;
    }
    CreditCard.prototype.setId = function (id) {
        this.id = id;
    };
    CreditCard.prototype.getId = function () {
        return this.id;
    };
    CreditCard.prototype.setAccountId = function (id) {
        this.account_id = id;
    };
    CreditCard.prototype.getAccountId = function () {
        return this.account_id;
    };
    CreditCard.prototype.setAccount = function (account) {
        this.account = account;
    };
    CreditCard.prototype.getAccount = function () {
        return this.account;
    };
    CreditCard.prototype.setLastUsed = function (date) {
        this.lastUsed = date;
    };
    CreditCard.prototype.getLastUsed = function () {
        return this.lastUsed;
    };
    CreditCard.prototype.setPinCode = function (pinCode) {
        this.pinCode = pinCode;
    };
    CreditCard.prototype.getPinCode = function () {
        return this.pinCode;
    };
    CreditCard.prototype.setWrongPinCodeAttempt = function (attempts) {
        this.wrongPinCodeAttempts = attempts;
    };
    CreditCard.prototype.getWrongPinCodeAttempts = function () {
        return this.wrongPinCodeAttempts;
    };
    CreditCard.prototype.resetWrongPinCode = function () {
        this.wrongPinCodeAttempts = 0;
    };
    CreditCard.prototype.setBlocked = function () {
        this.hasBeenBlocked = true;
    };
    CreditCard.prototype.isBlocked = function () {
        return this.hasBeenBlocked;
    };
    return CreditCard;
}());
exports.default = CreditCard;
