const { createTextNote, createTextChecklist,createTextMultipleChecklist, skipOnboarding } = require('../../setup');
const notesPage = require('../../pageobjects/notes.page');
const testData = require('../../data/testData.json');

describe('Create Notes', function () {
    before(async() => {
        await skipOnboarding();
    });

    it('Successfully Edit Text Note', async () => {
        // Create Text Note
        await createTextNote();

        // Verify Created Text Note
        await expect(notesPage.noteTittleCreated).toHaveText(testData.noteTittle);

        // Click Text Note
        await (await notesPage.noteTittleCreated).click();

        // Verify Redirected to Editable Page Text Note
        await expect(notesPage.noteTittle).toHaveText(testData.noteTittle);

        // Click Edit Button
        await (await notesPage.btnEdit).click();

        // Clear Note Tittle
        (await (notesPage.noteTittle)).clearValue();

        // Edit Note Tittle
        await (notesPage.noteTittle).addValue(testData.editNoteTittle);

        // Clear Note Body
        (await (notesPage.noteView)).clearValue();
        
        // Edit Note Body
        await (notesPage.noteValue).addValue(testData.editNoteValue);

        // Save Changes
        await (await notesPage.btnBack).click();

        // Verify data successfully edited
        await expect (notesPage.btnEdit).toBeDisplayed();
        await expect (notesPage.noteTittle).toHaveTextContaining(testData.editNoteTittle);
        // **Masih bug sistem, karena ketika udah di clear dan di edit text tetep text sebelumnya ikutan** //
        //await expect (notesPage.noteValue).toHaveTextContaining(testData.editNoteValue);

        // Back to Dashboard
        await (await notesPage.btnBack).click();
    });

    it('Successfully Edit Checklist Note - 1 item', async () => {
        const indexToClick = 1; 

        // Create Text Checklist
        await createTextChecklist();

        // Verify Created Checklist Tittle 
        await expect(notesPage.noteTittleCreated).toHaveText(testData.checklistTittle);

        // Click Checklist Note
        await (await notesPage.noteTittleCreated).click();

        // Verify Redirected to Editable Page Checklist Note
        await expect(notesPage.noteTittle).toHaveText(testData.checklistTittle);

        // Click Edit Button
        await (await notesPage.btnEdit).click();

        // Clear Checklist Note Tittle
        (await (notesPage.noteTittle)).clearValue();

        // Edit Checklist Note Tittle
        await (notesPage.noteTittle).addValue(testData.editChecklistTittle);

        // Delete Checklist List
        await (await notesPage.deleteChecklist).click();

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

        // Edit Checklist List
        /// Generate a random index within the array length
        const randomIndex = Math.floor(Math.random() * testData.inputItemSelectionEdit.length);
        /// Get the randomly selected value
        const randomItem = testData.inputItemSelectionEdit[randomIndex];
        /// Input the randomly selected value into the element
        await (notesPage.inputItemSelection).addValue(randomItem);

        // Click Ok button
        await (await notesPage.btnOk).click();

        // Back to the dashboard
        await (await notesPage.btnBack).click();

        // Verify data value already created
        await expect (notesPage.btnEdit).toBeDisplayed();
        await expect (notesPage.noteViewChecklist).toHaveTextContaining(randomItem);

        // Back to Dashboard
        await (await notesPage.btnBack).click();
    });

    it('Successfully Edit Checklist Note - multiple item', async () => {
        const indexToClick = 1;
        let randomItem;
        const selectedItems = [];

        // Create Text Multiple Checklist
        await createTextMultipleChecklist();

        // Verify Created Checklist Tittle 
        await expect(notesPage.noteTittleCreated).toHaveText(testData.checklistTittleMultiple);

        // Click Checklist Note
        await (await notesPage.noteTittleCreated).click();

        // Verify Redirected to Editable Page Checklist Note
        await expect(notesPage.noteTittle).toHaveText(testData.checklistTittleMultiple);

        // Click Edit Button
        await (await notesPage.btnEdit).click();

        // Clear Checklist Note Tittle
        (await (notesPage.noteTittle)).clearValue();

        // Edit Checklist Note Tittle
        await (notesPage.noteTittle).addValue(testData.editMultipleChecklistTittle);

        // Delete All Checklist List
        await (await notesPage.deleteChecklist).click();
        await (await notesPage.deleteChecklist).click();
        await (await notesPage.deleteChecklist).click();
        
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
                const randomIndex = Math.floor(Math.random() * testData.inputItemSelectionEdit.length);

                /// Get the randomly selected value
                randomItem = testData.inputItemSelectionEdit[randomIndex];

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