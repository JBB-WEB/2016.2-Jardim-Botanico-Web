var cochoRiver;

var cochoRiverCoordinates = [
    //cocho river
    {lat: -15.878604658485584, lng: -47.87644545547664},
    {lat: -15.878284754918852, lng: -47.87649373523891},
    {lat: -15.87790293386769, lng: -47.8764561843127},
    {lat: -15.877376638800003, lng: -47.87641326896846},
    {lat: -15.877242484935383, lng: -47.876375718042254},
    {lat: -15.877067052823756, lng: -47.876343531534076},
    {lat: -15.87691225965721, lng: -47.87631670944393},
    {lat: -15.87672650770035, lng: -47.87631670944393},
    {lat: -15.876514956651981, lng: -47.87632207386196},
    {lat: -15.87630856517117, lng: -47.876359624788165},
    {lat: -15.876200209559107, lng: -47.87640790455043},
    {lat: -15.875942219772005, lng: -47.87642936222255},
    {lat: -15.875694549265548, lng: -47.87647227756679},
    {lat: -15.875452038266282, lng: -47.87647227756679},
    {lat: -15.87523016624529, lng: -47.87648837082088},
    {lat: -15.874936056445488, lng: -47.87655274383724},
    {lat: -15.874781261641566, lng: -47.876638574525714},
    {lat: -15.874512950366363, lng: -47.87672440521419},
    {lat: -15.874234319048544, lng: -47.876858515664935},
    {lat: -15.873971166894576, lng: -47.87691215984523},
    {lat: -15.873744133387527, lng: -47.87701944820583},
    {lat: -15.87349130031724, lng: -47.877099914476275},
    {lat: -15.873279745871784, lng: -47.87722866050899},
    {lat: -15.872913394965273, lng: -47.877368135377765},
    {lat: -15.872593482361285, lng: -47.8775183390826},
    {lat: -15.872356127520444, lng: -47.877609534189105},
    {lat: -15.872118772400015, lng: -47.87773291580379},
    {lat: -15.8718246580586, lng: -47.87780265323818},
    {lat: -15.871535703199859, lng: -47.87799577228725},
    {lat: -15.87138090578367, lng: -47.87822644226253},
    {lat: -15.871220948328695, lng: -47.878387374803424},
    {lat: -15.871055830822652, lng: -47.878575129434466},
    {lat: -15.870901033037866, lng: -47.87878434173763},
    {lat: -15.870694635806508, lng: -47.879116935655475},
    {lat: -15.870529517869235, lng: -47.879358334466815},
    {lat: -15.870354079912637, lng: -47.87950317375362},
    {lat: -15.870250881043315, lng: -47.879583640024066},
    {lat: -15.870039323195964, lng: -47.87974993698299},
    {lat: -15.869832925082104, lng: -47.87989477626979},
    {lat: -15.869714246070922, lng: -47.8799859713763},
    {lat: -15.869502687660292, lng: -47.88014690391719},
    {lat: -15.869265329179127, lng: -47.8804365824908},
    {lat: -15.868991850582505, lng: -47.88052777759731},
    {lat: -15.86876481146567, lng: -47.880597515031695},
    {lat: -15.868610011921206, lng: -47.88068334572017},
    {lat: -15.868362332402763, lng: -47.88076381199062},
    {lat: -15.868032092571415, lng: -47.88090328685939},
    {lat: -15.867707012208989, lng: -47.88122515194118},
    {lat: -15.867443851531608, lng: -47.88150410167873},
    {lat: -15.86726325086794, lng: -47.88154701702297},
    {lat: -15.867113610195448, lng: -47.88169185630977},
    {lat: -15.866974289469495, lng: -47.88176159374416},
    {lat: -15.86683496864726, lng: -47.881874246522784},
    {lat: -15.866607927100977, lng: -47.88192252628505},
    {lat: -15.866432485730986, lng: -47.882088823243976},
    {lat: -15.866293164534284, lng: -47.88221756927669},
    {lat: -15.866066122377779, lng: -47.88242678157985},
    {lat: -15.865885520479791, lng: -47.88253406994045},
    {lat: -15.865710078481092, lng: -47.882625265046954},
    {lat: -15.865544956460495, lng: -47.88267890922725},
    {lat: -15.865359194025666, lng: -47.88273791782558},
    {lat: -15.865230192234097, lng: -47.8827593754977},
    {lat: -15.86508055005247, lng: -47.8827593754977},
    {lat: -15.86489478718972, lng: -47.88271109573543},
    {lat: -15.864724504415168, lng: -47.88266281597316},
    {lat: -15.864590342127865, lng: -47.882614536210895},
    {lat: -15.864363298053654, lng: -47.88251261226833},
    {lat: -15.864239455723576, lng: -47.88224439136684},
    {lat: -15.864058852189217, lng: -47.88223902694881},
    {lat: -15.863976290519615, lng: -47.88206200115383},
    {lat: -15.863883408600916, lng: -47.88196544162929},
    {lat: -15.863811167079001, lng: -47.88190106861293},
    {lat: -15.863754405865052, lng: -47.88178841583431},
    {lat: -15.863800846859471, lng: -47.881606025621295},
    {lat: -15.863857608060343, lng: -47.88148264400661},
    {lat: -15.8637956867495, lng: -47.88131634704769},
    {lat: -15.863738925531212, lng: -47.88115005008876},
    {lat: -15.863604762588066, lng: -47.88101593963802},
    {lat: -15.863439638843177, lng: -47.88094620220363},
    {lat: -15.86332611619013, lng: -47.880865735933185},
    {lat: -15.86329515545547, lng: -47.88081745617092},
    {lat: -15.86333643643396, lng: -47.88067798130214},
    {lat: -15.863403518005962, lng: -47.88052241317928},
    {lat: -15.863429318604625, lng: -47.88049559108913},
    {lat: -15.863449959081194, lng: -47.88031320087612},
    {lat: -15.86333643643396, lng: -47.87992696277797},
    {lat: -15.8632229137228, lng: -47.87972231861204},
    {lat: -15.863166152343243, lng: -47.87961771246046},
    {lat: -15.863145511837644, lng: -47.87949433084577},
    {lat: -15.863075850115576, lng: -47.879440686665475},
    {lat: -15.863026828889343, lng: -47.87936290260404},
    {lat: -15.862990707978161, lng: -47.87927975412458},
    {lat: -15.862936526599274, lng: -47.879220745526254},
    {lat: -15.86284622426876, lng: -47.879105410538614},
    {lat: -15.862823003662966, lng: -47.87903835531324},
    {lat: -15.862823003662966, lng: -47.87895520683378},
    {lat: -15.86281268339285, lng: -47.8788693761453},
    {lat: -15.862804943189927, lng: -47.87877013441175},
    {lat: -15.862768822239003, lng: -47.87865748163313},
    {lat: -15.862748181692705, lng: -47.87861993070692},
    {lat: -15.86271722086932, lng: -47.87859310861677},
    {lat: -15.862670779625315, lng: -47.878574333153665},
    {lat: -15.862619178230542, lng: -47.87858774419874},
    {lat: -15.862580477175786, lng: -47.87863602396101},
    {lat: -15.862544356184646, lng: -47.878705761395395},
    {lat: -15.862539196042542, lng: -47.87876745220274},
    {lat: -15.862521135544084, lng: -47.87883450742811},
    {lat: -15.862485014542333, lng: -47.87887742277235},
    {lat: -15.86244115331719, lng: -47.87891229148954},
    {lat: -15.862368911278551, lng: -47.87891229148954},
    {lat: -15.862312149658596, lng: -47.87886132951826},
    {lat: -15.862201206446185, lng: -47.878815731965005},
    {lat: -15.862141864702856, lng: -47.87878354545683},
    {lat: -15.862067042479868, lng: -47.87876208778471},
    {lat: -15.861981899916486, lng: -47.87873526569456},
    {lat: -15.861873536601998, lng: -47.87870307918638},
    {lat: -15.861790974037591, lng: -47.878705761395395},
    {lat: -15.861716151684389, lng: -47.878705761395395},
    {lat: -15.861638749220845, lng: -47.87869771476835},
    {lat: -15.861458143357007, lng: -47.87868698593229},
    {lat: -15.861414281908527, lng: -47.87862529512495},
    {lat: -15.861385900966194, lng: -47.87850191351026},
    {lat: -15.861383320880325, lng: -47.87846168037504},
    {lat: -15.86139364122358, lng: -47.878338298760355},
    {lat: -15.861367840364432, lng: -47.87826856132597},
    {lat: -15.861287857680098, lng: -47.87824710365385},
    {lat: -15.861174333815605, lng: -47.878212234936655},
    {lat: -15.861114991770098, lng: -47.87816395517439},
    {lat: -15.861104671412582, lng: -47.878075442276895},
    {lat: -15.861102091323101, lng: -47.877981564961374},
    {lat: -15.861050489526903, lng: -47.87786891218275},
    {lat: -15.861011788171089, lng: -47.877812585793436},
    {lat: -15.860903424335294, lng: -47.87772139068693},
    {lat: -15.860831181745732, lng: -47.87767311092466},
    {lat: -15.860769259505533, lng: -47.87759532686323},
    {lat: -15.860715077529758, lng: -47.877544364891946},
    {lat: -15.86068927658379, lng: -47.87752022501081},
    {lat: -15.86065573534909, lng: -47.87747999187559},
    {lat: -15.860629934395542, lng: -47.87745316978544},
    {lat: -15.860606713534514, lng: -47.87743707653135},
    {lat: -15.860596393150981, lng: -47.87739684339613},
    {lat: -15.860596393150981, lng: -47.87735929246992},
    {lat: -15.860596393150981, lng: -47.87728150840849},
    {lat: -15.860586072766914, lng: -47.87724932190031},
    {lat: -15.8605654319972, lng: -47.877209088765085},
    {lat: -15.860531890741914, lng: -47.87717958446592},
    {lat: -15.860426106746386, lng: -47.877109847031534},
    {lat: -15.860364184381789, lng: -47.877050838433206},
    {lat: -15.860312582396768, lng: -47.876951596699655},
    {lat: -15.860266140598979, lng: -47.876951596699655},
    {lat: -15.860260980398555, lng: -47.87689258810133},
    {lat: -15.8602971017987, lng: -47.87687917705625},
    {lat: -15.860294521698902, lng: -47.876841626130044},
    {lat: -15.860340963490165, lng: -47.876820168457925},
    {lat: -15.860359024183882, lng: -47.87680139299482},
    {lat: -15.860377084875983, lng: -47.87674506660551},
    {lat: -15.86041320625533, lng: -47.87666996475309},
    {lat: -15.860402885861888, lng: -47.87662168499082},
    {lat: -15.860405465960298, lng: -47.87653585430235},
    {lat: -15.860382245073419, lng: -47.876458070240915},
    {lat: -15.860353863985852, lng: -47.87639101501554},
    {lat: -15.86032548289426, lng: -47.8763293242082},
    {lat: -15.860317742595868, lng: -47.876294455491006},
    {lat: -15.86030484209788, lng: -47.87624617572874},
    {lat: -15.860286781399315, lng: -47.876205942593515},
    {lat: -15.860266140598979, lng: -47.87616034504026},
    {lat: -15.860222278891216, lng: -47.87613620515913},
    {lat: -15.8601964778822, lng: -47.87609865423292},
    {lat: -15.860204218185247, lng: -47.87605037447065},
    {lat: -15.860137135548944, lng: -47.87605037447065},
    {lat: -15.860075213095621, lng: -47.876069149933755},
    {lat: -15.859979749276178, lng: -47.876079878769815},
    {lat: -15.859894605831501, lng: -47.87610938306898},
    {lat: -15.859817202668806, lng: -47.87610938306898},
    {lat: -15.859755280117243, lng: -47.87611742969602},
    {lat: -15.859683037116412, lng: -47.87612011190504},
    {lat: -15.859652075822405, lng: -47.87612011190504},
    {lat: -15.85963659517364, lng: -47.87604232784361},
    {lat: -15.85963659517364, lng: -47.87599941249937},
    {lat: -15.859600473655188, lng: -47.875937721692026},
    {lat: -15.859515330050403, lng: -47.87590553518385},
    {lat: -15.859427606298775, lng: -47.8758974885568},
    {lat: -15.859347622844925, lng: -47.8758974885568},
    {lat: -15.859316661499433, lng: -47.87587603088468},
    {lat: -15.859306341049882, lng: -47.875843844376504},
    {lat: -15.859296020599812, lng: -47.87581434007734},
    {lat: -15.859293440487201, lng: -47.87577947136015},
    {lat: -15.859337302396954, lng: -47.875739238224924},
    {lat: -15.859376004074118, lng: -47.87569364067167},
    {lat: -15.859399225076848, lng: -47.87565608974546},
    {lat: -15.8594172858549, lng: -47.87562122102827},
    {lat: -15.859414705743841, lng: -47.87552466150373},
    {lat: -15.859332142172779, lng: -47.87549783941358},
    {lat: -15.859236678001588, lng: -47.87546297069639},
    {lat: -15.859228937661406, lng: -47.87536641117185},
    {lat: -15.859226357547943, lng: -47.87531008478254},
    {lat: -15.859231517774845, lng: -47.87526985164732},
    {lat: -15.85923409788823, lng: -47.8752483939752},
    {lat: -15.859239258114926, lng: -47.87520011421293},
    {lat: -15.859239258114926, lng: -47.8751411056146},
    {lat: -15.859252158681066, lng: -47.87509014364332},
    {lat: -15.859262479133388, lng: -47.87505795713514},
    {lat: -15.859257318907304, lng: -47.874956033192575},
    {lat: -15.85920829675279, lng: -47.87490238901228},
    {lat: -15.859164434814973, lng: -47.87482728715986},
    {lat: -15.85912315298244, lng: -47.87474682088941},
    {lat: -15.859074130795332, lng: -47.87466903682798},
    {lat: -15.85898898696833, lng: -47.874599299393594},
    {lat: -15.858945124982831, lng: -47.87453224416822},
    {lat: -15.858875461809768, lng: -47.87442227359861},
    {lat: -15.85886256121952, lng: -47.87435521837324},
    {lat: -15.858852240746739, lng: -47.87426670547575},
    {lat: -15.858707754072235, lng: -47.87417551036924},
    {lat: -15.858596808876912, lng: -47.87417551036924},
    //end cocho river
];

var cochoRiverContentString =
'<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Corrego do Cocho</h1>'+
'<div id="bodyContent">'+
'<p>O <b>Corrego do Cocho</b>, faz divisa com a QI 17 do lago sul' +
'<p>Leia mais em: <a href="/jbb_spaces/rio">'+
'Rio</a> '+
'</div>'+
'</div>';

function addCochoRiver(){
    //create the river
    cochoRiver = createRiver(cochoRiverCoordinates);

    //set the river on map
    cochoRiver.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(cochoRiver, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, cochoRiverContentString);
    });
}
