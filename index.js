const map = L.map("map").setView([51.505, -0.09], 13);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const LOC_ANTANANARIVO = [-18.919249629353583, 47.52617012828017];
const LOC_TULEAR = [-23.351943768466583, 43.68868176333672];
const LOC_MANGILY = [-23.12584481777576, 43.620860489112886];
const LOC_ISALO_NATL_PARK = [-22.465395757885506, 45.26169579546408];
const LOC_RANOHIRA = [-22.55576459915522, 45.41954776998675];
const LOC_RANOMAFANA_NP = [-21.26386106179047, 47.41934532595108];
const LOC_ANTISIRABE = [-19.873214455440465, 47.02989507428159];
const LOC_MORONDAVA = [-20.29061588170421, 44.29897778336358];
const LOC_BEKOPAKA = [-19.145836909914383, 44.79235553302438];
const LOC_TSINGY = [-18.919681359130212, 44.794369652660876];
const LOC_KIRINDY = [-20.948877143407834, 44.217053194901105];
const LOC_BAOBAB_AVE = [-20.250249570636498, 44.419759370290755];
const LOC_SAMBAVA = [-14.259582354539095, 50.15449300393468];
const LOC_MAROJEJY = [-14.434864914198055, 49.70616474136767];
const LOC_DARAINA = [-13.20390180435766, 49.6618080204532];
const LOC_AMBANJA = [-13.663440400285216, 48.453569822775044];
const LOC_NOSY_BE = [-13.314984795791535, 48.256273633395374];

// create a red polyline from an array of LatLng points
// TODO: Draw gently curved lines?
// https://stackoverflow.com/questions/53502953/how-to-make-curved-line-for-2-points-in-leaflet
var latlngs = [
  LOC_ANTANANARIVO,
  LOC_TULEAR,
  LOC_MANGILY,
  LOC_ISALO_NATL_PARK,
  LOC_RANOHIRA,
  LOC_RANOMAFANA_NP,
  LOC_ANTISIRABE,
  LOC_MORONDAVA,
  LOC_ANTANANARIVO,
  LOC_BEKOPAKA,
  LOC_TSINGY,
  LOC_KIRINDY,
  LOC_BAOBAB_AVE,
  LOC_SAMBAVA,
  LOC_MAROJEJY,
  LOC_DARAINA,
  LOC_AMBANJA,
  LOC_NOSY_BE,
  LOC_ANTANANARIVO,
];

var polylineDrive = L.polyline(latlngs, { color: "red" }).addTo(map);
// var polylineFlights = L.polyline(latlngs, { color: "orange" }).addTo(map);

// zoom the map to the polyline
map.fitBounds(polylineDrive.getBounds());
