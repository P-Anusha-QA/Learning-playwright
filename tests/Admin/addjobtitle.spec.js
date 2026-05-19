import { test, expect } from '@playwright/test';

test('Verify add jobtitle', async ({ page }) => {

   await page.goto('/web/index.php/auth/login')

  // Enter username 

  await page.locator('input[name="username"]').fill(process.env.APP_USERNAME)

  // Enter Password 

  await page.locator('[name="password"]').fill(process.env.APP_PASSWORD)

  // click on login button 

  //await page.locator("button[type='submit']").click()
  //or
  //click enter from keyboard 

  await page.keyboard.press('Enter')

  //complete url

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


  //Partial Url verification 
  //await expect(page).toHaveURL(/dashboard\/index/)

  //click on Admin

  await page.getByRole('link', { name: 'Admin' }).click()

  await page.getByText('Job', { exact: true }).click()

  await page.getByRole('menuitem', { name: 'Job Titles' }).click()

  await page.getByRole('button', { name: 'Add' }).click()

  //await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(faker.person.jobTitle())

  let r = (Math.random() + 1).toString(36).substring(7);
  await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill("testJobtitle"+r)

  await page.waitForTimeout(4000)
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation testing')

  await page.getByRole('button', { name: 'Save' }).click()

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

  

})