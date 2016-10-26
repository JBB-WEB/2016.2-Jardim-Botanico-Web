var cleanCampPolygon;
function addCleanCampPolygon(){
  var cleanCampPolygonCoords = [
{lat: -15.866917529146138, lng: -47.84123182296753},
{lat: -15.86688140893202, lng: -47.84129083156586},
{lat: -15.866798848418345, lng: -47.84145176410675},
{lat: -15.866767888217012, lng: -47.84166097640991},
{lat: -15.866850448743358, lng: -47.841821908950806},
{lat: -15.866938169265568, lng: -47.84218668937683},
{lat: -15.866979449498094, lng: -47.842369079589844},
{lat: -15.867036209804033, lng: -47.84253537654877},
{lat: -15.867067169964171, lng: -47.84269094467163},
{lat: -15.867123930245391, lng: -47.8428840637207},
{lat: -15.867273570910212, lng: -47.84313082695007},
{lat: -15.867314851074063, lng: -47.84329175949097},
{lat: -15.867366451266982, lng: -47.84351170063019},
{lat: -15.867474811629126, lng: -47.84373164176941},
{lat: -15.867557371865939, lng: -47.84376919269562},
{lat: -15.867681212157763, lng: -47.84379601478577},
{lat: -15.867799892366032, lng: -47.84373164176941},
{lat: -15.867851492434792, lng: -47.843592166900635},
{lat: -15.867583171933015, lng: -47.8435492515564},
{lat: -15.867454171564642, lng: -47.84347951412201},
{lat: -15.867454171564642, lng: -47.843323945999146},
{lat: -15.867490291676104, lng: -47.84316837787628},
{lat: -15.867485131660573, lng: -47.84291088581085},
{lat: -15.867418051446693, lng: -47.84265875816345},
{lat: -15.867392251358483, lng: -47.842369079589844},
{lat: -15.867309691054041, lng: -47.84220278263092},
{lat: -15.86725293082512, lng: -47.8421813249588},
{lat: -15.867154890392058, lng: -47.84201502799988},
{lat: -15.867036209804033, lng: -47.841618061065674},
{lat: -15.866969129440768, lng: -47.84128546714783},
{lat: -15.866902049055165, lng: -47.8412801027298},
  ];

  // Construct the polygon.
  cleanCampPolygon = new google.maps.Polygon({
    paths:cleanCampPolygonCoords,
    strokeColor: '#7ED9D1',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#7ED9D1',
    fillOpacity: 0.35
  });
  
  cleanCampPolygon.setMap(map);
}