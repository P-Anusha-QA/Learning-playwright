import { test, expect } from '@playwright/test';
import data from '../../test data/buzzpost.json';

test('postMessage', async ({page}) => {
  await page.goto('/web/index.php/auth/login');
  await page.locator('//input[@name="username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();

  await page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]').click();
  await page.locator('//textarea[@placeholder="What\'s on your mind?"]').fill(data.text);

  // Optional verification when the message is posted or ready to send
  await expect(page.locator('//textarea[@placeholder="What\'s on your mind?"]')).toHaveValue(data.text);
});