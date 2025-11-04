import { Page, Locator } from '@playwright/test';
import data from '../Data/data.json';

export class ToxForm {
  readonly page: Page;

  // ✅ Locators
  readonly toxReqLink: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly monthDropdown: Locator;
  readonly dayDropdown: Locator;
  readonly yearDropdown: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly city: Locator;
  readonly stateDropdown: Locator;
  readonly zipCode: Locator;
  readonly phoneTypeHome: Locator;
  readonly phonenumber: Locator;
  readonly genderMale: Locator;

  readonly selfPayInput: Locator;

  readonly timeOfCollection: Locator;
  readonly timeMeridian: Locator;
  readonly collectorDropdown: Locator;
  readonly routineTestingCheckbox: Locator;
  readonly noMedicationCheckbox: Locator;
  readonly continueButton: Locator;
  readonly physicianDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toxReqLink = page.locator("a[href='RequisitionForm.aspx']");
    
    //Patient Information Locators
    this.firstName = page.locator('#ContentPlaceHolder1_txtFirstName');
    this.lastName = page.locator('#ContentPlaceHolder1_txtLastName');
    this.monthDropdown = page.locator('#ContentPlaceHolder1_ucDateSelector_ddlMonth');
    this.dayDropdown = page.locator('#ContentPlaceHolder1_ucDateSelector_ddlDay');
    this.yearDropdown = page.locator('#ContentPlaceHolder1_ucDateSelector_ddlYear');
    this.address1 = page.locator('#ContentPlaceHolder1_txtAddress1');
    this.address2 = page.locator('#ContentPlaceHolder1_txtAddress2');
    this.city = page.locator('#ContentPlaceHolder1_txtCity');
    this.stateDropdown = page.locator('#ContentPlaceHolder1_ddlStates');
    this.zipCode = page.locator('#ContentPlaceHolder1_txtZipCode');
    this.phoneTypeHome = page.getByRole('radio', { name: data.ToxForm.Phonetype });
    this.phonenumber = page.locator('#ContentPlaceHolder1_txtphone');
    this.genderMale = page.getByRole('radio', { name: data.ToxForm.Gender, exact: true });

    
    this.selfPayInput = page.locator(`input[value="${data.ToxForm.InsuranceType}"]`);

    //specimen Collection Details Locators
    this.timeOfCollection = page.locator('#ContentPlaceHolder1_txttoc');
    this.timeMeridian = page.locator('.bootstrap-timepicker-meridian');
    this.collectorDropdown = page.locator('#ContentPlaceHolder1_ddlCollector');
    this.routineTestingCheckbox = page.locator('#ContentPlaceHolder1_cbRoutineTesting');
    this.noMedicationCheckbox = page.locator('#ContentPlaceHolder1_cbnomedication');
    this.continueButton = page.getByRole('link', { name: 'Continue' });
    this.physicianDropdown = page.locator('#ContentPlaceHolder1_ddlPhyName');
  }

  async openToxReqForm() {
    await this.toxReqLink.click();

  }

async EnterPatientInfo() {
await this.firstName.fill(data.ToxForm.FirstName);
await this.lastName.fill(data.ToxForm.LastName);
await this.monthDropdown.selectOption(data.ToxForm.Month);
await this.dayDropdown.selectOption(data.ToxForm.Day);
await this.yearDropdown.selectOption(data.ToxForm.Year);
await this.address1.fill(data.ToxForm.Address1);
await this.address2.fill(data.ToxForm.Address2);
await this.city.fill(data.ToxForm.City);
await this.stateDropdown.selectOption(data.ToxForm.State);
await this.zipCode.fill(data.ToxForm.ZipCode);
await this.phoneTypeHome.check();
await this.phonenumber.fill(data.ToxForm.PhoneNumber);
await this.genderMale.check();
}

async paymentAndCollectionDetails() {
    // Wait for elements to be ready
    await this.page.waitForTimeout(4000); // Give page time to be fully interactive
    await this.selfPayInput.click({ force: true });
    
    }
    
    
async fillToxForm() {
    await this.firstName.fill('test');
    await this.lastName.fill('test');
    await this.monthDropdown.selectOption('3');
    await this.dayDropdown.selectOption('8');
    await this.yearDropdown.selectOption('2021');
    await this.address1.fill('address1');
    await this.address2.fill('address2');
    await this.city.fill('city');
    await this.stateDropdown.selectOption('FL');
    await this.zipCode.fill('54000');
    await this.phoneTypeHome.check();
    await this.genderMale.check();
    await this.timeOfCollection.click();
    await this.timeMeridian.click();
    await this.collectorDropdown.selectOption('0');
    await this.routineTestingCheckbox.check();
    await this.noMedicationCheckbox.check();
    await this.continueButton.click();
    await this.city.fill('City');
    await this.phonenumber.fill(data.ToxForm.PhoneNumber);
    await this.stateDropdown.selectOption(data.ToxForm.State);
    await this.physicianDropdown.selectOption('20850');
}
}