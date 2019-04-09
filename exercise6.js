'use strict'

let account = {
  balance: 0,
  depositBalance: 0,
  withdrawalBalance: 0
}

const depositMoney = function (anAccount, amount) {
  anAccount.balance += amount
  anAccount.depositBalance += amount
  console.log(`R${amount} has been deposited`)
}

const withdrawMoney = function (anAccount, amount) {
  if (anAccount.balance >= amount) {
    anAccount.balance -= amount
    anAccount.withdrawalBalance += amount
    console.log(`R${amount} has been withdrawn`)
  } else {
    console.log('Insufficient funds. Withdrawal terminated.')
  }
}

const getAccountInfo = function (anAccount) {
  const info = `This account has a balance of R${anAccount.balance}. There have been deposits totalling R${anAccount.depositBalance} and withdrawals totalling R${anAccount.withdrawalBalance}`
  return info
}

depositMoney(account, 1000)
withdrawMoney(account, 200)

let accountStatus = getAccountInfo(account)
console.log(accountStatus)

withdrawMoney(account, 2000)

accountStatus = getAccountInfo(account)
console.log(accountStatus)

depositMoney(account, 5000)
withdrawMoney(account, 350)
depositMoney(account, 650)
withdrawMoney(account, 3000)

accountStatus = getAccountInfo(account)
console.log(accountStatus)
