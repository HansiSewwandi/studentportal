import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fonixedu.southeastasia.cloudapp.azure.com/student-portal/');
  await page.getByRole('textbox', { name: 'Enter mobile, email, or ID' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile, email, or ID' }).fill('0703889278');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Hansi student +9********78 SID-0401211001' }).click();
});