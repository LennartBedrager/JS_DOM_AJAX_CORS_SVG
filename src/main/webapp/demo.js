//This is our eventlistener, it responds when something inside svg2 is clicked.
document.getElementById("svg2").addEventListener("click", getInfo);

//lastTarget is used to store the last land clicked,
var lastTarget;

    //This function will be called by the eventListener
    function getInfo(e) {
        
    //If we have a lastTarget, the land will be colored grey
    if (lastTarget) {
        document.getElementById(lastTarget.id).style.fill = "#c0c0c0";
    }
    //The target helps us get infomation about here inside the svg2,
    //something was clicked.
    var target = e.target;
    
    //The clicked country will be colored red, to indicate the current selected
    document.getElementById(target.id).style.fill = "red";

    //We fetch infomation from the clicked country.
    //the id is added to the URL to get the right data
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + target.id)
            
            .then(res => res.json())
            .then(data => document.getElementById("land").innerHTML =
                        "<h1>" + data[0].name + "</h1><br />" +
                        "Capital: " + data[0].capital + "<br />" +
                        "Population " + data[0].population + "<br />" +
                        "Area: " + data[0].area + "<br />" +
                        "Currencies: " + data[0].currencies + "<br />" +
                        "timezones: " + data[0].timezones + "<br />" +
                        "Area: " + data[0].area + "<br />");
                
    //Here we store the lastTarget to use again next time the function is called            
    lastTarget = target;
}
;

//Below is same function with catch

//function getInfo(e) {
//    if (lastTarget) {
//        document.getElementById(lastTarget.id).style.fill = "#c0c0c0";
//    }
//    var target = e.target;
//    document.getElementById(target.id).style.fill = "red";
//
//    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + target.id)
//            .then(res => {
//                if (res.ok) {
//                    res.json();
//                } else {
//                    throw new Error("Upps: " + res.statusText);
//                }
//
//            })
//
//            .then(data => document.getElementById("land").innerHTML =
//                        "<h1>" + data[0].name + "</h1><br />" +
//                        "Capital: " + data[0].capital + "<br />" +
//                        "Population " + data[0].population + "<br />" +
//                        "Area: " + data[0].area + "<br />" +
//                        "Currencies: " + data[0].currencies + "<br />" +
//                        "timezones: " + data[0].timezones + "<br />" +
//                        "Area: " + data[0].area + "<br />")
//            .catch(err => {
//                document.getElementById("land").innerText = err;
//            });
//    lastTarget = target;
//}
//;
    