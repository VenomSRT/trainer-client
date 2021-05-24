import { observable, action } from 'mobx'
import { LoginData } from '../../../customTypes/customTypes';

export class HomeStore {
  @observable userLoginData: LoginData = {
    login: '',
    password: '',
  };

  @action setUserLoginData(loginData: LoginData) {
    this.userLoginData = loginData;
    this.loginUser(this.userLoginData)
  }

  async loginUser(userLoginData: LoginData) {
    
  }
}