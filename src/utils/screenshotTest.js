import puppeteer from 'puppeteer'

module.exports = setup => {
  const components = Object.keys(setup)

  // Loop each component in setup (usually just one?? but you never know??)
  components.forEach(component => {
    describe(component, () => {
      // Loop each variants for component
      setup[component].forEach(variant => {
        // Create a prefix for creating the storybook-url and for snapshot-naming
        const variantPrefix = variant ? `--${variant}` : ''

        it(`${variant} should render the same`, async () => {
          let browser

          try {
            // Launch puppeteer instance
            browser = await puppeteer.launch()

            const page = await browser.newPage()
            page.setDefaultTimeout(0)

            // Go to component StoryBook page,
            // Wait till loaded
            await page.goto(
              `http://localhost:6006/iframe.html?id=${component}${variantPrefix}`,
              {
                waitUntil: 'networkidle2',
                timeout: 0,
              }
            )

            // Take screenshot
            const screenshot = await page.screenshot()

            // Test screenshot (also save this new screenshot if -u is set)
            expect(screenshot).toMatchImageSnapshot({
              path: `src/test/__snapshots__/${component}${variantPrefix}.png`,
            })
          } finally {
            // Cleanup
            if (browser) await browser.close()
          }
        })
      })
    })
  })
}
