import { test } from '@playwright/test';
import { login } from './utils/login';

test('Login - User Login', async ({ page }) => {
  await login(page);
});
