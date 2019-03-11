import AccountInterface from "../interfaces/Account";


export default class Accounts implements AccountInterface {
    
    private id : number;
    private balance: number;

    constructor(id: number, balance: number){
        this.id = id;
        this.balance = balance
    }

    public setId(id: number){
        this.id = id;
    }

    public getId() : number{
        return this.id;
    }

    public setBalance(balance: number){
        this.balance = balance;
    }

    public getBalance(): number{
        return this.balance;
    }

    public deposit(amount: number){
        this.balance += amount;
    }

    public withDraw(amount: number){
        this.balance -= amount;
    }
}