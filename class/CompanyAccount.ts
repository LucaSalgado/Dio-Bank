import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  getLoan = (loan: number): void => {
    if (this.validateStatus()) {
      this.updateBalance(loan);
      console.log(`Você pegou um empréstimo de R$${loan}.`);
    }
  }
}
