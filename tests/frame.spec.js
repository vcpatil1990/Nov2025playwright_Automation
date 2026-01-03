const { test, expect } = require('@playwright/test');

test('Handlling Iframe', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);

    let all_frames = await page.frames();
    console.log("number of Frames are= ", all_frames.length)
    // Handle frame with URL
    let frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    await frame3.fill("//input[@name='mytext3']", "hi team automation");

    // Handle frame with name and framelocator

    let frame1 = await page.frameLocator("//frame[@src='frame_1.html']")
    await frame1.locator("//input[@name='mytext1']").fill("i am from pune")
    await page.waitForTimeout(3000);
})