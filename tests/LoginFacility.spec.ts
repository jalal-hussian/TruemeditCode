import { test, expect } from '../fixtures/Basefixtures';
import  data from '../Data/data.json';


test.describe('Login Facility', () => {
  test('test login facility', async ({ toxreq,homePage, page }) => {
    await homePage.navigate();
    await homePage.loginpage.isVisible();
    await homePage.login(data.validusername.email, data.validusername.password);
    await homePage.selectFacility();
    

    await toxreq.openToxReqForm();

    await toxreq.EnterPatientInfo();

    await page.pause();

    await toxreq.paymentAndCollectionDetails();
    
    await page.pause();
    
    await toxreq.paymentAndCollectionDetails();
    await page.pause();

  });
});


