import DataMapper from '../interfaces/DataMapper'
import CreditCardInterface from './CreditCardInterface';
import CreditCard from '../classes/CreditCard';

export default interface AtmInterface{
    insert: insert;
    eject: eject;
    deposit: deposit;
    withdraw: withdraw;
    balance: balance;
}

interface insert{
    (creditCard: CreditCard, pinCode: number) : Promise<boolean>
}

interface eject{
    () : void
}

interface deposit{
    (amount: number) : Promise<boolean>
}

interface withdraw{
    (amount: number) : Promise<boolean>
}

interface balance{
    () : Promise<number>
}