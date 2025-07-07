import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";

test('login with valid credentials', async ({ page }) => {  
    const config = new TestConfig();
    const loginPage = new LoginPage(page);
        await page.goto(config.appUrl);        
        await loginPage.setUserName(config.pmUserName);
        await loginPage.setPassword(config.pmPW);   
        await loginPage.clickLoginButton(); 
}
);