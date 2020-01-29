"use strict";
class Common {
    // Landing page
    get NotNowLnk() {return $('button=Not Now');}
    get SuggestedForYouLbl() {return $('h4=Suggestions For You');}
    get SingOutLnk(){return $('//*[@id="second-nav"]/nav/ul/li[3]');}
    //Header
    get CyberTruckLnk() {return $('//*[@id="tsla-header-main"]/div/div/nav/div[1]/ol/li[5]/a');}
    get TeslaAccount() {return $('//*[@id="tsla-header-main"]/div/div/nav/div[1]/ol/li[15]/ol/li[3]/a');}
    //Order Now
    get OrderNow(){return $('//*[@id="hero"]/div/div[2]/section/div/div/a');}
    get TriMotorAWD() {return $('//*[@id="root"]/div/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div[3]/div[3]/div');}
    get FullySelfDriving() {return $('//*[@id="root"]/div/div[2]/div[2]/div/div[1]/div/div[3]/div[2]/div[3]/div/div/div/span/span[1]/p');}
    get BuyNow() {return $('//*[@id="root"]/div/div[2]/div[2]/div/div[3]/div/div[2]/button');}
    //Personal Information
    get FirstName(){return $('//*[@id="FIRST_NAME"]');}
    get LastName(){return $('//*[@id="LAST_NAME"]');}
    get EmailAddress(){return $('//*[@id="EMAIL"]');}
    get PhoneNumber(){return $('//*[@id="PHONE_NUMBER"]');}
    // Credit Card Information
    get NameOnCard(){return $('//*[@id="NAME_ON_CARD"]');}
    get CreditCardNumber(){return $('//*[@id="CREDIT_CARD"]');}
    get ExpirationDate(){return $('//*[@id="EXPIRATION_DATE"]');}
    get Cvv(){return $('//*[@id="CVV"]');}
    get BillingZipCode(){return $('//*[@id="BILLING_ZIPCODE"]');}
    
    get PlaceOrder(){return $('//*[@id="root"]/div/div[2]/div[2]/div/div[3]/div/div[3]/div/section/div[1]/div[2]/button');}
    get WrongCreditCard(){return $('//*[@id="root"]/div/div[2]/div[2]/div/div[3]/div/div[3]/div/div/section/div/form/div/div[3]/div[2]/div/div[1]/div[2]/div[1]/p');}
    disableWelcomePopup(){
        this.NotNowLnk.waitForDisplayed(20000, false, 'Not now modal was not displayed');
        this.NotNowLnk.click();
    };
    signout(){
        this.TeslaAccount.click();
        this.SingOutLnk.click();
    };
}
module.exports = Common;