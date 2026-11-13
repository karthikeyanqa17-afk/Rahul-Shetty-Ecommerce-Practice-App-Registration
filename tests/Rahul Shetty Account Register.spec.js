
import {test, expect} from '@playwright/test';
import dataset from '../test-data/testdata.json';

for (const data of dataset) {

    test(`Registration test: ${data.testName} ${data.tag}`, async ({ page }) => {
    
        await page.goto('https://rahulshettyacademy.com/client');
        await page.getByRole('link', { name: 'Register' }).click();

        await page.getByRole ('textbox', { name: 'First Name' }).fill(data.firstName);
        await page.getByRole ('textbox', { name: 'Last Name'}).fill(data.lastName);
        await page.getByRole('textbox', { name: 'email@example.com' }).fill(data.email);
        await page.getByRole('textbox', { name: 'enter your number' }).fill(data.phone);
    
    // Select dropdown option
    await page.getByRole('combobox').selectOption('Engineer');

    // Check the radio button conditionally
    const maleRadioBtn = page.getByRole('radio', { name: 'Male', exact: true });
    if (!(await maleRadioBtn.isChecked())) {
        await maleRadioBtn.check();
    }

    await page.getByRole('textbox', { name: 'Passsword' }).fill(data.password);
    await page.getByRole('textbox', { name: 'Confirm Password' }).fill(data.confirmPassword);
    await page.getByRole('checkbox').check();

    await page.getByRole('button', { name: 'Register' }).click();

    if (data.testType === 'positive') {
         await expect(page.getByText('Account Created Successfully')).toBeVisible();
    }else{
        if (data.expectedErrors) {
        for (const errorText of data.expectedErrors) {
            await expect.soft(page.getByText(errorText)).toBeVisible();
    }
}
      await page.screenshot({ path: `screenshots/${data.testName}.png` });
    }

}     
    
)};
