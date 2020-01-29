"use strict";
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get UsernameTxt() {return $('[name="email"]');}
    get PasswordTxt() {return $('[name="password"]');}
    get SignInLnk() {return $('.button');}
    get SignInTopNav() {return $('//*[@id="tds-header-main"]/div/div/nav/nav[1]/ol/li[8]/ol/li[2]/a')}
    // Helper method to avoid code duplication
    signin(username, password){
        this.UsernameTxt.setValue(username);
        this.PasswordTxt.setValue(password);
        this.SignInLnk.click();
    };
   
}
module.exports = Login;