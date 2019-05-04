/*This project is an exercise in basic principles of XMLHR request.
We created request, added load and error functions, and console.logged/console.errored various pieces of data to test along the way.*/

//initialized empty array to hold array from data request
let rides = [];

//created function to parse JSON data, addit to rides array variable initialized above, and call domStringBuilder on XMLHR request load
function executeThisCodeWhenRequestLoads() {
    const data = JSON.parse(this.responseText);
    rides = data.rides;
    domStringBuilder(data.rides);
};

//created function to console error if XMLHR request fails
function executeThisCodeIfRequestFails() {
    console.error('Oh shit');
}
//Created this function to practice XMLHR requests.
//added event listeners to tell the app how to respond on load or in case of error
//added open method to tell the request what to do with the designated file

const getRidesData = () => {
    const myRequest = new XMLHttpRequest();
    console.log(myRequest);

    myRequest.addEventListener('load', executeThisCodeWhenRequestLoads);
    myRequest.addEventListener('error', executeThisCodeIfRequestFails);
    myRequest.open('GET', './db/rides.json');
    myRequest.send();
};

//created function to log array, to be called in XMLHR load function at top of file
const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
};

const init = () => {
    getRidesData();
};
init();