import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://english-creative.com/');
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Services' })
    .click();
  await page.getByText('Services What we do We equip').click();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'About' })
    .click();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Testimonials' })
    .click();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Podcast' })
    .click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByPlaceholder('Janelle French').click();
  await page.getByPlaceholder('Janelle French').fill('matias');
  await page.getByPlaceholder('Janelle French').press('Tab');
  await page
    .getByPlaceholder('hello@english-creative.com')
    .fill('matias@gmail.com');
  await page.getByPlaceholder('hello@english-creative.com').press('Tab');
  await page
    .getByPlaceholder('Tell me a little bit about')
    .fill('mensaje de prueba');
  await page.getByPlaceholder('Janelle French').click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('link', { name: 'Go back' }).click();
});
