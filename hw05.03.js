/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
  
    transactions: [],
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
  
    createTransaction(amount, type) {
         const transaction = {
            id: Date.now(),
            amount,
            type,
        };
        this.transactions.push(transaction);
        return transaction;
    },
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        this.balance += amount;
        this.createTransaction(amount, Transaction.DEPOSIT);
        return this.balance;
    },
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.createTransaction(amount, Transaction.WITHDRAW);
            return this.balance;
        }
        alert('Недостатньо коштів!');
        return this.balance;
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance;
    },
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        return this.transactions.find((transaction) => transaction.id === id);
    },
  
    /*
  
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        return this.transactions.filter((transaction) => transaction.type === type).reduce(
            (total, transaction) => total + transaction.amount,
            0,
        );
    },
  };
  