import { test, expect } from '@playwright/test';

const jobCategory = {
   category1: 'Information Technology',
    category2: 'Finance and Accounting',
    category3: 'Human Resources'
}

for (let category in jobCategory) {
    test(`verify pay grade -${category}`, async ({ page }) => {
        await page.goto('/web/index.php/auth/login');

        await page.locator('input[name="username"]').fill('Admin');
        await page.locator('input[name="password"]').fill('admin123');

        await page.keyboard.press('Enter');

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        await page.locator('//span[text()="Admin"]').click();

        await page.getByText('Job', { exact: true }).click();

        await page.locator('//a[text()="Job Categories"]').click();

        await page.locator('//button[text()=" Add "]').click();

        await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobCategory[category]);

        await page.waitForTimeout(10000);

        await page.locator('//button[text()=" Save "]').click();
    });
}