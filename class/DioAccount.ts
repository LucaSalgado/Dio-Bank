export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  protected updateBalance = (newBalance: number): void => {
    this.balance += newBalance;
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus() && deposit > 0){ // The account must be valid and the deposit amount need to be a positive value bigger than 0.
      this.balance += deposit;
      console.log(`Você depositou R$${deposit} em sua conta.`);
    }
  }

  withdraw = (withdraw: number): void => {
    if (this.validateStatus() && this.balance >= withdraw) { // The account must be valid and the account's balance need to be bigger than the value anted to withdraw.
      this.balance -= withdraw;
      console.log(`Você sacou R$${withdraw} da sua conta.`);
    }
  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida.');
  }
}
