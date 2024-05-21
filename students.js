


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pataVafxqtBa32IY1.4d77daf8255f22dcb88dcbde0c14d73bab2654fa0ac7cd7fb42cf92c42a0ae0d'}).base('appDYx7jO383yZXyc');
const {
    host, hostname, href, origin, pathname, port, protocol, search
  } = window.location

//   cool auto login feature added
if (sessionStorage.user !== undefined && pathname=='/dash/'){
    base('Students').find(sessionStorage.user.toString(), function(err, record) {
        if (err) { console.error(err); return; }
        console.log('Loggin in as', record);
        window.location.href =  record.fields.Link2dash

    });
};

// Airtable.configure({ apiKey: 'pataVafxqtBa32IY1.4d77daf8255f22dcb88dcbde0c14d73bab2654fa0ac7cd7fb42cf92c42a0ae0d' })
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pataVafxqtBa32IY1.4d77daf8255f22dcb88dcbde0c14d73bab2654fa0ac7cd7fb42cf92c42a0ae0d'}).base('appDYx7jO383yZXyc');
var studentArray = []
base('Students').select({
    // Selecting the first 3 records in All Students:
    maxRecords: 100,
    view: "students"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Student_Name'));
        console.log(record);
        studentArray.push(record)
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

// Login function
function login(){
    nameLogin = document.getElementById('nameLogin').value.toString().toLowerCase().split(" ")[0]
    year = document.getElementById('yearLogin').value
    console.log(nameLogin,year)

    for (x in studentArray){
        try{
        if(
        studentArray[x].fields.Student_Name.toLowerCase().split(" ")[0] == nameLogin && studentArray[x].fields.Birthday_Pass.substring(0,4) == year
        ){
            sessionStorage.user=studentArray[x].id
            window.location.href =  studentArray[x].fields.Link2dash }
        } catch {
            console.log('struggled with',studentArray[x].fields.Student_Name)
        }
    }

}


// HANDLINE KEYBOARD PRESSES
document.onkeyup = function(e) {
    if (e.which == 77) {
      alert("M key was pressed");
    } else if (e.ctrlKey && e.which == 66) {
      alert("Ctrl + B shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.which == 89) {
      alert("Ctrl + Alt + Y shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
      alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
    }
  };
// database of which keys are down
  isKeyPressed = { 
    'a': false, // ASCII code for 'a'
    'b': false, // ASCII code for 'b'
    'Enter':false
     // ... Other key codes you want to track
 }
//  updating database when key is down
 document.onkeydown = (keyDownEvent) => {   
    isKeyPressed[keyDownEvent.key] = true;  
}
// updating when key is up
document.onkeyup = (keyUpEvent) => {
    isKeyPressed[keyUpEvent.key] = false;
};
// executing the shortcuts
document.onkeydown = (keyDownEvent) => { 
 
    isKeyPressed[keyDownEvent.key] = true;
    if (isKeyPressed["Enter"]) {
        login()
        }}


function check(event){
    if (document.getElementById('yearLogin').value.length==4 && document.getElementById('nameLogin') !== null){
        login()
    }
}


