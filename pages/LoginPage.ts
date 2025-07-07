import { el } from "@faker-js/faker";
import { Page, expect, Locator } from "@playwright/test";
import { privateDecrypt } from "crypto";

export class LoginPage {
private readonly page: Page;
//locators
private readonly userName: Locator;
private readonly password: Locator; 
private readonly loginButton: Locator;  

//constructor
constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('#loginName');
    this.password = page.locator('#loginPassword');
    this.loginButton = page.locator('.btn.blue-btn[value="Login"]');
}
    // async login(userName: string, password: string) {
    //     await this.userName.fill(userName); 
    //     await this.password.fill(password);
    //     await this.loginButton.click();     
    // }

    async setUserName(userName: string) {
        await this.userName.fill(userName); 
    }
    async setPassword(password: string) {
        await this.password.fill(password);
    }   
    async clickLoginButton() {
        await this.loginButton.click();     
    }
}
//action methods
// async isLoginPageExists(){

//     let url: string = this.page.url();
//    if (url.includes("/hwlmsp/")) {
//         console.log("HWL MSP Login Page exists");
//         return true;
//     }
//     else 
//         return false


//}