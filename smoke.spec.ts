import { test, expect } from '@playwright/test';

test('test primary functionality', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://localhost:3000/');
  
  // Check the title
  await expect(page).toHaveTitle(/Havnark/);
  
  // Test search functionality if a search input exists
  const searchInput = page.getByPlaceholder(/search/i);
  if (await searchInput.isVisible()) {
    await searchInput.fill('books');
    await searchInput.press('Enter');
    // Just verifying it doesn't crash
  }

  // Click on a primary button if one exists
  const getStarted = page.getByRole('button', { name: /get started|login|explore/i }).first();
  if (await getStarted.isVisible()) {
    await getStarted.click();
  }

  // Check for console errors
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.waitForTimeout(2000); // Give the page a moment to load and settle

  if (errors.length > 0) {
    console.error('Console errors:', errors);
  }
  
  // Filter out reticle errors
  const realErrors = errors.filter(e => !e.includes('Reticle'));
  expect(realErrors.length).toBe(0);
});
