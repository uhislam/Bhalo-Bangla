const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('name') !== null){
document.getElementById('setname').innerText = urlParams.get('name').split(" ")[0];}