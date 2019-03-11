import Atm from '../mappers/atm'
import CreditCard from '../classes/CreditCard';
import AtmInterface from '../interfaces/AtmInterface';
import DataHandler from '../mappers/dataHandler';
/*
jest.mock('../mappers/atm');
beforeAll(() => {
    // @ts-ignore
    Atm.mockClear();
});
*/


describe('Testing ATM', () => {
    /*
    jest.mock('../mappers/atm', () => {
        return {dataHandler: {getCreditCard: jest.fn(() => {
            return Promise.resolve(42);
        })}};
    });
    */
    test('Throw error when no card is found', async (done) => {
        let atm = new Atm();
        try {
            const getCredit = await atm.insert(new CreditCard(-1, 0, "", 8883, 1, false), 8998);
            expect(getCredit).toBe(43);
        } catch (e) {
            expect(e).toEqual("No such card");
            done();
        } finally {
            atm.eject();
            atm.closeCon();
        }
    });

    test('Throw error when pincode is wrong', async (done) => {
        let atm = new Atm();
        try {
            let tempCard = new CreditCard(2, 2, new Date().toISOString(), 8888, 0, false);
            await atm.insert(tempCard, 8878)
        } catch (e) {
            expect(e).toEqual("incorrect pin code");
            done();
        } finally {
            atm.eject();
            atm.closeCon();
        }
    });

    test('Trying to withdraw when not enough funds', async (done) => {
        let atm = new Atm();
        try {
            let tempCard = new CreditCard(3, 3, new Date().toISOString(), 8888, 0, false);
            await atm.insert(tempCard, 8888)
            await atm.withdraw(10000000000);
        } catch (e) {
            expect(e).toEqual("Insufficient Funds");
            done();
        } finally {
            atm.eject();
            atm.closeCon();
        }
    });

    test('Throw error when card is blocked', async (done) => {
        let atm = new Atm();
        try {
            let tempCard = new CreditCard(1, 1, new Date().toISOString(), 3333, 3, false);
            await atm.insert(tempCard, 8878)
        } catch (e) {
            expect(e).toEqual("Card is blocked");
            done();
        } finally {
            atm.eject();
            atm.closeCon();
        }
    });
})