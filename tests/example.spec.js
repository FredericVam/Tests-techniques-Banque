// @ts-check
/*
import { test, expect } from '@playwright/test';

test('mon premier test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  const getStarted = page.locator('text=Get started').first();
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');
  await getStarted.click();
  await expect(page.locator('text=Introduction').first()).toBeVisible();
});*/


/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/





import { test, expect } from '@playwright/test';

test('connexion sur Parabank', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'fredwam');
  await page.fill('input[name="password"]', 'fredwam');
  await page.click('input[type="submit"]');

  await expect(page).toHaveURL(/overview\.htm/);

  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
});


