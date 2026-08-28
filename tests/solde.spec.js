import { test, expect } from '@playwright/test';

test('vérifie le solde du compte après connexion', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'fredwam'); 
  await page.fill('input[name="password"]', 'fredwam');
  await page.click('input[type="submit"]');

  await expect(page).toHaveURL(/overview\.htm/);
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();

  const accountLink = page.locator('table#accountTable a').first();
  await accountLink.click();

  await expect(page).toHaveURL(/activity\.htm/);
  await expect(page.getByRole('heading', { name: /Account Details/ })).toBeVisible();

  const balanceElement = page.locator('td:has-text("Balance") + td');
  await expect(balanceElement).toBeVisible();

 
});
