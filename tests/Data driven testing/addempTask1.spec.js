import { test, expect } from '@playwright/test';

const Employees = {
    emp1:{firstname:'Anusha',lastname:'P'},
    emp2:{firstname:'Nalina',lastname:'L'},
    emp3:{firstname:'Yashaswini',lastname:'M'},
    }

for(let employe in Employees){
console.log(Employees[employe])
test(`verify add employe with madatory detailes -${employe}`, async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(Employees[employe].firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(Employees[employe].lastname);
  await page.getByRole('button', { name: 'Save' }).click();
})
}