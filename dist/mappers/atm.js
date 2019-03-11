"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataHandler_1 = __importDefault(require("./dataHandler"));
var Atm = /** @class */ (function () {
    function Atm() {
        this.dataHandler = new dataHandler_1.default();
    }
    Atm.prototype.insert = function (creditCard, pinCode) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var card, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.dataHandler) return [3 /*break*/, 13];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 11, , 12]);
                        return [4 /*yield*/, this.dataHandler.getCreditCard(creditCard.getId())];
                    case 2:
                        card = _a.sent();
                        if (!card.isBlocked()) return [3 /*break*/, 3];
                        reject("Card is blocked");
                        this.creditcard = undefined;
                        return [3 /*break*/, 10];
                    case 3:
                        if (!(pinCode !== card.getPinCode())) return [3 /*break*/, 8];
                        if (!(creditCard.getWrongPinCodeAttempts() >= 3)) return [3 /*break*/, 5];
                        creditCard.setBlocked();
                        return [4 /*yield*/, this.dataHandler.setCreditCard(creditCard)];
                    case 4:
                        _a.sent();
                        this.creditcard = undefined;
                        return [3 /*break*/, 7];
                    case 5:
                        card.setWrongPinCodeAttempt(card.getWrongPinCodeAttempts() + 1);
                        return [4 /*yield*/, this.dataHandler.setCreditCard(card)];
                    case 6:
                        _a.sent();
                        this.creditcard = undefined;
                        _a.label = 7;
                    case 7:
                        reject("incorrect pin code");
                        return [3 /*break*/, 10];
                    case 8:
                        creditCard.setWrongPinCodeAttempt(0);
                        this.creditcard = creditCard;
                        return [4 /*yield*/, this.dataHandler.setCreditCard(creditCard)];
                    case 9:
                        _a.sent();
                        return [2 /*return*/, resolve(true)];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 12];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        resolve(false);
                        _a.label = 14;
                    case 14: return [2 /*return*/];
                }
            });
        }); });
    };
    Atm.prototype.eject = function () {
        if (this.dataHandler) {
            this.creditcard = undefined;
        }
    };
    Atm.prototype.deposit = function (amount) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.dataHandler && this.creditcard)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dataHandler.getAccount(this.creditcard.getAccountId())];
                    case 1:
                        account = _a.sent();
                        if (account.getBalance() >= amount) {
                            account.setBalance(account.getBalance() - amount);
                            this.dataHandler.setAccount(account);
                        }
                        else {
                            resolve(false);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        resolve(false);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Atm.prototype.withdraw = function (amount) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.dataHandler && this.creditcard)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dataHandler.getAccount(this.creditcard.getAccountId())];
                    case 1:
                        account = _a.sent();
                        if (account.getBalance() >= amount) {
                            account.setBalance(account.getBalance() - amount);
                            this.dataHandler.setAccount(account);
                        }
                        else {
                            reject("Insufficient Funds");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        resolve(false);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Atm.prototype.balance = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.dataHandler && this.creditcard)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dataHandler.getAccount(this.creditcard.getAccountId())];
                    case 1:
                        account = _a.sent();
                        resolve(account.getBalance());
                        return [3 /*break*/, 3];
                    case 2:
                        resolve(0);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Atm.prototype.closeCon = function () {
        this.dataHandler.closeCon();
    };
    return Atm;
}());
exports.default = Atm;
