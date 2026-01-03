const { test, expect } = require('@playwright/test')
var userid

test('Get Data [Get]', async ({ request }) => {
    const response = await request.get("https://api.restful-api.dev/objects/7")
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Create data[Post]', async ({ request }) => {

    const response = await request.post("https://api.restful-api.dev/objects",
        {
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }, headers: {
                "Accept": "Application/json"
            }
        })
    console.log(await response.json());
    expect(response.status()).toBe(200);
    var res = await response.json();
    userid = res.id;

})

test('Update data[Put]', async ({ request }) => {
    const response = await request.put("https://api.restful-api.dev/objects/" + 'ff8081819782e69e019b374e463332e6',
        {
            data: {
                "name": "VIVO v50",
                "data": {
                    "year": 2000,
                    "price": 10000,
                    "CPU model": "Intel Core i8",
                    "Hard disk size": "1 TB",
                    "color": "red"
                }
            }, headers: {
                "Accept": "Application/json"
            }
        })
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test.only('delete data', async ({ request }) => {

    let response = await request.delete("https://api.restful-api.dev/objects/" + "ff8081819782e69e019b374e463332e6")

    expect(response.status()).toBe(404);

})

