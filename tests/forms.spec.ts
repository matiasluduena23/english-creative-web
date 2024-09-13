import { test, expect } from "@playwright/test";

const URL = "https://english-creative.com/";
test("fill inputs in subscription form", async ({ page }) => {
  await page.goto(URL);
  const input = page.locator("#input-subscribe");

  page.waitForSelector("#form-subscribe", { state: "visible" });
  const email = "test@gmail.com";
  await input.fill(email);
  await expect(input).toHaveValue(email);
});

test("send subscription form", async ({ page }) => {
  await page.goto(URL);
  const input = page.locator("#input-subscribe");

  page.waitForSelector("#form-subscribe", { state: "visible" });
  const email = "test@gmail.com";
  await input.fill(email);
  await page.locator("#btn-subscribe").click();
  expect(page).toHaveURL(/.success/);
});

test("fill inputs in contact form", async ({ page }) => {
  await page.goto(URL);
  const inputName = page.locator("#input-contact-name");
  const inputEmail = page.locator("#input-contact-email");
  const textarea = page.locator("#textarea-contact-message");

  const name = "Matias";
  const email = "test@gmail.com";
  const message = "test message";
  await inputName.fill(name);
  await inputEmail.fill(email);
  await textarea.fill(message);

  await expect(inputName).toHaveValue(name);
  await expect(inputEmail).toHaveValue(email);
  await expect(textarea).toHaveValue(message);
});

test("send contact form", async ({ page }) => {
  await page.goto(URL);
  const inputName = page.locator("#input-contact-name");
  const inputEmail = page.locator("#input-contact-email");
  const textarea = page.locator("#textarea-contact-message");

  const name = "Matias";
  const email = "test@gmail.com";
  const message = "test message";
  await inputName.fill(name);
  await inputEmail.fill(email);
  await textarea.fill(message);

  await page.locator("#btn-contact").click();
  expect(page).toHaveURL(/.success/);
});

//internationalitation test ES

test("ES fill inputs in subscription form", async ({ page }) => {
  await page.goto(`${URL}es/`);
  const input = page.locator("#input-subscribe");

  page.waitForSelector("#form-subscribe", { state: "visible" });
  const email = "test@gmail.com";
  await input.fill(email);
  await expect(input).toHaveValue(email);
});

// test("ES send subscription form", async ({ page }) => {
//   await page.goto(`${LOCAL_HOST}es/`);
//   const input = page.locator("#input-subscribe");

//   page.waitForSelector("#form-subscribe", { state: "visible" });
//   const email = "test@gmail.com";
//   await input.fill(email);
//   await page.locator("#btn-subscribe").click();
//   expect(page).toHaveURL(/.es\/success/);
// });

test("ES fill inputs in contact form", async ({ page }) => {
  await page.goto(`${URL}es/`);
  const inputName = page.locator("#input-contact-name");
  const inputEmail = page.locator("#input-contact-email");
  const textarea = page.locator("#textarea-contact-message");

  const name = "Matias";
  const email = "test@gmail.com";
  const message = "test message";
  await inputName.fill(name);
  await inputEmail.fill(email);
  await textarea.fill(message);

  await expect(inputName).toHaveValue(name);
  await expect(inputEmail).toHaveValue(email);
  await expect(textarea).toHaveValue(message);
});

// test("ES send contact form", async ({ page }) => {
//   await page.goto(URL);
//   const inputName = page.locator("#input-contact-name");
//   const inputEmail = page.locator("#input-contact-email");
//   const textarea = page.locator("#textarea-contact-message");

//   const name = "Matias";
//   const email = "test@gmail.com";
//   const message = "test message";
//   await inputName.fill(name);
//   await inputEmail.fill(email);
//   await textarea.fill(message);

//   await page.locator("#btn-contact").click();
//   expect(page).toHaveURL(/.success/);
// });
