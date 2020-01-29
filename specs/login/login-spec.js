const assert = require('assert')
const LoginPage = require('../../page_objects/login/login-page');
const CommonPage = require('../../page_objects/common/common-page');
const ProfilePage = require('../../page_objects/profile/profile-page');
const loginUrl = 'https://auth.tesla.com/login';
const timeout = 20000;
const username = 'samsidehassle@gmail.com';
const password = 'Whydoyouneedmypass1!';

describe('Login', () => {
    // This hook runs only once before all tests
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage();
        this.commonPage = new CommonPage();
        this.profilePage = new ProfilePage();
    });
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });
    it('should be able to login', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.UsernameTxt.setValue(username);
        this.loginPage.PasswordTxt.setValue(password);
        this.loginPage.SignInLnk.click();
        // Verify use was logged in by waiting fof sign out button
        this.commonPage.SingOutLnk.waitForDisplayed(timeout, false, 'sign out button was not displayed');
        // sign out of the website
        this.commonPage.signout();
    });
    it('should be able to logout', () => {
        browser.url(loginUrl)
        // Log in with username, password
        this.loginPage.signin(username, password);
        // Click on log out button
        this.commonPage.SingOutLnk.click();
        // Verify user was logged out
        this.loginPage.SignInTopNav.waitForDisplayed(timeout, false, 'SIGN IN button was not displayed');
        
    });
    it('should not be able to order a cybertruck with wrong credit card number', () =>{4
        browser.url(loginUrl)
        //Log in with username, password
        this.loginPage.signin(username, password);
        //Go to Cybertruck page
        this.commonPage.CyberTruckLnk.click();  
        //Click on Order now
        this.commonPage.OrderNow.click();
        //Order the top one + fully self-driving option
        this.commonPage.TriMotorAWD.click();  
        this.commonPage.FullySelfDriving.click();
        this.commonPage.BuyNow.click();
        //Enter Personal Information
        this.commonPage.FirstName.setValue('Sam');
        this.commonPage.LastName.setValue('Razmi');
        this.commonPage.EmailAddress.setValue('Sam@sam.com');
        this.commonPage.PhoneNumber.setValue('8329293052');
        // Enter Credit Cards
        this.commonPage.NameOnCard.setValue('Sam');
        this.commonPage.CreditCardNumber.setValue('4358802582417256');
        this.commonPage.ExpirationDate.setValue('10/29');
        this.commonPage.Cvv.setValue('256');
        this.commonPage.BillingZipCode.setValue('90017');
        this.commonPage.PlaceOrder.click();
        //browser.debug();
        browser.waitUntil(() => {
            return this.commonPage.WrongCreditCard.getText() == 'CARD NUMBER IS NOT VALID';
        });
        //this.commonPage.WrongCreditCard.waitUntill(timeout, false, 'That was a correct Credit Card Number');
    });
});