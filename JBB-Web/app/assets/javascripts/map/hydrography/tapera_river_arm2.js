var taperaRiverArm2;

function addTaperaRiverArm2(){
    //set the path of the river
    var taperaRiverArm2Coordinates = [
        {lat: -15.911366282965588, lng: -47.888404629193246},
        {lat: -15.911353385738241, lng: -47.88838009117171},
        {lat: -15.911315983774237, lng: -47.88833315251395},
        {lat: -15.911257946230117, lng: -47.88827320095152},
        {lat: -15.911201198392982, lng: -47.88823296781629},
        {lat: -15.911139291643304, lng: -47.888190052472055},
        {lat: -15.911079964323628, lng: -47.88814177270979},
        {lat: -15.911018057536598, lng: -47.888090810738504},
        {lat: -15.910927776771352, lng: -47.888015310745686},
        {lat: -15.910819439799502, lng: -47.887953619938344},
        {lat: -15.91069304659189, lng: -47.887844047509134},
        {lat: -15.910620821866143, lng: -47.88775821682066},
        {lat: -15.910561494393429, lng: -47.88770457264036},
        {lat: -15.910497007990186, lng: -47.88762947078794},
        {lat: -15.91041704482143, lng: -47.887538275681436},
        {lat: -15.910347399454984, lng: -47.88745780941099},
        {lat: -15.910280333523742, lng: -47.88735588546842},
        {lat: -15.910251959469182, lng: -47.887208363972604},
        {lat: -15.910171996202935, lng: -47.8871895885095},
        {lat: -15.91010235075158, lng: -47.88714399095625},
        {lat: -15.910089453443131, lng: -47.887093028984964},
        {lat: -15.910014649037773, lng: -47.88701792713255},
        {lat: -15.909947582995516, lng: -47.886966965161264},
        {lat: -15.9098302173677, lng: -47.8868646430783},
        {lat: -15.90971543113796, lng: -47.88671295158565},
        {lat: -15.90964320606093, lng: -47.886621756479144},
        {lat: -15.909601934576695, lng: -47.88653056137264},
        {lat: -15.909581298831393, lng: -47.88644473068416},
        {lat: -15.909550345209484, lng: -47.886374993249774},
        {lat: -15.90952455052089, lng: -47.88625697605312},
        {lat: -15.90952455052089, lng: -47.88618723861873},
        {lat: -15.90952455052089, lng: -47.886101407930255},
        {lat: -15.909498755829013, lng: -47.88597266189754},
        {lat: -15.909498755829013, lng: -47.88590292446315},
        {lat: -15.90949359689024, lng: -47.885822458192706},
        {lat: -15.90949359689024, lng: -47.88576344959438},
        {lat: -15.90949359689024, lng: -47.88567225448787},
        {lat: -15.90949359689024, lng: -47.88555960170925},
    ];

    //add the river at the map in the position previously defined
    taperaRiverArm2 = new google.maps.Polyline({
        path: taperaRiverArm2Coordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3,
    });

    //set the river on map
    taperaRiverArm2.setMap(map);
    google.maps.event.addListener(taperaRiverArm2, 'click', addTaperaRiverArm2Infowindow);
}

function addTaperaRiverArm2Infowindow(event){
    var taperaRiverArm2ContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Corrego Tapera</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Corrego Tapera</b>, fica na divisa da estação ecologica do JBB ' +
    'o território da aeronáutica'+
    '<p>Leia mais em: <a href="/jbb_spaces/rio">'+
    'Rio</a> '+
    '</div>'+
    '</div>';

    infowindow.close();
    infowindow.setContent(taperaRiverArm2ContentString);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
}
