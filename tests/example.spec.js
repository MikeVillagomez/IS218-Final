const { test, expect } = require('@playwright/test');

// Test for the Home page title
test('Home page has the correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Blend-brew Tea/);
});

// Test for SEO description on the Home page
test('Home page has correct SEO description', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const description = await page.getAttribute('meta[name="description"]', 'content');
  expect(description).toBe("Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors.");
});


test('Footer section has correct content', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check for specific text in the footer
  await expect(page.locator('footer')).toContainText('About Blend-brew Tea');
  await expect(page.locator('footer')).toContainText('FAQ');
  await expect(page.locator('footer')).toContainText('Contact Us');


});

test('Product Grid displays products correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check for specific product titles
  await expect(page.locator('text=Emerald Essence Brew')).toBeVisible();
  await expect(page.locator('text=Midnight Majesty Blend')).toBeVisible();
  await expect(page.locator('text=Herbal Haven Brew')).toBeVisible();
});

test('Testimonial section displays the correct text', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000');

  // Locate the testimonial text using the data-testid attribute
  const testimonialText = page.locator('[data-testid="testimonialText"]');

  // Assert that the testimonial text contains the expected content
  await expect(testimonialText).toContainText("Blendbrew's tea is a delightful blend of quality and flavor! Each sip feels like a journey through the finest tea leaves, offering a rich and aromatic experience that soothes the senses.");
});


test('Google Analytics is correctly initialized', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check if the Google Analytics initialization function is defined
  const isGAInitialized = await page.evaluate(() => {
    return typeof window.gtag === 'function';
  });

  expect(isGAInitialized).toBe(true);

  // Optionally, you can also check if the window dataLayer object has been created
  const isDataLayerDefined = await page.evaluate(() => {
    return typeof window.dataLayer !== 'undefined';
  });

  expect(isDataLayerDefined).toBe(true);
});



test.describe('Navigation Bar Text Tests', () => {
    test('Text for Home, About Us, and Subscribe links are correct', async ({ page }) => {
        // Go to your site's home page
        await page.goto('http://localhost:3000');

        // Check if the 'Home' link text is correct
        const homeLink = page.locator('[data-testid="nav-home"]');
        await expect(homeLink).toHaveText('Home');

        // Check if the 'About Us' link text is correct
        const aboutUsLink = page.locator('[data-testid="nav-about-us"]');
        await expect(aboutUsLink).toHaveText('About Us');

        // Check if the 'Sign Up' link text is correct
        const signUpLink = page.locator('[data-testid="nav-sign-up"]');
        await expect(signUpLink).toHaveText('Subscribe');
    });
});

