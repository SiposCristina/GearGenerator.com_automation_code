# GearGenerator.com_automation_code

<h3>Product Information</h3> <p> Gear Generator is a tool for creating involute spur gears. The Gear Generator may compose full gear layouts with connected gears to design multiple gears system with control of than be input/output ratio and rotation speed. Gears can be animated at various speeds to demonstrate working mechanisms. Gear Generator can be accessed <a href="https://geargenerator.com/">here.</a> </p>

<h3>Description</h3> <p>This script automates the operation of gear generator functionality using Playwright. After launching a Chromium browser, it navigates to the Gear Generator site. Then it reads gear parameters from a JSON file (gear.json, gearLimits.json and geadDfield.json). The script handles multiple test cases, iterating through each one to test the functionality, and accuracy of the application features.<br> 
After executing each test case, it captures a screenshot of the generated gear configuration. Upon completing each test case, it closes the browser. This automated process efficiently tests various gear configuration in a shorter time frame. 
<br>
<br>
By capturing the screenshots of the generated results, enables a detailed assay of specific fields’ behavior. The tester evaluates the screenshots to identify any discrepancies, bugs, or areas that can be improved in the gear generator application. 
<br>
<br>
The automated assay, throughout the screenshots, assists the tester to identify:
<br>
•	Whether the fields handle valid and invalid inputs as expected<br>
•	How the input fields directly impact the generated gears<br>
•	The correctness of interaction between the gears<br>
•	The accurate representation of mathematical relationships among the fields<br>
</p>
<br>
<h3>Test Results</h3> <p> The application appears to be stable and functional. The interface is intuitive and easy to navigate.<br>
The functionality of the Gear Generator application is working as expected. The application successfully handles single gear with accurate details but also supports adding multiple gears and each gear is added correctly with the specified details. The interaction between the input fields and the output is correct. All fields (Number of teeth, Diametral pitch, Pitch diameter, Pressure Angle) are functioning as intended.
</p><br>
<p>Below you can find the screenshots of the generated results for <strong>gearLimits.json</strong> file.<br>
The parameters specified in the <strong>gearLimits.json</strong> file define the limits of the Number of teeth (N) and Diametral pitch (P) fields.
Each screenshot corresponds to a test scenario with the limits (either minimum or maximum) of the “Number of teeth” (N) and the “Diametral pitch” (P) and their combinations. Except for the screenshot from test number 5 (where are displayed all four gears), all four gears are visible, each one representing one of these limits.


**Test number 1**
![geargenerator-GearLimits-test number 1](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/2c1c3717-f0b6-41fa-b16d-5b8fb949276b)

**Test number 2**
![geargenerator-GearLimits-test number 2](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/1a8aab6b-ac7a-4dca-9df6-b85a2e7fc841)

**Test number 3**
![geargenerator-GearLimits-test number 3](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/ab4dbe60-17a1-4516-b62d-0e90aef30ff6)

**Test number 4**
![geargenerator-GearLimits-test number 4](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/5c8d973d-6a90-4105-80c8-5f850d000da8)

**Test number 5**
![geargenerator-GearLimits-test number 5](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/dc1843ae-8e73-47ef-883a-8d91ef935211)
<br>
<br>
<br>


<p>Below you can find the screenshots of the generated results for <strong>gear.json</strong> file.<br>
The parameters specified in the gear.json file are random inputs for the "Number of teeth"(N) and "Diametral pitch"(P) fields.<br>
In the <strong>test number 9</strong> can be observed a <strong>bug</strong>. The teeth of the gear overlapts the teeth of the other gear.


**Test number 1**
![geargenerator-test number 1](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/40bcf65d-2dff-4a16-be02-8b647c1260cd)

**Test number 2**
![geargenerator-test number 2](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/c33ee5b6-262d-4e5f-8250-bf5555a1508c)

**Test number 3** 
![geargenerator-test number 3](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/9aa1b85a-ec95-4abd-8927-cac6e139d751)

**Test number 4**
![geargenerator-test number 4](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/8eedac12-d612-4fdc-ba49-355853537cc8)

**Test number 5**
![geargenerator-test number 5](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/4006a959-c37f-4f14-af50-7ad2f9cd4d66)

**Test number 6**
![geargenerator-test number 6](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/6c8c3e04-7fc3-43e3-b9bc-46f3141092f5)

**Test number 7**
![geargenerator-test number 7](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/7ae86582-9d20-45a6-935c-65b7d6da94cf)

**Test number 8**
![geargenerator-test number 8](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/d1b258bc-b546-4dba-88dd-b29f0fa6b369)

**Test number 9**
![geargenerator-test number 9](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/b97cd8c9-f282-4534-8290-8b20770d4247)

**Test number 10**
![geargenerator-test number 10](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/4ffe40d4-94a2-4982-920e-749514b6aa74)
<br>
<br>
<br>

I have also created a JSON file (<strong>gearDfield.json</strong>) where each test scenario has two gears. While the "Number of teeth" (N) remains constant for both gears, the "Diameter pitch" (P) has a different value. This test serves to highlight the mathematical relationship between “N” and “P”. Upon analyzing the screenshots, you can observe that "Pitch diameter" (D) changes its value when “P” changes its value.<br>
For each test, the initial screenshot displays the parameters of the first gear, followed by a second screenshot presenting the parameters for the second gear. It can be observed that while the "Number of teeth" (N) remains constant, and the "Diametral pitch" (P) changes its value, the "Pitch diameter" (D) also changes its value.


**Test number 1**
![geargenerator-test number 1-40-15-27](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/fea31bc2-22be-4b62-a27f-3b31101aeeb8)
![geargenerator-test number 1-40-40-20](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/abb0bd9a-48d6-4fe1-9247-4344e7a2f2ad)

**Test number 2**
![geargenerator-test number 2-30-10-27](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/c0c6e473-f7a5-484c-96ac-cc7ccd63b937)
![geargenerator-test number 2-30-20-20](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/789d298a-499d-4bab-b15a-caaf341bb28e)

**Test number 3**
![geargenerator-test number 3-50-25-20](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/95def7d8-72c8-44c4-9018-a7a1fca22a5c)
![geargenerator-test number 3-50-50-27](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/75a7a3f8-8aeb-4e7e-b872-44d040a33f93)

**Test number 4**
![geargenerator-test number 4-60-20-20](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/ea00667b-76a8-48ce-9717-be1b956bd40e)
![geargenerator-test number 4-60-40-27](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/393bbf55-61f7-4c73-8d47-8b23b1087079)

**Test number 5**
![geargenerator-test number 5-85-15-27](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/c1afda86-b44b-4ef3-b9df-38579e01365a)
![geargenerator-test number 5-85-35-20](https://github.com/SiposCristina/GearGenerator.com_automation_code/assets/157922599/32ad080e-a144-415c-9548-fa3eeda0dc80)



