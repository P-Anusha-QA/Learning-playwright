import { test, expect } from '@playwright/test';

const empStatus = {
    status1: 'Business Analyst',
    status2: 'QA Engineer',
    status4: 'Project Manager'
}

for (let status in empStatus) {

    test(`verify pay grade -${status}`, async ({ page }) => {
        await page.goto('/web/index.php/auth/login');

        await page.locator('input[name="username"]').fill('Admin');
        await page.locator('input[name="password"]').fill('admin123');

        await page.keyboard.press('Enter');

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        await page.locator('//span[text()="Admin"]').click();

        await page.getByText('Job', { exact: true }).click();

        await page.locator('//a[text()="Employment Status"]').click();

        await page.locator('//button[text()=" Add "]').click();

        await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(empStatus[status]);

        await page.waitForTimeout(10000);

        await page.locator('//button[text()=" Save "]').click();
    });
}