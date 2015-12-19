function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

$(document).ready(main);

function addBingTiles(){
    // API key for http://openlayers.org. Please get your own at
    // http://bingmapsportal.com/ and use that instead.
    var apiKey = "ApTJzdkyN1DdFKkRAE6QIDtzihNaf6IWJsT-nQ_2eMoO4PN__0Tzhl2-WgJtXFSp";

    var Map1 = new OpenLayers.Map( 'Map1');

    var road = new OpenLayers.Layer.Bing({
        key: apiKey,
        type: "Road",
        // custom metadata parameter to request the new map style - only useful
        // before May 1st, 2011
        metadataParams: {mapVersion: "v1"}
    });
    var aerial = new OpenLayers.Layer.Bing({
        key: apiKey,
        type: "Aerial"
    });
    var hybrid = new OpenLayers.Layer.Bing({
        key: apiKey,
        type: "AerialWithLabels",
        name: "Bing Aerial With Labels"
    });

    Map1.addLayers([road, aerial, hybrid]);
    Map1.addControl(new OpenLayers.Control.LayerSwitcher());
    // Zoom level numbering depends on metadata from Bing, which is not yet loaded.
    var zoom = Map1.getZoomForResolution(76.43702827453613);
    Map1.setCenter(new OpenLayers.LonLat(-71.147, 42.472).transform(
        new OpenLayers.Projection("EPSG:4326"),
        Map1.getProjectionObject()
    ), zoom);
}

function main(){
    var enablePOC = getURLParameter('poc');

    if(enablePOC==1){

        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://rawgit.com/erronlinex/lbi-reportit-test-scripts/master/css/fixUI.css"
        }).appendTo("head");

        addBingTiles();
    }
}
