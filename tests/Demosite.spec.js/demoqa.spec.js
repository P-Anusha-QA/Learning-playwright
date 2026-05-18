import { test, expect } from '@playwright/test';

test('verifying text', async ({ page }) => {
  
await page.goto('https://demoqa.com/text-box');
await page.getByRole('textbox', { name: 'Full Name' }).fill('Uma');
await page.getByRole('textbox', { name: 'name@example.com' }).fill('uma1@gmail.com');
await page.getByRole('textbox', { name: 'Current Address' }).fill('AP');
await page.locator("//textarea[@id='permanentAddress']").fill('Bangalore');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Name:Uma'),).toBeVisible();

});