/*
    javascript.js
    Main JS of Human Destruction Speed Webpage

    Revision history: see in https://github.com/haydenhuyp/NatureDestructionSpeed
        Finished on March 14th 2021 by Huy Pham
*/
let endNumber = 0;
// create n 'slots' of <img> element
function innitial(n) {
    for (let i = 0; i < n; i++) {
        document.getElementById("jsarea").innerHTML += '<img id="' + i + '">' + '<p style="display:inline;"> </p>';
    }
}
// fullfill html with n images 
function innitialAdd(n, imglink) {
    innitial(n);
    for (let i = 0; i < n; i++) {
        document.getElementById(i.toString()).src = imglink;
    }
    endNumber = n;
}

// rate = item/seconds
function add(rate, link) {
    innitial(1000);
    let i=0;
    setInterval(function(){
        addItem(i, link);
        i++;
    }, rate);
}
// add an item with item ID specified
function addItem(itemID, link){
    document.getElementById(itemID).src=link;
}
// remove all items, one item per <rate> second
function remove(rate) {
    let i = endNumber-1;
    setInterval(function(){
        clearItem(i);
        i--;
    }, rate);
}
// clear one item with item ID specified
function clearItem(itemID){
    document.getElementById(itemID).src="";
}

// change "text" stuff in HTML file
function note(figure, imglink, explanation) {
    document.getElementById("figure").innerHTML = figure;
    document.getElementById("legendimg").src = imglink;
    document.getElementById("explanation").innerHTML = explanation;
}

// print out the slogan in console screen
function printSlogan(){
    let slogan = ["We", "Only", "Have", "One", "Earth!", " ", "Website", "by", "Huy", "Pham","2021"];
    slogan.forEach(word => {
        console.log(word)
    });
}

// main function. Executed on HTML load.
function main(variations) {
    printSlogan();
    let imglink = "";
    switch (variations) {
        case "airpollution":
            imglink = "../images/icon/airpollution.png";
            innitialAdd(457, imglink);
            note("USA CO2 emmission over the period from 1751 to 2017 - 399 Billion Tonnes!", imglink, "represents 1 billions tonnes of CO2");
            break;
        case "deforestation":
            imglink = "../images/icon/tree.png";
            innitialAdd(410, imglink);
            note("Global Deforestation Rate - over 10 million hectares of forest a year", imglink, "represents 10 millions hectares, each second represents a year.");
            remove(1200);
            break;
        case "desertification":
            imglink = "../images/icon/desert.png";
            note("Global Desertification Rate - 24 billion tons of fertile land lost every year", imglink, "represents 24 BILLION TONS of fertile land, each second represent a year");
            add(1200, imglink);
            break;
        case "landspecies":
            imglink = "../images/icon/landspecies.png";
            innitialAdd(500, imglink);
            note("Land Species Extinction Rate - up to 10,000 times higher than the natural extinction rate!", imglink, "represents 200 THOUSANDS soon-extinct species, each second represents 20 years.");
            remove(1100);
            break;
        case "oceanspecies":
            imglink = "../images/icon/oceanspecies.png";
            innitialAdd(500, imglink);
            note("Ocean Species Extinction Rate - thosand times higher than the natural baseline rate!", imglink, "represents 200 THOUSANDS soon-extinct species, each second represents 20 years.");
            remove(1100);
            break;
        case "plasticpollution":
            imglink = "../images/icon/plastic.png";
            note("Plastic Objects Are Dumped Into The Ocean at an Alarming Rate - eight million tonnes a year", imglink, "represents one full garbage truck of plastic, each second represents one minute.");
            add(1100, imglink);
            break;
        default:
            console.log("Error with parameter(s)");
            break;
    }
}