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
        
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://rawgit.com/erronlinex/lbi-reportit-test-scripts/master/css/markers.css"
        }).appendTo("head");
        
        moreControls();
        toolbar();
        
    }
}


// Mod 1

function hideLegendBtn(){
  //ToggleLegend(); //hide legend
    $('#LegendDiv').append('<div id="hideLegend" style="text-align:center; display: none;"><button type="button" onclick="ToggleLegend();">OK</button></div>');
}


// Mod 2 - Reword toolbar

function toolbar(){
  // Insert new toolbar that pops things in and out
  $('body').append('<div id="toolbarContainer"><div id="myToolbar"></div></div>'); // toolbar container + toolbar
  $('#myToolbar').append('<a href="#" id="toggleLegend"></div>'); // toggle legend button
  $('#myToolbar').append('<a href="#" id="showFilter"></div>'); // toggle filter button
  // Legend toggle event
  $('#toggleLegend').click( function(){
    // $('#LegendDiv').toggle();
    ToggleLegend();
  });
  // Search toggle event
  $('#showFilter').click( function(){
    ShowFilterDialog();
  });
}

function moreControls(){
  $('#LegendDiv').append('<div id="hideLegend" style="text-align:center;"><button type="button" onclick="ToggleLegend();">OK</button></div>');
}
