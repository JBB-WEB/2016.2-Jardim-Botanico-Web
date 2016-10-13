function addNatureLibaryMarker(){
    //set tea house info, will be used at infowindow
    var natureLibaryInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Bilioteca da Natureza</h1>'+
        '<div id="bodyContent">'+
        '<p>A <b>Bilioteca da Natureza</b>, possui acervo literário infanto-juvenil, livros didáticos, ' +
        'gibis e brinquedos com temática ambiental que estimulam a imaginação. Há ainda '+
        'uma Sala Verde para exposição de vídeos ambientais e um espaço para realização de oficinas. '+
        '<p>Leia mais em:  <a href="/jbb_spaces/nature_libary">'+
        'Bilioteca da Natureza</a> '+
        '</div>'+
        '</div>';

    //set the infowindow with japanese garden info
    var infowindow = new google.maps.InfoWindow({
        content: natureLibaryInfowindowContentString
    });

    //set the position in latitude and longitude of the marker
    var natureLibaryLatLng = {lat: -15.875422, lng: -47.836901};

    //add the marker at the map in the position previously defined
    var natureLibaryMarker = new google.maps.Marker({
        position: natureLibaryLatLng,
        title: 'Bilioteca da Natureza'
        map: map,
    });

    //add a listener to verify if the marker is clicked
    natureLibaryMarker.addListener('click', function() {
        infowindow.open(map, natureLibaryMarker);
    });

    //set the marker on map
    natureLibaryMarker.setMap(map);
}
