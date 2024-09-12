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

test('instagram footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/#contact');
  //   Start waiting for new page before clicking. Note no await.
  const pagePromise = page.context().waitForEvent('page');
  await page.getByRole('link', { name: 'Get Creative', exact: true }).click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveURL(
    'https://www.instagram.com/english_creative_hub/'
  );
});

test('linkedIn footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/#contact');
  //   Start waiting for new page before clicking. Note no await.
  const pagePromise = page.context().waitForEvent('page');
  await page.getByRole('link', { name: 'Get connected', exact: true }).click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveURL(
    'https://www.linkedin.com/in/janelle-e-french/'
  );
});

//Internationalization ES

test('ES services footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/es/#contact');

  await page
    .locator('#contact')
    .getByRole('link', { name: 'Servicios' })
    .click();

  await expect(page).toHaveURL(/.#services/);
});

test('ES about footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/es/#contact');

  await page
    .locator('#contact')
    .getByRole('link', { name: 'Acerca de' })
    .click();

  await expect(page).toHaveURL(/.#about/);
});

test('ES testimonials footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/es/#contact');

  await page
    .locator('#contact')
    .getByRole('link', { name: 'Testimonios' })
    .click();

  await expect(page).toHaveURL(/.#testimonials/);
});

test('ES podcast footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/es/#contact');
  await page.locator('#contact').getByRole('link', { name: 'Podcast' }).click();

  await expect(page).toHaveURL('https://english-creative.com/es/podcast/');
});

test('ES telegram footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/es/#contact');
  //   Start waiting for new page before clicking. Note no await.
  const pagePromise = page.context().waitForEvent('page');
  await page.getByRole('link', { name: 'Escríbanos', exact: true }).click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveURL('https://t.me/english_creative_hub');
});

test('ES instagram footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/es/#contact');
  //   Start waiting for new page before clicking. Note no await.
  const pagePromise = page.context().waitForEvent('page');
  await page.getByRole('link', { name: 'Síguenos', exact: true }).click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveURL(
    'https://www.instagram.com/english_creative_hub/'
  );
});

test('ES linkedIn footer link', async ({ page }) => {
  await page.goto('https://english-creative.com/es/#contact');
  //   Start waiting for new page before clicking. Note no await.
  const pagePromise = page.context().waitForEvent('page');
  await page.getByRole('link', { name: 'Conectémonos', exact: true }).click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveURL(
    'https://www.linkedin.com/in/janelle-e-french/'
  );
});
