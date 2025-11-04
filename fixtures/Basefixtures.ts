import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ToxForm } from '../pages/ToxForm';

// Declare the types of your fixtures
type MyFixtures = {
    homePage: HomePage;
    toxreq : ToxForm;
};

// Extend the base test with your fixtures
export const test = base.extend<MyFixtures>({
    
    // Define the homepage fixture
    homePage: async ({ page }, use) => {
        // Create a new instance of HomePage
        const homePage = new HomePage(page);
        // Use the fixture
        await use(homePage);
    },

    // Define the toxreq fixture
    toxreq: async ({ page }, use) => {
        // Create a new instance of ToxForm
        const toxreq = new ToxForm(page);
        // Use the fixture
        await use(toxreq);
    },
});
    
// Export expect for convenience
export { expect } from '@playwright/test';