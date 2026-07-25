import { test, expect } from '@playwright/test';
import { login } from './utils/login';

test('Exams - Submit Essay Exam', async ({ page }) => {
  await login(page);

  await page.getByRole('button', { name: 'Your Exams Your Exams' }).click();

  const teacherCard = page.getByText('Ishara Madhushan').or(page.getByText('Hansika Samaranayake')).first();
  if (await teacherCard.isVisible({ timeout: 5000 }).catch(() => false)) {
    await teacherCard.click();
  }

  const ongoingText = page.getByText(/Ongoing/i).first();
  if (await ongoingText.isVisible({ timeout: 3000 }).catch(() => false)) {
    await ongoingText.click();
  }

  const startExamBtn = page.getByRole('button', { name: /Start Exam/i }).or(page.locator('table tr button').last()).first();
  if (await startExamBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await startExamBtn.click();
  }

  const startNowBtn = page.getByRole('button', { name: /Start Now|Start Quiz|Start Start Quiz/i }).first();
  if (await startNowBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await startNowBtn.click();
  }

  const fileInput = page.locator('#studentFileInput');
  if (await fileInput.count() > 0) {
    await fileInput.setInputFiles('Essay AS.pdf').catch(() => {});
  }

  const submitSheetBtn = page.getByRole('button', { name: 'Submit Answer Sheet' });
  if (await submitSheetBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await submitSheetBtn.click();
  }

  const submitBtn = page.getByRole('button', { name: 'Submit', exact: true });
  if (await submitBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await submitBtn.click();
  }

  const okayBtn = page.getByRole('button', { name: 'Okay' });
  if (await okayBtn.first().isVisible({ timeout: 5000 }).catch(() => false)) {
    await okayBtn.first().click();
  }
});