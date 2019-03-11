import AtmInterface from "../interfaces/AtmInterface";
import DataHandler from "./dataHandler";
import DataMapperInterface from "../interfaces/DataMapper";
import CreditCardInterface from "../interfaces/CreditCardInterface";
import CreditCard from "../classes/CreditCard";



export default class Atm implements AtmInterface {
    private dataHandler: DataMapperInterface;
    private creditcard: CreditCard | undefined;

    constructor() {
        this.dataHandler = new DataHandler();
    }

    public insert(creditCard: CreditCard, pinCode: number): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            if (this.dataHandler) {
                try {
                    let card = await this.dataHandler.getCreditCard(creditCard.getId());
                    if (card.isBlocked()) {
                        reject("Card is blocked");
                        this.creditcard = undefined;
                    } else {
                        if (pinCode !== card.getPinCode()) {
                            if (creditCard.getWrongPinCodeAttempts() >= 3) {
                                creditCard.setBlocked();
                                await this.dataHandler.setCreditCard(creditCard);
                                this.creditcard = undefined;
                            } else {
                                card.setWrongPinCodeAttempt(card.getWrongPinCodeAttempts() + 1)
                                await this.dataHandler.setCreditCard(card);
                                this.creditcard = undefined;
                            }
                            reject("incorrect pin code");
                        } else {
                            creditCard.setWrongPinCodeAttempt(0);
                            this.creditcard = creditCard;
                            await this.dataHandler.setCreditCard(creditCard);
                            return resolve(true);
                        }
                    }

                } catch (err) {
                    reject(err);
                }
            } else {
                resolve(false);
            }
        })

    }

    public eject(): void {
        if (this.dataHandler) {
            this.creditcard = undefined;
        }
    }

    public deposit(amount: number): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            if (this.dataHandler && this.creditcard) {
                let account = await this.dataHandler.getAccount(this.creditcard.getAccountId());
                if (account.getBalance() >= amount) {
                    account.setBalance(account.getBalance() - amount);
                    this.dataHandler.setAccount(account);
                } else {
                    resolve(false);
                }
            } else {
                resolve(false);
            }
        })
    }

    public withdraw(amount: number): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            if (this.dataHandler && this.creditcard) {
                let account = await this.dataHandler.getAccount(this.creditcard.getAccountId());
                if (account.getBalance() >= amount) {
                    account.setBalance(account.getBalance() - amount);
                    this.dataHandler.setAccount(account);
                } else {
                    reject("Insufficient Funds")
                }
            } else {
                resolve(false);
            }
        })
    }

    public balance(): Promise<number> {
        return new Promise(async (resolve, reject) => {
            if (this.dataHandler && this.creditcard) {
                const account = await this.dataHandler.getAccount(this.creditcard.getAccountId());
                resolve(account.getBalance());
            } else {
                resolve(0);
            }
        })
    }

    public closeCon() : void {
        this.dataHandler.closeCon();
    }
}