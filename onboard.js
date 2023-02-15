let activedays =[]
function update(){
const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
for (x in days){
if (document.getElementById(days[x].toString()).checked == true){
    activedays.push(days[x])
}
if (activedays.length == 0){
    document.getElementById('days').innerHTML= "no days yet."
}else{
    document.getElementById('days').innerHTML= new Intl.ListFormat('en-US').format(activedays)
}}

document.getElementById('hours').innerHTML = document.getElementById('sessionLength').value*60
document.getElementById('total').innerHTML = document.getElementById('sessionLength').value*60*activedays.length
activedays =[]
}
update()

function setToSelf(here){
        document.getElementById('prof').innerHTML = here
    // const checked = document.querySelectorAll('input[type="radio"]:checked');
    // console.log(checked)

    // if (document.getElementById('success-outlined').checked==true){
    // document.getElementById('prof').innerHTML = "beginner"} else if (document.getElementById('danger-outlined').checked==true) {
    //     document.getElementById('prof').innerHTML = "intermediate"
    // } else {
    //     document.getElementById('prof').innerHTML = "advnaced"

    // }
}
setToSelf("Beginner")