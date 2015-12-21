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
    $('#LegendDiv').append('<div onclick="ToggleLegend();" smallonly="true" style="visibility:hidden">Done</div>');
}

function main(){
    var enablePOC = getURLParameter('poc');

    if(enablePOC==1){

        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://rawgit.com/erronlinex/lbi-reportit-test-scripts/master/css/fixUI.css"
        }).appendTo("head");
        
//        iphoneFixes();
        legend();

    }
}
