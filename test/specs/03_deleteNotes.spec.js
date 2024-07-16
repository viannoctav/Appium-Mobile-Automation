const { createTextNote, createTextChecklist,createTextMultipleChecklist, skipOnboarding } = require('../../setup');
const notesPage = require('../../pageobjects/notes.page');
const testData = require('../../data/testData.json');

describe('Create Notes', function () {
    before(async() => {
        await skipOnboarding();
    });

    it('Successfully Delete Text Note', async () => {
        // Create Text Note
        await createTextNote();

        // Verify Created Text Note
        await expect(notesPage.noteTittleCreated).toHaveText(testData.noteTittle);

        // Click Text Note
        await (await notesPage.noteTittleCreated).click();

        // Verify Redirected to Editable Page Text Note
        await expect(notesPage.noteTittle).toHaveText(testData.noteTittle);

        // Click Threedot/More Button
        await (await notesPage.btnMore).click();

        // Verify Delete Button
        await expect(notesPage.textView).toHaveText("Check");

        // Click Delete button
        const deleteButton = await (await notesPage.btnDeleteNote);
        await deleteButton.waitForDisplayed({ timeout: 5000 });
        await deleteButton.click();

        // Verify Delete Confirmation
        await expect(notesPage.textView).toHaveText("Delete");

        // Click OK Button
        const OkButton = await (await notesPage.btnOk);
        await OkButton.waitForDisplayed();
        await OkButton.click();
    });

    it('Successfully Delete Checklist Note - 1 item', async () => {
        // Create Text Checklist
        await createTextChecklist();

        // Verify Created Checklist Tittle 
        await expect(notesPage.noteTittleCreated).toHaveText(testData.checklistTittle);

        // Click Checklist Note
        await (await notesPage.noteTittleCreated).click();

        // Verify Redirected to Editable Page Checklist Note
        await expect(notesPage.noteTittle).toHaveText(testData.checklistTittle);

        // Click Threedot/More Button
        await (await notesPage.btnMore).click();

        // Verify Delete Button
        await expect(notesPage.textView).toHaveText("List");

        // Click Delete button
        const deleteButton = await (await notesPage.btnDeleteNote);
        await deleteButton.waitForDisplayed({ timeout: 5000 });
        await deleteButton.click();

        // Verify Delete Confirmation
        await expect(notesPage.textView).toHaveText("Delete");

        // Click OK Button
        const OkButton = await (await notesPage.btnOk);
        await OkButton.waitForDisplayed();
        await OkButton.click();
    });

    it('Successfully Delete Checklist Note - Multiple item', async () => {
        // Create Text Multiple Checklist
        await createTextMultipleChecklist();

        // Verify Created Checklist Tittle 
        await expect(notesPage.noteTittleCreated).toHaveText(testData.checklistTittleMultiple);

        // Click Checklist Note
        await (await notesPage.noteTittleCreated).click();

        // Verify Redirected to Editable Page Checklist Note
        await expect(notesPage.noteTittle).toHaveText(testData.checklistTittleMultiple);

        // Click Threedot/More Button
        await (await notesPage.btnMore).click();

        // Verify Delete Button
        await expect(notesPage.textView).toHaveText("List");

        // Click Delete button
        const deleteButton = await (await notesPage.btnDeleteNote);
        await deleteButton.waitForDisplayed({ timeout: 5000 });
        await deleteButton.click();

        // Verify Delete Confirmation
        await expect(notesPage.textView).toHaveText("Delete");

        // Click OK Button
        const OkButton = await (await notesPage.btnOk);
        await OkButton.waitForDisplayed();
        await OkButton.click();
    });
});