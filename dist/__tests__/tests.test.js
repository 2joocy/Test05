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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var atm_1 = __importDefault(require("../mappers/atm"));
var CreditCard_1 = __importDefault(require("../classes/CreditCard"));
/*
jest.mock('../mappers/atm');
beforeAll(() => {
    // @ts-ignore
    Atm.mockClear();
});
*/
describe('Testing ATM', function () {
    /*
    jest.mock('../mappers/atm', () => {
        return {dataHandler: {getCreditCard: jest.fn(() => {
            return Promise.resolve(42);
        })}};
    });
    */
    test('Throw error when no card is found', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var atm, getCredit, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    atm = new atm_1.default();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, atm.insert(new CreditCard_1.default(-1, 0, "", 8883, 1, false), 8998)];
                case 2:
                    getCredit = _a.sent();
                    expect(getCredit).toBe(43);
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _a.sent();
                    expect(e_1).toEqual("No such card");
                    done();
                    return [3 /*break*/, 5];
                case 4:
                    atm.eject();
                    atm.closeCon();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); });
    test('Throw error when pincode is wrong', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var atm, tempCard, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    atm = new atm_1.default();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    tempCard = new CreditCard_1.default(2, 2, new Date().toISOString(), 8888, 0, false);
                    return [4 /*yield*/, atm.insert(tempCard, 8878)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_2 = _a.sent();
                    expect(e_2).toEqual("incorrect pin code");
                    done();
                    return [3 /*break*/, 5];
                case 4:
                    atm.eject();
                    atm.closeCon();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); });
    test('Trying to withdraw when not enough funds', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var atm, tempCard, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    atm = new atm_1.default();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    tempCard = new CreditCard_1.default(3, 3, new Date().toISOString(), 8888, 0, false);
                    return [4 /*yield*/, atm.insert(tempCard, 8888)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, atm.withdraw(10000000000)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4:
                    e_3 = _a.sent();
                    expect(e_3).toEqual("Insufficient Funds");
                    done();
                    return [3 /*break*/, 6];
                case 5:
                    atm.eject();
                    atm.closeCon();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); });
    test('Throw error when card is blocked', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var atm, tempCard, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    atm = new atm_1.default();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    tempCard = new CreditCard_1.default(1, 1, new Date().toISOString(), 3333, 3, false);
                    return [4 /*yield*/, atm.insert(tempCard, 8878)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_4 = _a.sent();
                    expect(e_4).toEqual("Card is blocked");
                    done();
                    return [3 /*break*/, 5];
                case 4:
                    atm.eject();
                    atm.closeCon();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); });
});
