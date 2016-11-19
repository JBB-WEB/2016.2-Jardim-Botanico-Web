var typicalCerradoWest;

var typicalCerradoWestCoordinates = [
  {lat: -15.882895215606826, lng: -47.861911021900596},
  {lat: -15.88273010766947, lng: -47.86177154703182},
  {lat: -15.882276060143687, lng: -47.86177154703182},
  {lat: -15.881873608071796, lng: -47.86187883539242},
  {lat: -15.881811692297042, lng: -47.861417495441856},
  {lat: -15.881625944858555, lng: -47.86102052850765},
  {lat: -15.881419558614843, lng: -47.860698663425865},
  {lat: -15.880893272696712, lng: -47.860795222295565},
  {lat: -15.88037730481377, lng: -47.86090251065616},
  {lat: -15.879964529555679, lng: -47.861041985524935},
  
  {lat: -15.879706544589775, lng: -47.86121364690189},
  {lat: -15.879603350510878, lng: -47.86132093526248},
  {lat: -15.879314406808708, lng: -47.86132093526248},
  {lat: -15.8790357821319, lng: -47.861256562246126},
  {lat: -15.87893258770935, lng: -47.8614496812952},
  {lat: -15.87907705988611, lng: -47.86171790219669},
  {lat: -15.87915961536918, lng: -47.862007580770296},
  {lat: -15.87932472623379, lng: -47.86217924214725},
  {lat: -15.879489836963035, lng: -47.8623509035242},
  {lat: -15.879366003928792, lng: -47.862544022573275},
  {lat: -15.87932472623379, lng: -47.862769328130526},
  {lat: -15.879479517546416, lng: -47.86306973554019},
  {lat: -15.879479517546416, lng: -47.863305769933504},
  {lat: -15.879603350510878, lng: -47.863531075490755},
  {lat: -15.87997484894744, lng: -47.863520346654695},
  {lat: -15.880191556052313, lng: -47.86334868527774},
  {lat: -15.880418582293055, lng: -47.863273583425325},
  {lat: -15.88066624699108, lng: -47.8633594141138},
  {lat: -15.88066624699108, lng: -47.86367055035953},
  {lat: -15.880563053403922, lng: -47.86388512708072},
  {lat: -15.880470179130256, lng: -47.86411043263797},
  {lat: -15.88037730481377, lng: -47.864271365178865},
  {lat: -15.880408262924016, lng: -47.86445375539188},
  {lat: -15.881017104870654, lng: -47.86472197629337},
  {lat: -15.8811306175577, lng: -47.86511894322757},
  {lat: -15.881316365453051, lng: -47.865537367833895},
  {lat: -15.881522751802498, lng: -47.865773402227205},
  {lat: -15.881677541425793, lng: -47.865494452489656},
  {lat: -15.881749776542602, lng: -47.865269146932405},
  {lat: -15.881749776542602, lng: -47.86518331624393},
  {lat: -15.88199743960356, lng: -47.865043841375154},
  {lat: -15.882203825255012, lng: -47.86490436650638},
  {lat: -15.882296698729162, lng: -47.86468978978519},
  {lat: -15.882544361078105, lng: -47.86414261914615},
  {lat: -15.882771384666494, lng: -47.86420699216251},
  {lat: -15.882926173330011, lng: -47.86387439824466},
  {lat: -15.882926173330011, lng: -47.86358471967105},
  {lat: -15.882998407998935, lng: -47.8634130582941},
  {lat: -15.883019046471004, lng: -47.863284312261385},
  {lat: -15.883349261736523, lng: -47.86313410855655},
  {lat: -15.883377209644493, lng: -47.86312699085556},
  {lat: -15.883367606903835, lng: -47.86280624517531},
  {lat: -15.883202499353796, lng: -47.86226980337233},
];

var typicalCerradoWestColor = '#D3D6A1';

function addTypicalCerradoWest(){
  typicalCerradoWest = createVegetation(typicalCerradoWestCoordinates,
                                      typicalCerradoWestColor);

  typicalCerradoWest.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(typicalCerradoWest, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
  });
}

