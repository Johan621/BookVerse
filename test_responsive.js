const puppeteer = require('puppeteer');

const viewports = [
  { width: 1920, height: 1080 },
  { width: 1600, height: 900 },
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 430, height: 932 },
  { width: 390, height: 844 },
];

const pagesToTest = [
  '/',
  '/dashboard',
  '/books',
  '/exchange',
  '/wishlist',
  '/login'
];

async function run() {
  console.log("Starting responsive test...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  let issuesFound = false;

  for (const route of pagesToTest) {
    console.log(`\nTesting Route: ${route}`);
    try {
        await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
    } catch (e) {
        console.log(`Failed to load ${route}:`, e.message);
        continue;
    }
    
    for (const vp of viewports) {
      await page.setViewport(vp);
      // Wait for any animations to settle
      await new Promise(r => setTimeout(r, 1000));
      
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      
      if (hasOverflow) {
        issuesFound = true;
        const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientW = await page.evaluate(() => document.documentElement.clientWidth);
        console.log(`[!] Overflow found at ${vp.width}px on route ${route} (ScrollWidth: ${scrollW}, ClientWidth: ${clientW})`);
        
        // Find overflowing elements
        const overflowEls = await page.evaluate(() => {
          const els = document.querySelectorAll('*');
          const overflows = [];
          els.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > document.documentElement.clientWidth) {
              overflows.push(el.tagName + '.' + el.className.split(' ').join('.'));
            }
          });
          return Array.from(new Set(overflows)).slice(0, 5); // Return top 5 unique classes
        });
        console.log(`    Suspect elements:`, overflowEls);
      } else {
        console.log(`[v] Passed at ${vp.width}px on route ${route}`);
      }
    }
  }
  
  await browser.close();
  
  if (!issuesFound) {
    console.log("\nAll viewports passed on all tested routes! No horizontal overflow detected.");
  }
}

run().catch(console.error);
