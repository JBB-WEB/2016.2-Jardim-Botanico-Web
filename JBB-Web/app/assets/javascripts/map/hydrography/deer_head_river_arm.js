var deerHeadRiverArm;

var deerHeadRiverArmCoordinates = [
    {lat: -15.871762739195182, lng: -47.84749369136989},
    {lat: -15.871690500497145, lng: -47.847375087440014},
    {lat: -15.871504743726147, lng: -47.847096137702465},
    {lat: -15.871215788408682, lng: -47.84696739166975},
    {lat: -15.87107131059459, lng: -47.84664552658796},
    {lat: -15.870926832676929, lng: -47.84643094986677},
    {lat: -15.870802994379325, lng: -47.84628074616194},
    {lat: -15.87067915600564, lng: -47.84619491547346},
    {lat: -15.870534677806818, lng: -47.84602325409651},
    {lat: -15.87043147902996, lng: -47.845873050391674},
    {lat: -15.870369559738492, lng: -47.84570138901472},
    {lat: -15.870328280200258, lng: -47.84552972763777},
    {lat: -15.870204441534877, lng: -47.84527223557234},
    {lat: -15.870039323195964, lng: -47.84505765885115},
    {lat: -15.869709086112334, lng: -47.844843082129955},
    {lat: -15.869502687660292, lng: -47.84469287842512},
    {lat: -15.869255009238824, lng: -47.84447830170393},
    {lat: -15.869089890122073, lng: -47.84426372498274},
    {lat: -15.868966050695752, lng: -47.844092063605785},
    {lat: -15.868821571268853, lng: -47.84379165619612},
    {lat: -15.868677091738409, lng: -47.84364145249128},
    {lat: -15.86859453196022, lng: -47.84340541809797},
    {lat: -15.86859453196022, lng: -47.84304063767195},
    {lat: -15.868408772335666, lng: -47.84278314560652},
    {lat: -15.868408772335666, lng: -47.84252565354109},
    {lat: -15.868408772335666, lng: -47.842353992164135},
    {lat: -15.868408772335666, lng: -47.84222524613142},
    {lat: -15.86835717240956, lng: -47.8422365617007},
    {lat: -15.868305572470259, lng: -47.84212550148368},
    {lat: -15.868202372552028, lng: -47.84163197502494},
];

var deerHeadRiverArmContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Ribeirão Cabeça de Veado</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Ribeirão Cabeça de Veado</b>, serve de ponto de captação de ' +
    'água para a CAESB. '+
    'Esse ribeirão tem 4 braços que dão em 4 estações de captação de recursos hidricos da CAESB'+
    '<p>Leia mais em: <a href="/jbb_spaces/rio">'+
    'Rio</a> '+
    '</div>'+
    '</div>';

function addDeerHeadRiverArm(){
    //create the river
    deerHeadRiverArm = createRiver(deerHeadRiverArmCoordinates);

    //set the river on map
    deerHeadRiverArm.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(deerHeadRiverArm, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, deerHeadRiverArmContentString);
    });
}
