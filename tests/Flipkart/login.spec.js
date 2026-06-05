import { test, expect } from '@playwright/test';

test.describe('Flipkart login flow', () => {
  test('launch Flipkart and open login panel', async ({ page }) => {
    await page.goto('https://www.flipkart.com');

    const closeModal = page.locator('button', { hasText: '✕' });
    if (await closeModal.count() > 0) {
      await closeModal.first().click();
    }

    await expect(page).toHaveURL(/flipkart\.com/);
    await expect(page.getByRole('link', { name: /Login/i })).toBeVisible();
  });

  test('login with mobile number and verify OTP step', async ({ page }) => {
    await page.goto('https://www.flipkart.com');

    const closeModal = page.locator('button', { hasText: '✕' });
    if (await closeModal.count() > 0) {
      await closeModal.first().click();
    }

    await page.getByRole('link', { name: /Login/i }).click();

    const mobileInput = page.getByPlaceholder('Enter Email/Mobile number');
    await expect(mobileInput).toBeVisible({ timeout: 10000 });
    await mobileInput.fill('9398584413');

    await page.getByRole('button', { name: /Request OTP|Login/i }).click();

    await expect(page.getByText(/Enter OTP|Verify OTP|OTP/)).toBeVisible({ timeout: 10000 });
  });
});
