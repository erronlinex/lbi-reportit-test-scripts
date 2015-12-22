function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

$(document).ready(main);
 
function iphoneFixes(){
    document.ontouchstart = function(e){ 
        e.preventDefault(); 
    }
}

function legend(){
    // $('#LegendDiv>table').append('<button type="button" onclick="ToggleLegend();">OK</button>');
    $('#LegendDiv').append('<div id="hideLegend" style="text-align:center; display: none;"><button type="button" onclick="ToggleLegend();">OK</button></div>');
}

function main(){
    var enablePOC = getURLParameter('mod');

    if(enablePOC==1){

        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://rawgit.com/erronlinex/lbi-reportit-test-scripts/master/css/fixUI.css"
        }).appendTo("head");
        
//        iphoneFixes();
        legend();
        
        // Remove cadline's onkeypress attribute so that I can create a new keypress handler
        // $("#SearchBox").removeAttr("onkeypress");
        // Replace input box with my own
        $("#SearchBox").remove();
        $("#SearchDiv").append('<input id="SearchBox" type="text">');
    }
}
