const { test, expect } = require('@playwright/test');

test('Test1@sanity', async ({ page }) => {
    console.log("test case 1...")
})
test('Test2@sanity', async ({ page }) => {
    console.log("test case 2...")
})
test('Test3@smoke', async ({ page }) => {
    console.log("test case 3...")
})
test('Test4@sanity@reg', async ({ page }) => {
    console.log("test case 4...")
})
test('Test5@reg', async ({ page }) => {
    console.log("test case 5...")
})
