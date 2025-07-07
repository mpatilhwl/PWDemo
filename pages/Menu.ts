import { el } from "@faker-js/faker";
import { Page, expect, Locator } from "@playwright/test";
import { privateDecrypt } from "crypto";

export class Menu {
private readonly page: Page;
//locators
private readonly requisitionmenu: Locator;

//constructor
constructor(page: Page) {
    this.page = page;

this.requisitionmenu = page.locator('//*[@id="hideHeader"]/div[2]/ul/li[3]/a/span');
}

//action methods
 async clickrequisitionButton() {
        await this.requisitionmenu.click();   
 }  
}
