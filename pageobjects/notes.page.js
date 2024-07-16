class notesPage {
    get textView () {
        return $('android.widget.TextView');
    }

    get button () {
        return $('android.widget.Button');
    }

    get btnAdd () {
        return $('~Add');
    }

    get btnMore () {
        return $('~More');
    }

    get addSelection () {
        return $('//*[@text="Add"]');
    }

    get textSelection () {
        return $('//*[@text="Text"]');
    }

    get checklistSelection () {
        return $('//*[@text="Checklist"]');
    }

    get addItemChecklist () {
        return $$('//*[@text="Add Item"]');
    }

    get noteTittle () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteTittleCreated () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get noteValue () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get btnEdit () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get inputItemSelection () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit"]');
    }
    
    get noteView () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    get noteViewChecklist () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
    }

    get deleteChecklist () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_del"]');
    }

    get btnOk () {
        return $('//*[@resource-id="android:id/button1"]');
    }

    get btnCancel () {
        return $('//*[@resource-id="android:id/button2"]');
    }

    get btnNext () {
        return $('//*[@resource-id="android:id/button3"]');
    }

    get btnDelete () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_del"]');
    }

    get btnBack () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
    }

    get btnDeleteNote () {
        return $('//android.widget.ListView/android.widget.LinearLayout[@class="android.widget.LinearLayout" and @index="6"]');
    }  
}

module.exports = new notesPage();
