function BankAccount(balance) {
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
};

BankAccount.prototype.checkBalance = function() {
  console.log(this.balance);
};

let ba = new BankAccount(1000);
ba.checkBalance();

ba.deposit(500);
ba.checkBalance();

ba.withdraw(200);
ba.checkBalance();
