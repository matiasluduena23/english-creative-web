import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

test('services footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/#contact');

  await page
    .locator('#contact')
    .getByRole('link', { name: 'Services' })
    .click();

  await expect(page).toHaveURL(/.#services/);
});

test('about footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/#contact');

  await page.locator('#contact').getByRole('link', { name: 'About' }).click();

  await expect(page).toHaveURL(/.#about/);
});

test('testimonials footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/#contact');

  await page
    .locator('#contact')
    .getByRole('link', { name: 'Testimonials' })
    .click();

  await expect(page).toHaveURL(/.#testimonials/);
});

test('podcast footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/#contact');
  await page.locator('#contact').getByRole('link', { name: 'Podcast' }).click();

  await expect(page).toHaveURL('https://english-creative.com/podcast/');
});

test('telegram footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/#contact');
  //   Start waiting for new page before clicking. Note no await.
  const pagePromise = page.context().waitForEvent('page');
  await page.getByRole('link', { name: 'Get in touch', exact: true }).click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveURL('https://t.me/english_creative_hub');
});
