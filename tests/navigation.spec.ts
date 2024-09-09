import { test, expect } from '@playwright/test';

test('go to services section after click get started button', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.#services/);
});

test('go to services section after click in the navigation services link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/');

  // Click the get started link.
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Services' })
    .click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.#services/);
});

test('go to about section after click in the navigation about link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/');

  // Click the get started link.
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'About' })
    .click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.#about/);
});

test('go to testimonials section after click in the navigation testimonials link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/');

  // Click the get started link.
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Testimonials' })
    .click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.#testimonials/);
});

test('go to podcast page after click in the navigation podcast link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/');

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Podcast' })
    .click();

  await expect(page).toHaveURL('https://english-creative.com/podcast/');
});

test('go to contact section after click in the navigation contact link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/');

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Contact' })
    .click();

  await expect(page).toHaveURL(/.#contact/);
});

test('go to about me section after click in navigation link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/');

  await page.getByRole('link', { name: 'Meet Janelle' }).click();

  await expect(page).toHaveURL('https://english-creative.com/aboutme/');
});

// test('open popup after click in the navigation internationalization button', async ({
//   page,
// }) => {
//   await page.goto('https://english-creative.com');
//   await page
//     .getByRole('navigation')
//     .getByRole('button', { name: 'EN', exact: true })
//     .click();

//   await expect(
//     page.getByRole('link', { name: 'ES', exact: true })
//   ).toBeVisible();
// });

// test('go from podcast to home page', async ({ page }) => {
//   await page.goto('https://english-creative.com/podcast/');

//   await page.getByRole('link', { name: 'Home' }).click();

//   await expect(page).toHaveURL('https://english-creative.com/');
// });
