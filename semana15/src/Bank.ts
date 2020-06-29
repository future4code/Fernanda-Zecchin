import {ExtractItem} from './ExtractItem'

import { Account} from "./userAccount"
import {JSONFileManager} from "./JSONFileManager"

export class Bank {
  userAccounts: Account[];
  fileManager: JSONFileManager;

  constructor(userAccount: Account[], fileManager: JSONFileManager) {
    this.userAccounts = userAccount
    this.fileManager = fileManager
  }

  createAccount(userAccount: Account) : void {
    this.userAccounts.push(Account[])
  }
}



