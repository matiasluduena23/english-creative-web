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

// test('go to internationalization ES', async ({ page }) => {
//   await page.goto('https://english-creative.com');
//   const logo = page.getByRole('link', { name: 'english creative logo' });
//   await logo.waitFor({ state: 'visible' });

//   await page.getByRole('button', { name: 'EN', exact: true }).click();
//   await page.getByRole('link', { name: 'ES', exact: true }).click();
//   await expect(page).toHaveURL('https://english-creative.com/es/');
// });

// internationalization ES

test('ES: go to services section after click get started button', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/es/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Empezar' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.es\/#services/);
});

test('ES: go to services section after click in the navigation services link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/es/');

  // Click the get started link.
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Servicios' })
    .click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.es\/#services/);
});

test('ES: go to about section after click in the navigation about link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/es/');

  // Click the get started link.
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Acerca de' })
    .click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.es\/#about/);
});

test('ES: go to testimonials section after click in the navigation testimonials link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/es/');

  // Click the get started link.
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Testimonios' })
    .click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/..es\/#testimonials/);
});

test('ES: go to podcast page after click in the navigation podcast link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/es/');

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Podcast' })
    .click();

  await expect(page).toHaveURL('https://english-creative.com/es/podcast/');
});

test('ES: go to contact section after click in the navigation contact link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/es/');

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Contacto' })
    .click();

  await expect(page).toHaveURL(/..es\/#contact/);
});

test('ES: go to about me section after click in navigation link', async ({
  page,
}) => {
  await page.goto('https://english-creative.com/es/');

  await page.getByRole('link', { name: 'Acerca de mí' }).click();

  await expect(page).toHaveURL('https://english-creative.com/es/aboutme/');
});

// test('go to internationalization EN', async ({ page }) => {
//   await page.goto('https://english-creative.com/es/');
//   const logo = page.getByRole('link', { name: 'english creative logo' });
//   await logo.waitFor({ state: 'visible' });

//   await page.getByRole('button', { name: 'ES', exact: true }).click();

//   await page.getByRole('link', { name: 'EN', exact: true }).click();
//   await expect(page).toHaveURL('https://english-creative.com/');
// });

// Test

test('navigate back forward and reload', async ({ page }) => {
  await page.goto('https://english-creative.com/');

  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Podcast' })
    .click();
  await expect(page).toHaveURL(/.podcast/);

  await page.goBack();
  await expect(page).toHaveURL('https://english-creative.com/');

  await page.goForward();
  await expect(page).toHaveURL(/.podcast/);

  await page.reload();
});
