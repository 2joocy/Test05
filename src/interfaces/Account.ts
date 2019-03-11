export default interface AccountInterface{
    setId: setId,
    getId: getId,
    setBalance: setBalance,
    getBalance: getBalance,
    deposit: deposit,
    withDraw: withDraw
}

interface setId{
    (id: number): void
}

interface getId{
    (): number
}

interface setBalance{
    (balance: number): void
}

interface getBalance{
    (): number
}

interface deposit{
    (amount: number): void
}

interface withDraw{
    (amount: number) : void
}