import { Connection } from 'mysql';
import CreditCard from '../classes/CreditCard';
import CreditCardInterface from './CreditCardInterface';
import AccountInterface from './Account';
import Accounts from '../classes/Account';

export default interface DataMapperInterface{
    setCreditCard: setCreditCard,
    getCreditCard: getCreditCard,
    setAccount: setAccount,
    getAccount: getAccount,
    closeCon: closeCon
}

interface setCreditCard{
    (creditCard: CreditCard) : Promise<void>
}

interface getCreditCard{
    (id: number) : Promise<CreditCard>
}

interface setAccount{
    (account: Accounts) : Promise<void>
}

interface getAccount{
    (id: number) : Promise<Accounts>
}

interface closeCon{
    () : void
}