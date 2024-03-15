import { makeAutoObservable } from "mobx";

class AuthStore {
    auth = false
    nameUser = ""
    surnameUser = ""
    patronymicUser = ""
    passwordUser = ""
    emailUser = ""
    constructor() {
        makeAutoObservable(this)
    }
    authorization(name: string, surname: string, patronymic: string, password: string, email: string) {
        this.auth = true
        this.nameUser = name
        this.surnameUser = surname
        this.patronymicUser = patronymic
        this.passwordUser = password
        this.emailUser = email
    }
    exit() {
        this.auth = false
        this.nameUser = ""
        this.surnameUser = ""
        this.patronymicUser = ""
        this.passwordUser = ""
        this.emailUser = ""
    }
}

export default new AuthStore()