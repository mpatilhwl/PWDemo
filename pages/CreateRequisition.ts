import { el } from "@faker-js/faker";
import { Page, expect, Locator } from "@playwright/test";
import { privateDecrypt } from "crypto";

export class CreateRequisition  {
private readonly page: Page;
//locators
private readonly CreateRequisitionButton: Locator;

//constructor
constructor(page: Page) {
    this.page = page;

this.CreateRequisitionButton = page.locator('.btn.create-req.newPalleteButton.marginLeft5.small-tooltip');
}

//action methods
 async clickrequisitionButton() {
        await this.CreateRequisitionButton.click();   
 }  
}

