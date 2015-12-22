function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

$(document).ready(main);

function main(){
    var mod = getURLParameter('mod');

    if(mod==1){
        // Insert link to stylesheet
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://rawgit.com/erronlinex/lbi-reportit-test-scripts/master/css/fixUI.css"
        }).appendTo("head");
        
        hideLegendBtn();
        
    } else if(mod==2){
        // Insert link to stylesheet
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://rawgit.com/erronlinex/lbi-reportit-test-scripts/master/css/mod2.css"
        }).appendTo("head");
        
        // Insert link to bootstrap css
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        }).appendTo("head");       
        // Get bootstrap script
        $.getScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js");

        toolbar();
    }
}


// Mod 1

function hideLegendBtn(){
    $('#LegendDiv').append('<div id="hideLegend" style="text-align:center; display: none;"><button type="button" onclick="ToggleLegend();">OK</button></div>');
}


// Mod 2 - Reword toolbar

function toolbar(){
  // Insert new toolbar that pops things in and out
}
