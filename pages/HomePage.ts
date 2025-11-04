import { Locator, Page } from '@playwright/test';
import  data from '../Data/data.json';

export class HomePage {
readonly page: Page;
readonly username : Locator;
readonly password : Locator;
readonly loginButton : Locator;
readonly loginpage : Locator;
readonly selectfacilitydropdown : Locator;
readonly facilityselected : Locator;
readonly continuefacilitybutton : Locator;

readonly FacilityName = data.FacilityName;

  constructor(page: Page) {

this.page = page;
this.username = page.locator('input#txtUserEmail');
this.password = page.locator('input#txtPassword');
this.loginButton = page.locator('input#btnSave');    
this.loginpage = page.locator('text=Sign In'); 
this.selectfacilitydropdown = page.locator('select#ddlLabs');
this.facilityselected = page.locator(`option:text()`);
this.continuefacilitybutton = page.locator('input#btnContinue');

  

  
}
 async navigate() {
        try {
            await this.page.goto('https://gtilabs.submitrx.com/Login.aspx', {
                timeout: 30000, // 30 seconds
                waitUntil: 'networkidle'
            });
        } catch (error) {
            console.error('Navigation failed:', error);
            throw error;
        }
    }
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async selectFacility() {
// Select option by visible text (label) from JSON
    await this.selectfacilitydropdown.selectOption({ label: data.FacilityName });
    await this.continuefacilitybutton.click();
    }

}