import { test, expect } from "@playwright/test";
import { Menu } from "../pages/Menu.ts";
import { TestConfig } from "../test.config.ts";
import { LoginPage } from "../pages/LoginPage";
import { CreateRequisition } from "../pages/CreateRequisition.ts";


test('Create Requisition', async ({ page }) => {  
    const loginPage = new LoginPage(page);   
     const config = new TestConfig();
    const menu = new Menu(page);
    const createRequisition = new CreateRequisition(page);    
    await page.goto(config.appUrl);        
    await loginPage.setUserName(config.pmUserName);
    await loginPage.setPassword(config.pmPW);   
    await loginPage.clickLoginButton();         
    await menu.clickrequisitionButton(); 
    await createRequisition.clickrequisitionButton();
});
