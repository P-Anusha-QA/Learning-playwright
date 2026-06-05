import { test, expect } from '@playwright/test';

const payGrade = {
    name1: "Raju",
    name2: "Murthy",
    name3: "Vittal"
}

for (let name in payGrade) {

    test(`verify pay grade -${name}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.locator('input[name="username"]').fill('Admin');
        await page.locator('input[name="password"]').fill('admin123');

        await page.keyboard.press('Enter');

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        await page.locator('//span[text()="Admin"]').click();
        await page.getByText('Job', { exact: true }).click();
        await page.locator('//a[text()="Pay Grades"]').click();
        await page.locator('//button[text()=" Add "]').click();

        await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(payGrade[name]);

        await page.locator('//button[text()=" Save "]').click();
    });
}