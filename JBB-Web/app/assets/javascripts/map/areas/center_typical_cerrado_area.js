var centerTypicalCerradoAreaPolygon;
function addCenterTypicalCerradoAreaPolygon(){
  var centerTypicalCerradoAreaPolygonCoords = [
  {lat: -15.88934807785589, lng: -47.83908352284925},
  {lat: -15.885658460189136, lng: -47.82289497568854},
  {lat: -15.892138750829927, lng: -47.82122127726325},
  {lat: -15.89478033810618, lng: -47.82068483546027},
  {lat: -15.896596409241797, lng: -47.82047025873908},
  {lat: -15.89804099957502, lng: -47.82036297037848},
  {lat: -15.900352322530491, lng: -47.82044880106696},
  {lat: -15.903757348454228, lng: -47.82096378519782},
  {lat: -15.906935320022408, lng: -47.82188646509894},
  {lat: -15.910422778068828, lng: -47.82340995949198},
  {lat: -15.913291113077536, lng: -47.825062200511184},
  {lat: -15.91521019290225, lng: -47.826070711162174},
  {lat: -15.91832607916945, lng: -47.827787324931705},
  {lat: -15.920525971936842, lng: -47.82900568105106},
  {lat: -15.922806083510835, lng: -47.83052917568966},
  {lat: -15.92369336024139, lng: -47.831226550033534},
  {lat: -15.924322705943124, lng: -47.83163424588565},

  {lat: -15.924291755221955, lng: -47.83200975482032},
  {lat: -15.92400287571712, lng: -47.83250328127906},
  {lat: -15.923517969899809, lng: -47.832857332869025},
  {lat: -15.923693361500801, lng: -47.83307190959022},
  {lat: -15.923517969899809, lng: -47.833340130491706},
  {lat: -15.92315686906251, lng: -47.833651266737434},
  {lat: -15.922806084770258, lng: -47.833651266737434},
  {lat: -15.922579106372313, lng: -47.83391948763892},
  {lat: -15.922795767575918, lng: -47.83441301409766},
  {lat: -15.92301242854578, lng: -47.83472415034339},
  {lat: -15.923208454936164, lng: -47.83521767680213},
  {lat: -15.923352895311892, lng: -47.83579703394935},
  {lat: -15.923456066945247, lng: -47.83629056040809},
  {lat: -15.923352894682182, lng: -47.836773358322375},
  {lat: -15.92306401382683, lng: -47.83733125779747},
  {lat: -15.923590189359665, lng: -47.83748146150231},
  {lat: -15.924116363513882, lng: -47.83739563081383},
  {lat: -15.924590950784161, lng: -47.837524376846545},
  {lat: -15.92464253628943, lng: -47.83797498796105},
  {lat: -15.924908487947487, lng: -47.837700769430285},
  {lat: -15.92565131677025, lng: -47.837829515463},
  {lat: -15.92610526636472, lng: -47.83759348106969},
  {lat: -15.925940193903665, lng: -47.837164327627306},
  {lat: -15.926476678905908, lng: -47.836971208578234},
  {lat: -15.927075064332737, lng: -47.8363703937589},
  {lat: -15.927611546302654, lng: -47.83583395195592},
  {lat: -15.927921054479365, lng: -47.83534042549718},
  {lat: -15.940977281879187, lng: -47.851056757208426},

  {lat: -15.945479703363114, lng: -47.85634741252579},
  {lat: -15.94257056348812, lng: -47.85877212882042},

  {lat: -15.941881670294617, lng: -47.85873524877388},
  {lat: -15.941324593988643, lng: -47.85852067205269},
  {lat: -15.94125238028015, lng: -47.858456299036334},
  {lat: -15.94096352518621, lng: -47.85779111120064},
  {lat: -15.94070561850083, lng: -47.85702936384041},
  {lat: -15.940540558048164, lng: -47.856417820185015},
  {lat: -15.940540558048164, lng: -47.85575263234932},
  {lat: -15.940406446330371, lng: -47.855216190546344},
  {lat: -15.939591457809689, lng: -47.85486213862896},
  {lat: -15.93947797813282, lng: -47.85544149577618},
  {lat: -15.93972557007235, lng: -47.855763360857964},
  {lat: -15.939818416970876, lng: -47.855977937579155},
  {lat: -15.939632723130831, lng: -47.856492921710014},
  {lat: -15.939498610806112, lng: -47.85717956721783},
  {lat: -15.939622406801346, lng: -47.857952043414116},
  {lat: -15.94006600849023, lng: -47.85860650241375},
  {lat: -15.940076324796893, lng: -47.859250232577324},
  {lat: -15.94020012043561, lng: -47.85963647067547},
  {lat: -15.94035486487657, lng: -47.86015145480633},
  {lat: -15.94050960919818, lng: -47.86036603152752},

  {lat: -15.939661378899222, lng: -47.861046642719884},

  {lat: -15.93947568491381, lng: -47.86091789603233},
  {lat: -15.939083663713495, lng: -47.86055311560631},
  {lat: -15.938753540003283, lng: -47.86027416586876},
  {lat: -15.938402782965994, lng: -47.85993084311485},
  {lat: -15.93799012684288, lng: -47.86008104681969},
  {lat: -15.937639368470915, lng: -47.86091789603233},
  {lat: -15.937123546221741, lng: -47.860853523015976},
  {lat: -15.936752153381214, lng: -47.86008104681969},
  {lat: -15.936298227864803, lng: -47.85941585898399},
  {lat: -15.935741136054821, lng: -47.859651893377304},
  {lat: -15.935596704592367, lng: -47.860660403966904},
  {lat: -15.936009365637885, lng: -47.8613255918026},
  {lat: -15.93607126472151, lng: -47.86143288016319},
  {lat: -15.93640139284506, lng: -47.86205515265465},
  {lat: -15.936256961857845, lng: -47.862613052129745},
  {lat: -15.93633949386328, lng: -47.86327823996544},
  {lat: -15.936463291807762, lng: -47.863643020391464},

  {lat: -15.935650579902546, lng: -47.864239141345024},

  {lat: -15.935184042698225, lng: -47.86383613944054},
  {lat: -15.934792013112759, lng: -47.86344990134239},
  {lat: -15.934317449958321, lng: -47.86299929022789},
  {lat: -15.93291438711214, lng: -47.86207661032677},
  {lat: -15.931944617353377, lng: -47.86205515265465},
  {lat: -15.92635287480185, lng: -47.85995230078697},
  {lat: -15.92569258495762, lng: -47.86154016852379},
  {lat: -15.926043364207713, lng: -47.86327823996544},
  {lat: -15.926600482933635, lng: -47.863857597112656},
  {lat: -15.928003589912585, lng: -47.8636859357357},
  {lat: -15.929509855608337, lng: -47.86366447806358},
  {lat: -15.929963796478493, lng: -47.86445841193199},
  {lat: -15.930273301028688, lng: -47.866089195013046},
  {lat: -15.929262251064676, lng: -47.86651834845543},
  {lat: -15.928828942378441, lng: -47.867848724126816},
  {lat: -15.929262251064676, lng: -47.8691790997982},

  {lat: -15.923794239561076, lng: -47.873577922582626},

  {lat: -15.920327649490611, lng: -47.87128195166588},
  {lat: -15.918057826591152, lng: -47.868106216192245},
  {lat: -15.916551475000933, lng: -47.867634147405624},
  {lat: -15.916118138890047, lng: -47.868835777044296},
  {lat: -15.91541654463768, lng: -47.86926493179635},
  {lat: -15.914921300494463, lng: -47.871153206942836},
  {lat: -15.914756218842141, lng: -47.872698159335414},
  {lat: -15.915808612052055, lng: -47.872912736056605},
  {lat: -15.916427664306601, lng: -47.87377104294137},
  {lat: -15.91708798460913, lng: -47.874951214907924},
  {lat: -15.91764512817632, lng: -47.87602409851388},
  {lat: -15.915767341833938, lng: -47.87634596359567},
  {lat: -15.917975286598177, lng: -47.87709698211984},
  {lat: -15.918841949874004, lng: -47.8775046778901},

  {lat: -15.92240485956067, lng: -47.8846537694335},
  {lat: -15.921533053027439, lng: -47.88480933755636},
  {lat: -15.920449737861546, lng: -47.88513656705618},
  {lat: -15.919330306209593, lng: -47.88478788053908},
  {lat: -15.918061265212351, lng: -47.88353797113814},
  {lat: -15.917112058693354, lng: -47.88229342615523},
  {lat: -15.916147371307556, lng: -47.88164969533682},
  {lat: -15.91514140910078, lng: -47.881756983697414},
  {lat: -15.91456161732874, lng: -47.88153050483743},
  {lat: -15.913746523735686, lng: -47.88131592811624},
  {lat: -15.913191948622952, lng: -47.88131324590722},
  {lat: -15.908489893612519, lng: -47.88497865200043},
  {lat: -15.911305522407389, lng: -47.882127463817596},
  {lat: -15.9092006833139, lng: -47.88431614637375},
  {lat: -15.90754981370071, lng: -47.88697689771652},
  {lat: -15.901854209479135, lng: -47.88714856171282},
  {lat: -15.89681883082876, lng: -47.88598984741839},
  {lat: -15.893888347529424, lng: -47.88620442413958},
  {lat: -15.890446465837421, lng: -47.88471445572213},
  {lat: -15.889224250884535, lng: -47.88431614637375},
  {lat: -15.888233632371382, lng: -47.8835865855217},
  {lat: -15.887119180716851, lng: -47.88199871778488},
  {lat: -15.885633235580341, lng: -47.881183326244354},
  {lat: -15.88447749289178, lng: -47.880196273326874},
  {lat: -15.883734511945885, lng: -47.87835091352463},
  {lat: -15.883321743706881, lng: -47.87792190905748},
  {lat: -15.882620035524475, lng: -47.878007739745954},
  {lat: -15.881257889131351, lng: -47.878694385253766},
  {lat: -15.8797306231284, lng: -47.879252284728864},
  {lat: -15.87816206761096, lng: -47.87860855456529},
  {lat: -15.877006282045201, lng: -47.87830814715562},
  {lat: -15.875850489848137, lng: -47.87813648577867},
  {lat: -15.875024919795548, lng: -47.877406925254036},
  {lat: -15.874116788981965, lng: -47.877707332663704},
  {lat: -15.873249933023402, lng: -47.87805065541761},
  {lat: -15.872837143160941, lng: -47.87847980885999},
  {lat: -15.871929002486912, lng: -47.87886604695814},
  {lat: -15.871268533971577, lng: -47.87985309987562},
  {lat: -15.870566783802223, lng: -47.88062557607191},
  {lat: -15.869534793820096, lng: -47.881398052268196},
  {lat: -15.868544078465847, lng: -47.88199886708753},
  {lat: -15.86763591844658, lng: -47.882685512595344},
  {lat: -15.866397511826342, lng: -47.88350090413587},
  {lat: -15.865695744697764, lng: -47.88358673482435},
  {lat: -15.865365500497846, lng: -47.88337215810316},
  {lat: -15.865489342136216, lng: -47.88311466603773},
  {lat: -15.86698002206474, lng: -47.882225439097965},
  {lat: -15.86797074510663, lng: -47.88160316660651},
  {lat: -15.868674798341697, lng: -47.88108345128421},
  {lat: -15.869809991875302, lng: -47.88015004254703},
  {lat: -15.87031566693634, lng: -47.879785262121004},
  {lat: -15.870831660588697, lng: -47.87919517608657},
  {lat: -15.87116189583286, lng: -47.87866946311965},
  {lat: -15.87158500894858, lng: -47.87811156364455},
  {lat: -15.872059720167265, lng: -47.87785407157912},
  {lat: -15.872586029124212, lng: -47.87768241020217},
  {lat: -15.873318731461557, lng: -47.877263985483296},
  {lat: -15.874113349294682, lng: -47.87699576458181},
  {lat: -15.874835726423552, lng: -47.87683483204091},
  {lat: -15.875454904758275, lng: -47.876791916696675},
  {lat: -15.876389975134416, lng: -47.87652133028132},
  {lat: -15.877091705022822, lng: -47.876489143855},
  {lat: -15.87746836785179, lng: -47.87657497454347},
  {lat: -15.878139135844238, lng: -47.87680028001887},
  {lat: -15.878582873234095, lng: -47.876907568379465},
  {lat: -15.878479678579504, lng: -47.876650076314036},
  {lat: -15.878985331881834, lng: -47.876424770756785},
  {lat: -15.878851179088603, lng: -47.87623165170771},
  {lat: -15.878526116180602, lng: -47.87630675356013},
  {lat: -15.878097857897808, lng: -47.8762477449618},
  {lat: -15.877850190041618, lng: -47.87634966890437},
  {lat: -15.87738065222836, lng: -47.8762477449618},
  {lat: -15.87582641147555, lng: -47.87612672886098},
  {lat: -15.876074081819898, lng: -47.87521477779592},
  {lat: -15.8765591020289, lng: -47.87486072620595},
  {lat: -15.877136996923559, lng: -47.87464614948476},
  {lat: -15.876889327885996, lng: -47.8741848095342},
  {lat: -15.87626614050941, lng: -47.87448285151186},
  {lat: -15.875724361437259, lng: -47.875201683445994},
  {lat: -15.875120663391531, lng: -47.87622092287165},
  {lat: -15.87419189371379, lng: -47.87667689844511},
  {lat: -15.873526272754692, lng: -47.87678955122374},
  {lat: -15.873023758945115, lng: -47.87695466542573},
  {lat: -15.873018599071258, lng: -47.8767695930037},
  {lat: -15.873606823859156, lng: -47.87632166407775},
  {lat: -15.873622303435134, lng: -47.87630557082366},
  {lat: -15.873871983100322, lng: -47.876081448043806},
  {lat: -15.875038106253212, lng: -47.87507830191316},
  {lat: -15.876474251542252, lng: -47.873749658610905},
  {lat: -15.876721921090141, lng: -47.87364237025031},
  {lat: -15.877506205982941, lng: -47.875208780315006},
  {lat: -15.878311126776737, lng: -47.87585251047858},
  {lat: -15.879177960957493, lng: -47.875208780315006},
  {lat: -15.879755848338819, lng: -47.87462942316779},
  {lat: -15.879384349498302, lng: -47.87413589670905},
  {lat: -15.878682627596715, lng: -47.873985693004215},
  {lat: -15.87818729301781, lng: -47.87353508188971},
  {lat: -15.877918986278981, lng: -47.87289135172614},
  {lat: -15.87855879406619, lng: -47.87293426707038},
  {lat: -15.878682627596715, lng: -47.873020097758854},
  {lat: -15.879157322091787, lng: -47.873020097758854},
  {lat: -15.879157322091787, lng: -47.87231199457892},
  {lat: -15.879549460178684, lng: -47.87205450251349},
  {lat: -15.879095405481959, lng: -47.87160389139899},
  {lat: -15.878889016645077, lng: -47.871003076579655},
  {lat: -15.880209901546651, lng: -47.870252058055485},

  {lat: -15.880003513851804, lng: -47.86988727697462},
  {lat: -15.880602037584188, lng: -47.86975853094191},
  {lat: -15.880746508563444, lng: -47.86945812353224},
  {lat: -15.88091161812712, lng: -47.868857308712904},
  {lat: -15.881530777785333, lng: -47.868342324582045},
  {lat: -15.881922911250948, lng: -47.86799900182814},
  {lat: -15.882707175891438, lng: -47.867612763729994},
  {lat: -15.883140583987641, lng: -47.86716215261549},
  {lat: -15.883367606903835, lng: -47.866346761074965},
  {lat: -15.88330569158843, lng: -47.865617200222914},
  {lat: -15.883429522200185, lng: -47.864565774289076},
  {lat: -15.883367606903835, lng: -47.86280624517531},
  {lat: -15.883202499353796, lng: -47.86226980337233},
  {lat: -15.883842290356023, lng: -47.86216251566657},
  {lat: -15.884440802679018, lng: -47.86267749979743},
  {lat: -15.884647185826154, lng: -47.862720415141666},
  {lat: -15.885658460189136, lng: -47.86319248392829},
  {lat: -15.88613313824045, lng: -47.86344997599372},
  {lat: -15.88658717706837, lng: -47.86336414530524},
  {lat: -15.887495251652176, lng: -47.86263458445319},
  {lat: -15.888362046297326, lng: -47.8614114971424},
  {lat: -15.888563839399035, lng: -47.860669941001106},
  {lat: -15.889471905065967, lng: -47.85912498860853},
  {lat: -15.892237352541862, lng: -47.858481258444954},
  {lat: -15.895415506123882, lng: -47.85676464467542},
  {lat: -15.897726859245237, lng: -47.85650715260999},
  {lat: -15.899130167827067, lng: -47.85736545949476},
  {lat: -15.900162006126786, lng: -47.85809502034681},
  {lat: -15.902555850595856, lng: -47.85753712087171},
  {lat: -15.903711489451636, lng: -47.85706505208509},
  {lat: -15.904578214235153, lng: -47.85839542775648},
  {lat: -15.906765645885311, lng: -47.85727962880628},
  {lat: -15.906765645885311, lng: -47.853374333135434},
  {lat: -15.908540337095495, lng: -47.85152897333319},
  {lat: -15.909728043822264, lng: -47.853564918623306},
  {lat: -15.910470928775988, lng: -47.85442322550807},
  {lat: -15.911213810984055, lng: -47.85519570170436},
  {lat: -15.912204316323582, lng: -47.855367363081314},
  {lat: -15.913524982515865, lng: -47.855109871015884},
  {lat: -15.914185312357365, lng: -47.85365074931178},
  {lat: -15.913524982515865, lng: -47.85141915141139},
  {lat: -15.91245194189571, lng: -47.84970253764186},
  {lat: -15.911543979972965, lng: -47.84875840006862},
  {lat: -15.911296353282136, lng: -47.847814262495376},
  {lat: -15.911626522135435, lng: -47.84601181803737},
  {lat: -15.913772606460705, lng: -47.8448101883987},
  {lat: -15.913772606460705, lng: -47.84343689738307},
  {lat: -15.914845640029, lng: -47.843093574629165},
  {lat: -15.914267853434986, lng: -47.84172028361354},
  {lat: -15.916166288862335, lng: -47.84094780741725},
  {lat: -15.917074229899967, lng: -47.83948868571315},
  {lat: -15.915505965530693, lng: -47.83905953227077},
  {lat: -15.913855147707837, lng: -47.84051865397487},
  {lat: -15.913291113077536, lng: -47.840640470449216},
  {lat: -15.912424425859168, lng: -47.84182064241577},
  {lat: -15.912011716346283, lng: -47.84323684877563},
  {lat: -15.911248201513216, lng: -47.843880578939206},
  {lat: -15.910360869819888, lng: -47.843880578939206},
  {lat: -15.90939099116274, lng: -47.84370891756225},
  {lat: -15.908978275421171, lng: -47.84325830644775},
  {lat: -15.909102090232606, lng: -47.842399999562986},
  
  {lat: -15.909927520359934, lng: -47.84158460802246},

  {lat: -15.910216420733473, lng: -47.84162752328484},
  {lat: -15.910835490214742, lng: -47.84162752328484},
  {lat: -15.91126883771713, lng: -47.841069623809744},
  {lat: -15.911557735532991, lng: -47.840275689941336},
  {lat: -15.91139265111763, lng: -47.83900968728631},
  {lat: -15.911000575087732, lng: -47.83847324548333},
  {lat: -15.910567227006956, lng: -47.83797971902459},
  {lat: -15.91036087044964, lng: -47.837593480926444},
  {lat: -15.910154513680473, lng: -47.83785097299187},
  {lat: -15.910154513680473, lng: -47.83847324548333},
  {lat: -15.910319599112757, lng: -47.839052602630545},
  {lat: -15.910484684409461, lng: -47.83943884072869},
  {lat: -15.910484684409461, lng: -47.840039655548026},
  {lat: -15.910195785051258, lng: -47.840340062957694},
  {lat: -15.910030699517273, lng: -47.8401254862365},

  {lat: -15.910051335216444, lng: -47.839825078826834},
  {lat: -15.910030699517273, lng: -47.83896677194207},
  {lat: -15.909886249563824, lng: -47.8382157534179},
  {lat: -15.909721163775634, lng: -47.83746473489373},
  {lat: -15.90906081926702, lng: -47.83742181954949},
  {lat: -15.908421108455688, lng: -47.83767931161492},
  {lat: -15.907925847074626, lng: -47.83750765023797},
  {lat: -15.907533764282626, lng: -47.83725015817254},

  {lat: -15.907494784690043, lng: -47.83693429088373},
  {lat: -15.907401922846141, lng: -47.83632274722834},
  {lat: -15.9073296969379, lng: -47.83576484775324},
  {lat: -15.907247153010996, lng: -47.83551808452387},
  {lat: -15.906720934680262, lng: -47.835593186376286},
  {lat: -15.906349485617564, lng: -47.83580776309748},
  {lat: -15.905957399751319, lng: -47.835893593785954},
  {lat: -15.905637539662528, lng: -47.835861407277775},
  {lat: -15.905235134311953, lng: -47.83575411891718},

  {lat: -15.905307361287521, lng: -47.8353893385065},
  {lat: -15.903646141527831, lng: -47.8344344720972},
  {lat: -15.901809497496874, lng: -47.83452030278568},
  {lat: -15.902180954946198, lng: -47.835046015752596},

  {lat: -15.90231279886138, lng: -47.83744327738532},
  {lat: -15.901033332264245, lng: -47.83748619272956},
  {lat: -15.899877678019147, lng: -47.83744327738532},
  {lat: -15.898144184201882, lng: -47.83757202341803},
  {lat: -15.896185960954542, lng: -47.83803936093136},
  {lat: -15.895997933379752, lng: -47.837271616008366},
  {lat: -15.895605827333025, lng: -47.83667080118903},
  {lat: -15.895936021949508, lng: -47.83568374827155},
  {lat: -15.895938314878295, lng: -47.83567901708011},

  {lat: -15.896121756183117, lng: -47.835125848141615},
  {lat: -15.896121756183117, lng: -47.835104390469496},
  {lat: -15.895275632174654, lng: -47.834868356076186},
  {lat: -15.894553328376551, lng: -47.83549062856764},
  {lat: -15.894264406131269, lng: -47.836348935452406},
  {lat: -15.893686560396151, lng: -47.836885377255385},
  {lat: -15.893356362088179, lng: -47.836370393124525},
  {lat: -15.892427676442146, lng: -47.83707849630446},
  {lat: -15.891274265627933, lng: -47.837578020898945},
  {lat: -15.890181615083051, lng: -47.838605623728654}
  

  ];

    // Construct the polygon.
  centerTypicalCerradoAreaPolygon = new google.maps.Polygon({
    paths: centerTypicalCerradoAreaPolygonCoords,
    strokeColor: '#22B373',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#22B373',
    fillOpacity: 0.50
  });

  centerTypicalCerradoAreaPolygon.setMap(map);
} 