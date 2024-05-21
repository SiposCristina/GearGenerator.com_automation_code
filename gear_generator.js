const { chromium } = require('playwright');
const fs = require("fs");

(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.geargenerator.com/');
    await page.locator('#closebanner path').click();
    

    try {

        await page.getByRole('button', { name: 'Clear' }).click();
        

        // Read the JSON file
        const jsonData = fs.readFileSync('gear.json', 'utf8');

        // Parse the JSON data into a JavaScript object
        const data = JSON.parse(jsonData);
       

        // Iterate over each test case in the data
        for (const testCase of data) {
            console.log("Test ID:", testCase.id);

            let firstTime = true;

            // Iterate over each gear in the current test case
            for (const gear of testCase.gears) {
                console.log("N:", gear.N);
                console.log("P:", gear.P);
                console.log("PA:", gear.PA);

                const N = gear.N; // Define N using the value from gear.N
                const P = gear.P; // Define P using the value from gear.P
                const PA = gear.PA; // Define PA using the value from gear.PA

                 
                if (!firstTime){
                    await page.getByRole("button", {name: "Add New"}).click();
                } else {
                    firstTime=false
                } 
                    
               
                await page.getByLabel('Number of teeth* (N):').click();
                await page.getByLabel('Number of teeth* (N):').fill(gear.N.toString());
                await page.getByLabel('Diametral pitch (P):').click();
                await page.getByLabel('Diametral pitch (P):').fill(gear.P.toString());
                await page.getByLabel('Pressure Angle (PA):').click();
                await page.getByLabel('Pressure Angle (PA):').fill(gear.PA.toString());
                
                                           

                await page.waitForTimeout(500); // Wait for some time for the form to update
                await page.screenshot({ path: `geargenerator-${testCase.id}.png` });
            }

               
            await page.getByRole('button', { name: 'Clear' }).click();
            
        } 

        
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        await browser.close();
    }
})();
