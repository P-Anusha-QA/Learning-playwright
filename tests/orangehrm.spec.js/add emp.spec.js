import { test, expect } from '@playwright/test';
//Excel data reading
  import ExcelJS from 'exceljs';


test('verify adding emp', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('test data/Empdata.xlsx');
  //Get sheet
  const worksheet = workbook.getWorksheet('sheet1');
  if (!worksheet) {
    console.log('Worksheet not found');
  }
  const row = worksheet.getRow(2);
    //read cells directly

  const firstName = row.getCell(1).value;
  const lastName = row.getCell(2).value;


 // await page.getByRole('textbox', { name: 'First Name' }).fill('Anshu');
 //await page.getByRole('textbox', { name: 'Last Name' }).fill('p');

 await page.getByRole('textbox', { name: 'First Name' }).fill(String(firstName));
 await page.getByRole('textbox', { name: 'Last Name' }).fill(String(lastName));

  
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Personal Details')).toBeVisible();
});

