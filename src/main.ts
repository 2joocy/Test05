import mysql from 'mysql';
import DataHandler from './mappers/dataHandler'

class Main{
  dataHandler: DataHandler;

  constructor(){
    this.dataHandler = new DataHandler()
    this.main();
  }

  async main(){
    const account = await this.dataHandler.getAccount(4);
    const card = await this.dataHandler.getCreditCard(1);
  }
}

new Main();