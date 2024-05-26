//Imports the chromium module from Playwright and the fs module from the file system operations.
const { chromium } = require('playwright');
const fs = require("fs");

//Launches a Chromium browser instance with a visible broweser window.
(async () => {
    const browser = await chromium.launch({
        headless: false
    });

    //Creates a new browser context and a new page within that context.
    const context = await browser.newContext();
    const page = await context.newPage();

    //It navigates to the Gear Generator website
    await page.goto('https://www.geargenerator.com/');

    try {
        //It clicks on clear the Clear button to reamove the existing gear configurations 
        await page.getByRole('button', { name: 'Clear' }).click();
        
        //Reads the JSON file
        const jsonData = fs.readFileSync('gear.json', 'utf8');

        //Parses the JSON data into a JavaScript object
        const data = JSON.parse(jsonData);
       
        //Iterates over each test case in the data
        for (const testCase of data) {
            console.log("Test ID:", testCase.id);

            let firstTime = true;

            //Iterates over each gear in the current test case
            for (const gear of testCase.gears) {
                console.log("N:", gear.N);
                console.log("P:", gear.P);
                console.log("PA:", gear.PA);

                const N = gear.N; // Define N using the value from gear.N
                const P = gear.P; // Define P using the value from gear.P
                const PA = gear.PA; // Define PA using the value from gear.PA

                // This condition checks if the variable "firstTime" is false or not. If "!firstTime" is true it clicks on the "Add new" button.
                If "!firstTime" is false then it not clicks the "Add new" button.
                if (!firstTime){
                    await page.getByRole("button", {name: "Add New"}).click();
                } else {
                    firstTime=false
                }    

                // Locates input fields by their lable
                // Clicks on them, and fills them with data
                await page.getByLabel('Number of teeth* (N):').click();
                await page.getByLabel('Number of teeth* (N):').fill(gear.N.toString());
                await page.getByLabel('Diametral pitch (P):').click();
                await page.getByLabel('Diametral pitch (P):').fill(gear.P.toString());
                await page.getByLabel('Pressure Angle (PA):').click();
                await page.getByLabel('Pressure Angle (PA):').fill(gear.PA.toString());
                
                                           

                await page.waitForTimeout(500); // Wait for some time for the form to update.

                // Takes a screenshot of the page, saving it with a filename based on the test case ID. 
                await page.screenshot({ path: `geargenerator-${testCase.id}.png` });
            }

            // Finds a button on the web page, and the visible text content "Clear", then clicks on it   
            await page.getByRole('button', { name: 'Clear' }).click();
            
        } 
     
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        await browser.close();
    }
})();
