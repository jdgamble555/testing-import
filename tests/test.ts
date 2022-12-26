import { expect, test } from '@playwright/test';
import { my_module } from './utils';

test('index page has expected h1', async ({ page }) => {
	console.log(my_module);
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});
