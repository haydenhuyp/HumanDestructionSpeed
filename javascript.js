/*var link="https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png";*/
var link="../images/icon/resized.png";
let numberOfSlots = 0;
function innitial(){
    for (let i = 0; i < 100; i++) {
        document.getElementById("jsarea").innerHTML+='<img id="'+ i +'">';
    }
    numberOfSlots=100;
}
// fullfill html with 100 images 
function innitialAdd(){
    for (let i = 0; i < 100; i++) {
        document.getElementById(i.toString()).src=link;
    }
}
// rate = item/seconds
function add(rate){
    
}
function remove(rate){

}
function clear(){
    document.getElementById("jsarea").innerHTML+="";
}
function main(variations){
    /*var link="https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png";
    var pictures = ["https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png"];
    
    var ok=1;
    document.getElementById("1".toString()).src=link;*/
    innitial();
}
