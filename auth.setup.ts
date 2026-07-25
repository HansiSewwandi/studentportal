import { test as setup, expect } from '@playwright/test';

setup('login', async ({ page }) => {
  await page.goto('https://fonixedu.southeastasia.cloudapp.azure.com/student-portal/');

  await page.getByRole('textbox', { name: /email|mobile|id/i }).fill('YOUR_USERNAME');
  await page.getByRole('textbox', { name: /password/i }).fill('YOUR_PASSWORD');

  await page.getByRole('button', { name: /login/i }).click();

  await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});