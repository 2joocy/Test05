import Account from './Account'

export default interface CreditCardInterface{
    setId: setId,
    getId: getId,
    setAccount: setAccount,
    getAccount: getAccount,
    setLastUsed: setLastUsed,
    getLastUsed: getLastUsed,
    setPinCode: setPinCode,
    getPinCode: getPinCode,
    setWrongPinCodeAttempt: setWrongPinCodeAttempt,
    getWrongPinCodeAttempts: getWrongPinCodeAttempts,
    resetWrongPinCode: resetWrongPinCode,
    setBlocked: setBlocked,
    isBlocked: isBlocked
}

interface setId{
    (id: number): void
}

interface getId{
    (): number
}

interface setAccount{
    (account: Account): void
}

interface getAccount{
    () : Account | undefined
}

interface setLastUsed{
    (lastUsed: string) : void
}

interface getLastUsed{
    () : string
}

interface setPinCode{
    (pinCode: number) : void
}

interface getPinCode{
    () : number
}

interface setWrongPinCodeAttempt{
    (wrongPinCodeAttempts: number) : void
}

interface getWrongPinCodeAttempts{
    () : number
}

interface resetWrongPinCode{
    () : void
}

interface setBlocked{
    (blocked: boolean) : void
}


interface isBlocked{
    () : boolean
}