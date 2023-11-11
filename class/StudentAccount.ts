import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (deposit: number): void => {
        if(this.validateStatus() && deposit > 0){ // The account must be valid and the deposit amount need to be a positive value bigger than 0.
          this.updateBalance(deposit + 10);
          console.log(`Você depositou R$${deposit + 10} em sua conta.`);
        }
      }

}