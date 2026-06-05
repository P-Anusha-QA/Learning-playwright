import { test, expect } from '@playwright/test';

const workerShift = {
    shift1: {
        name: 'Morning Shift',
        hh1: '06',
        mm1: '00',
        value1: 'AM',
        hh2: '02',
        mm2: '00',
        value2: 'PM'
    },
    shift2: {
        name: 'Evening Shift',
        hh1: '03',
        mm1: '00',
        value1: 'PM',
        hh2: '11',
        mm2: '00',
        value2: 'PM'
    },
    shift3: {
        name: 'Late Night Shift',
        hh1: '11',
        mm1: '00',
        value1: 'PM',
        hh2: '07',
        mm2: '00',
        value2: 'AM'
    }
}

for (let shift in workerShift) {

    test(`verify work shift - ${shift}`, async ({ page }) => {

        await page.goto('/web/index.php/auth/login');

        await page.locator('input[name="username"]').fill('Admin');

        await page.locator('input[name="password"]').fill('admin123');

        await page.keyboard.press('Enter');

        await expect(page).toHaveURL('/web/index.php/dashboard/index');

        await page.locator('//span[text()="Admin"]').click();

        await page.getByText('Job', { exact: true }).click();

        await page.locator('//a[text()="Work Shifts"]').click();

        await page.locator('//button[text()=" Add "]').click();

        await page.locator('//label[text()="Shift Name"]/following::input[1]').fill(workerShift[shift].name);

        await page.locator('(//i[@class="oxd-icon bi-clock oxd-time-input--clock"])[1]').click();

        await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-hour-input-text"]').fill(workerShift[shift].hh1);

        await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-minute-input-text"]').fill(workerShift[shift].mm1);

        let value1 = workerShift[shift].value1;

        if (value1 == "PM") {
            await page.locator('//input[@value="PM"]').click();
        } else {
            await page.locator('//input[@value="AM"]').click();
        }

        await page.waitForTimeout(2000);

        await page.locator('(//i[@class="oxd-icon bi-clock oxd-time-input--clock"])[2]').click();

        await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-hour-input-text"]').fill(workerShift[shift].hh2);

        await page.locator('//input[@class="oxd-input oxd-input--active oxd-time-minute-input-text"]').fill(workerShift[shift].mm2);

        let value2 = workerShift[shift].value2;

        if (value2 == "PM") {
            await page.locator('//input[@value="PM"]').click();
        } else {
            await page.locator('//input[@value="AM"]').click();
        }

        await page.waitForTimeout(2000);

        await page.locator('//button[text()=" Save "]').click();
    });
}