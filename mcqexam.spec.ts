import { test, expect } from '@playwright/test';
import { login } from './utils/login';
import { MCQExamPage } from './pages/mcqexam.page';

test.describe('MCQ Exam Module', () => {

  test('Exams - Complete and Submit MCQ Exam', async ({ page }) => {
    const mcqPage = new MCQExamPage(page);

    // 1. Authenticate user
    await login(page);

    // 2. Navigate to Exams & Start Quiz
    await mcqPage.openExamsSection();
    await mcqPage.startFirstExam();

    // 3. Answer Questions
    await mcqPage.selectAnswerOption('Chemical energy is converted directly to electrical energy');

    await mcqPage.selectQuestionNumber('02');
    await mcqPage.selectAnswerOption('The wool adds mass to the');

    await mcqPage.selectQuestionNumber('03');
    await mcqPage.selectAnswerOption('Dicotyledonous plants');

    await mcqPage.selectQuestionNumber('04');
    await mcqPage.selectAnswerOption('A battery-operated wall clock');

    await mcqPage.selectQuestionNumber('05');
    await mcqPage.selectAnswerOption('Production of seeds enclosed');

    // 4. Submit Exam
    await mcqPage.submitExam();
  });

});