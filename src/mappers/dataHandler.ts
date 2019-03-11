import mysql, { Connection } from 'mysql';
import DataMapperInterface from '../interfaces/DataMapper'
import CreditCardInterface from '../interfaces/CreditCardInterface';
import AccountInterface from '../interfaces/Account';
import Accounts from '../classes/Account'
import CreditCard from '../classes/CreditCard'

export default class DataHandler implements DataMapperInterface{

    connection: Connection;

    constructor(){
        this.connection = mysql.createConnection({
            host     : '45.76.91.135',
            user     : 'sammy',
            password : 'password',
            database : 'test05'
          });
          console.log("Successfully connected to db");
          this.connection.connect();
    }

    public setCreditCard(creditCard: CreditCard) : Promise<void>{
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE creditcard SET wrong_pin_code_attempts = ${creditCard.getWrongPinCodeAttempts()}, blocked = ${creditCard.isBlocked()} where id = ${creditCard.getId()};`, function (err, result) {
                if (err) reject(err)
                else{
                    resolve();
                }
            });
        });
    }

    public getCreditCard(id: number): Promise<CreditCard>{
        return new Promise(async (resolve, reject) => {
            this.connection.query(`select * from creditcard where id = ${id}`, async function (err, result) {
                if (err) reject(err)
                else{
                    if(result.length <= 0){
                        reject("No such card")
                    }else{
                        let card = JSON.parse(JSON.stringify(result[0]));
                        resolve(new CreditCard(card.id, card.account_id, card.last_used, card.pincode, card.wrong_pin_code_attempts, card.blocked));
                    }
                }
            });
        })
        
    }

    public setAccount(account: Accounts) : Promise<void>{
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE account SET balance = ${account.getBalance()} WHERE id = ${account.getId()};`, function (err, result) {
                if (err) reject(err)
                else{
                    resolve();
                }
            });
        });
    }

    public getAccount(id: number): Promise<Accounts>{
        return new Promise((resolve, reject) => {
            this.connection.query(`select * from account where id = ${id}`, function (err, result) {
                if (err) reject(err)
                else{
                    if(result.length <= 0){
                        reject("No such user")
                    }else{
                        let account = JSON.parse(JSON.stringify(result[0]))
                        resolve(new Accounts(account.id, account.balance));
                    }
                }
            });
        })
        
    }

    public closeCon(){
        this.connection.end();
    }


}