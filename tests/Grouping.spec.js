const { test, expect } = require('@playwright/test');
test.beforeAll(async()=>{
    console.log('this is before All Hook');
})
// test.beforeEach(async()=>{
//     console.log('this is before Each Hook');
    
// })
// test.afterEach(async()=>{
//     console.log('this is afterEach Hook');   
// })
test.afterAll(async()=>{
    console.log('this is afterAll Hook');
    
})
test.describe('Intake Record Page', () => {
    test('Test1', async ({ page }) => {
        console.log("test case 1...")
    })
    test('Test2', async ({ page }) => {
        console.log("test case 2...")
    })
})
//-------------------------------------------------------------------------
// test.describe.only('Patient enrollment form Page', () => {
//     test('Test3', async ({ page }) => {
//         console.log("test case 3...")
//     })
//     test('Test4', async ({ page }) => {
//         console.log("test case 4...")
//     })
// });