import { test, expect } from '@playwright/test';

test('extrait dynamiquement le solde du premier compte depuis Accounts Overview', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'fredwam');
  await page.fill('input[name="password"]', 'fredwam');
  await page.click('input[type="submit"]');


  await expect(page).toHaveURL(/overview\.htm/);
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();

  const firstRow = page.locator('table#accountTable tbody tr').first();

  const accountNumber = await firstRow.locator('td').nth(0).textContent();
  const balanceText = await firstRow.locator('td').nth(1).textContent();

  console.log(` Compte: ${accountNumber?.trim()},  Solde affiché: ${balanceText?.trim()}`);

  const match = balanceText?.match(/\$([\d,]+\.\d{2})/);
  const balanceValue = match ? parseFloat(match[1].replace(',', '')) : NaN;

  console.log(`Valeur numérique extraite: ${balanceValue}`);

  expect(balanceValue).toBeGreaterThan(0);
});
