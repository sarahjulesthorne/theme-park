let rides = [];

function executeThisCodeWhenRequestLoads() {
    const data = JSON.parse(this.responseText);
    rides = data.rides;
    domStringBuilder(data.rides);

};

function executeThisCodeIfRequestFails() {
    console.error('Oh shit');
}

const getRidesData = () => {
    const myRequest = new XMLHttpRequest();
    console.log(myRequest);

    myRequest.addEventListener('load', executeThisCodeWhenRequestLoads);
    myRequest.addEventListener('error', executeThisCodeIfRequestFails);
    myRequest.open('GET', './db/rides.json');
    myRequest.send();
};

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
};


const init = () => {
    getRidesData();
};
init();