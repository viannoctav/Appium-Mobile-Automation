const notesPage = require('../../pageobjects/notes.page');
const testData = require('../../data/testData.json');
const { skipOnboarding } = require('../../setup');

describe('Create Notes', async () => {
   before(async() => {
        await skipOnboarding();
   });

    it('Successfully Create Text Note', async () => {
        // Click on element Add
        await (await notesPage.btnAdd).click();

        // Assertion Popup Selection Add
        const addSelection = await (notesPage.addSelection);
        await expect(addSelection).toHaveText("Add");

        // Text Selection
        await expect (notesPage.textSelection).toBeDisplayed();
        await (await notesPage.textSelection).click();

        // Verify Editing Text
        await expect(notesPage.textView).toHaveText("Editing");

        // Add note title
        await (notesPage.noteTittle).addValue(testData.noteTittle);
        
        // Add note value
        await (notesPage.noteValue).addValue(testData.noteValue);
  
        // Save changes
        await (await notesPage.btnBack).click();

        // Verify data value already created
        await expect (notesPage.btnEdit).toBeDisplayed();
        await expect (notesPage.noteView).toHaveText(testData.noteValue);

        // Back to the dashboard
        await (await notesPage.btnBack).click();
    });

    it('Successfully Create Checklist Note - 1 item', async () => {
        const indexToClick = 1;

        // Click on element Add
        await (await notesPage.btnAdd).click();

        // Assertion Popup Selection Add
        const addSelection = await (notesPage.addSelection);
        await expect(addSelection).toHaveText("Add");

        // Checklist Selection
        await expect (notesPage.checklistSelection).toBeDisplayed();
        await (await notesPage.checklistSelection).click();

        // Verify Editing Text
        await expect(notesPage.textView).toHaveText("Editing");

        // Add note title
        await (notesPage.noteTittle).addValue(testData.checklistTittle);

        // Click Add Item Index
        const addItemChecklistElements = await (notesPage.addItemChecklist);
        if (addItemChecklistElements[indexToClick]) {
            await expect(addItemChecklistElements[indexToClick]).toBeDisplayed();
            await (await addItemChecklistElements[indexToClick]).click();
        } else {
            console.error(`Element at index ${indexToClick} not found.`);
        }

        // Verify popup add item
        await expect(notesPage.textView).toHaveText("Add Item");

        // Input Checklist Item
        /// Generate a random index within the array length
        const randomIndex = Math.floor(Math.random() * testData.inputItemSelection.length);
        /// Get the randomly selected value
        const randomItem = testData.inputItemSelection[randomIndex];
        /// Input the randomly selected value into the element
        await (notesPage.inputItemSelection).addValue(randomItem);

        // Click Ok button
        await (await notesPage.btnOk).click();

        // Back to the dashboard
        await (await notesPage.btnBack).click();

        // Verify data value already created
        await expect (notesPage.btnEdit).toBeDisplayed();
        await expect (notesPage.noteViewChecklist).toHaveTextContaining(randomItem);

        // Back to the dashboard
        await (await notesPage.btnBack).click();
    });

    it('Successfully Create Checklist Note - multiple item', async () => {
        const indexToClick = 1;
        let randomItem;
        const selectedItems = [];

        // Click on element Add
        await (await notesPage.btnAdd).click();

        // Assertion Popup Selection Add
        const addSelection = await (notesPage.addSelection);
        await expect(addSelection).toHaveText("Add");

        // Checklist Selection
        await expect (notesPage.checklistSelection).toBeDisplayed();
        await (await notesPage.checklistSelection).click();

        // Verify Editing Text
        await expect(notesPage.textView).toHaveText("Editing");

        // Add note title
        await (notesPage.noteTittle).addValue(testData.checklistTittleMultiple);

        // Click Add Item Index
        const addItemChecklistElements = await (notesPage.addItemChecklist);
        if (addItemChecklistElements[indexToClick]) {
            await expect(addItemChecklistElements[indexToClick]).toBeDisplayed();
            await (await addItemChecklistElements[indexToClick]).click();
        } else {
            console.error(`Element at index ${indexToClick} not found.`);
        }

        // Verify popup add item
        await expect(notesPage.textView).toHaveText("Add Item");

        // Logic getting random test data
        for (let i = 0; i < 3; i++) {
            do {
                /// Generate a random index within the array length
                const randomIndex = Math.floor(Math.random() * testData.inputItemSelection.length);

                /// Get the randomly selected value
                randomItem = testData.inputItemSelection[randomIndex];

                /// Check if the item is not already selected
            } while (selectedItems.includes(randomItem));

            // Input Checklist Item
            selectedItems.push(randomItem);
            await (notesPage.inputItemSelection).addValue(randomItem);

            // Click Next button
            await (await notesPage.btnNext).click();
        }

        // Click Ok button
        await (await notesPage.btnOk).click();

        // Save changes
        await (await notesPage.btnBack).click();

        // Verify data value already created
        await expect (notesPage.btnEdit).toBeDisplayed();
        await expect (notesPage.noteViewChecklist).toHaveTextContaining(randomItem);

        // Back to the dashboard
        await (await notesPage.btnBack).click();
    });
});
