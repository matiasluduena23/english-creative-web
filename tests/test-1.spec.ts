import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://english-creative.com/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page
    .locator('article')
    .filter({ hasText: 'Lead For short-term needs and' })
    .getByRole('button')
    .click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page
    .locator('article')
    .filter({ hasText: 'Build For mid-term needs and' })
    .getByRole('button')
    .click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page
    .locator('article')
    .filter({ hasText: 'Grow For long-term needs and' })
    .getByRole('button')
    .click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Get in touch!' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get in touch', exact: true }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get connected' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get Creative' }).click();
  const page3 = await page3Promise;
});
