import CreditCardInterface from "../interfaces/CreditCardInterface";
import AccountInterface from "../interfaces/Account";

export default class CreditCard implements CreditCardInterface{
    private id : number;
    private account?: AccountInterface;
    private account_id: number
    private lastUsed: string;
    private pinCode: number;
    private wrongPinCodeAttempts: number;
    private hasBeenBlocked: boolean;

    constructor(id: number, account_id: number, lastUsed: string, pinCode: number, wrongPinCodeAttempts: number, hasBeenBlocked: boolean, account?: AccountInterface){
        this.id = id;
        this.account_id = account_id;
        this.account = account;
        this.lastUsed = lastUsed;
        this.pinCode = pinCode;
        this.wrongPinCodeAttempts = wrongPinCodeAttempts;
        this.hasBeenBlocked = hasBeenBlocked;
    }

    public setId(id: number) : void{
        this.id = id;
    }
    
    public getId() : number{
        return this.id;
    }

    public setAccountId(id: number) : void{
        this.account_id = id;
    }
    
    public getAccountId() : number{
        return this.account_id;
    }
    
    public setAccount(account: AccountInterface): void{
        this.account = account;
    }
    
    public getAccount() : AccountInterface | undefined{
        return this.account;
    }
    
    public setLastUsed(date: string): void{
        this.lastUsed = date;
    }
    
    public getLastUsed() : string{
        return this.lastUsed;
    }
    
    public setPinCode(pinCode: number) : void{
        this.pinCode = pinCode;
    }
    
    public getPinCode(){
        return this.pinCode;
    }
    
    public setWrongPinCodeAttempt(attempts: number){
        this.wrongPinCodeAttempts = attempts; 
    }
    
    public getWrongPinCodeAttempts() : number{
        return this.wrongPinCodeAttempts;
    }
    
    public resetWrongPinCode() : void{
        this.wrongPinCodeAttempts = 0;
    }
    
    public setBlocked() : void{
        this.hasBeenBlocked = true;
    }
    
    
    public isBlocked() : boolean{
       return this.hasBeenBlocked;
    }

}