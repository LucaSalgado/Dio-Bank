import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount.getName());
peopleAccount.deposit(10.5);
peopleAccount.getBalance();
peopleAccount.withdraw(9);
peopleAccount.getBalance();
console.log();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount.getName());
companyAccount.deposit(10);
companyAccount.getBalance();
companyAccount.withdraw(10);
companyAccount.getBalance();
companyAccount.getLoan(10);
companyAccount.getBalance();
console.log();

const studentAccount: StudentAccount = new StudentAccount('Lucas', 2);
console.log(studentAccount.getName());
studentAccount.deposit(10);
studentAccount.getBalance();
studentAccount.withdraw(20);
studentAccount.getBalance();
console.log();