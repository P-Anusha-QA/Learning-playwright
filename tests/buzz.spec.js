import { test, expect } from '@playwright/test';

test('buzz module', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
 
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();

  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill('Hi guys, Good Morning');
  await page.getByRole('button', { name: 'Post', exact: true }).click();
});

