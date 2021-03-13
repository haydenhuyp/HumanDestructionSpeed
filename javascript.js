/*var link="https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png";*/
var link = "../images/icon/resized.png";
let numberOfSlots = 0;
let endNumber = 0;
function innitial(n) {
    for (let i = 0; i < n; i++) {
        document.getElementById("jsarea").innerHTML += '<img id="' + i + '">' + '<p style="display:inline;"> </p>';
    }
    numberOfSlots = n;
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
function add(rate) {

}
function remove(rate) {
    let i=endNumber-1;
    setInterval(function(){
        clearItem(i);
        i--;
    }, rate);
}
function clearItem(itemID){
    document.getElementById(itemID).src="";
}

function note(figure, imglink, explanation) {
    document.getElementById("figure").innerHTML = figure;
    document.getElementById("legendimg").src = imglink;
    document.getElementById("explanation").innerHTML = explanation;
}
function main(variations) {
    /*var link="https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png";
    var pictures = ["https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png"];
    
    var ok=1;
    document.getElementById("1".toString()).src=link;*/

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

            break;

        case "landspecies":

            break;

        case "oceanspecies":

            break;

        case "plasticpollution":

            break;

        default:
            break;
    }
}
