const decks = {
  beszeljunk: { name:'Beszéljünk róla', emoji:'💬', cards:[
    "Mi az, amiről szerinted többet kellene beszélnünk?",
    "Mikor érzed azt, hogy igazán figyelek rád?",
    "Van valami, amit mostanában nehezen tudsz elmondani nekem?",
    "Mi az, amit szeretnél, hogy jobban megértsek benned?",
    "Mikor érzed azt, hogy nem figyelek rád eléggé?",
    "Van olyan dolog, amit gyakran félreértek veled kapcsolatban?",
    "Mi az, amiről szeretnél, ha gyakrabban kérdeznélek?",
    "Mit jelent számodra az, hogy „jó társ” vagy „jó pár” vagyunk?",
    "Van olyan érzésed, amit nehéz velem megosztani?",
    "Mi az, amit szerinted sokszor kimondatlanul hagyunk?",
    "Milyen helyzetekben érzed magad igazán biztonságban mellettem?",
    "Mi az, amit szeretnél, hogy többször mondjak neked?",
    "Mi az, amit szerinted túl sokszor feltételezek rólad?",
    "Miben szeretnéd, hogy jobban megismerjelek?",
    "Ha most egyetlen dolgot mondhatnál nekem őszintén, amit fontosnak tartasz, mi lenne az?"
  ]},
  rolunk: { name:'Rólunk', emoji:'❤️', cards:[
    "Mi volt az egyik első dolog, ami igazán megtetszett bennem?",
    "Melyik közös emlékünket élnéd át újra?",
    "Mikor érezted először, hogy különleges vagyok számodra?",
    "Mi az, amit a legjobban szeretsz bennünk?",
    "Mi az, amiben szerinted jól működünk együtt?",
    "Melyik közös szokásunkat szereted?",
    "Mi az a pillanat, amikor büszke voltál ránk?",
    "Mit gondolsz, miben változtunk a kapcsolatunk során?",
    "Mi az, amit csak velem tudsz igazán megélni?",
    "Melyik közös helyünkhöz kötődik számodra különleges emlék?",
    "Mi az, amit soha nem szeretnél elveszíteni a kapcsolatunkból?",
    "Mi az, amit szerinted együtt jobban csinálunk, mint külön-külön?",
    "Mi volt a legromantikusabb pillanatunk?",
    "Ha egy filmet készítenénk a kapcsolatunkról, mi lenne a címe?",
    "Miért vagy hálás a kapcsolatunkban?"
  ]},
  oszinteseg: { name:'Őszinteség', emoji:'🪞', cards:[
    "Van valami, amitől félsz a kapcsolatunkkal kapcsolatban?",
    "Mi az, amiben néha bizonytalan vagy mellettem?",
    "Van olyan tulajdonságom, ami néha nehéz számodra?",
    "Mikor érzed magad magányosnak mellettem?",
    "Volt olyan alkalom, amikor megbántottalak, de nem vettem észre?",
    "Mi az, amit szeretnél, hogy megváltoztassak?",
    "Mi az, amit te szeretnél megváltoztatni magadban a kapcsolatunk miatt?",
    "Van olyan dolog, amit megbántál a kapcsolatunkban?",
    "Mitől félsz leginkább, hogy egyszer elveszíthetünk?",
    "Mikor érzed azt, hogy nem vagyok melletted eléggé?",
    "Van olyan korábbi vitánk, ami még mindig benned maradt?",
    "Mi az, amit néha inkább magadban tartasz, mint hogy elmondj nekem?",
    "Mi az, amiben szerinted nem értjük egymást?",
    "Van olyan szükségleted, amit szerinted nem veszek észre?",
    "Ha semmilyen következménytől nem kellene tartanod, mit mondanál most nekem?"
  ]},
  konfliktus: { name:'Konfliktus', emoji:'🩹', cards:[
    "Mi bánt a legjobban egy veszekedés során?",
    "Mit csinálok vita közben, amitől még rosszabbul érzed magad?",
    "Mit szeretnél, hogyan kezeljem, amikor mérges vagy?",
    "Mit csinálhatnál te másképp egy konfliktus során?",
    "Mit jelent számodra az őszinte bocsánatkérés?",
    "Mi az, amit egy vita után szükséged van tőlem?",
    "Inkább időre van szükséged egy vita után, vagy arra, hogy azonnal beszéljünk róla?",
    "Mi az a mondat, amit soha nem szeretnél hallani tőlem egy vita során?",
    "Mi segít neked abban, hogy megnyugodj?",
    "Mi az, amit szerinted mindketten rosszul csinálunk konfliktushelyzetben?",
    "Melyik korábbi konfliktusunkból tanultunk a legtöbbet?",
    "Mit jelent számodra az, hogy „elengedni” egy problémát?",
    "Mi az, amit szeretnél, hogy egy veszekedés után mindig megtegyünk?",
    "Hogyan tudnám jobban megmutatni, hogy nem ellened vagyok?",
    "Mi lenne az az egy szabály, amit bevezetnél a vitáinkra?"
  ]},
  kozelebb: { name:'Közelebb', emoji:'🫶', cards:[
    "Mitől érzed magad igazán szeretve?",
    "Mi az a kis gesztus, ami neked sokat jelent?",
    "Mikor érzed magad hozzám a legközelebb?",
    "Milyen közös programtól érzed azt, hogy igazán együtt vagyunk?",
    "Milyen ölelés esik neked a legjobban?",
    "Mi az, amit szeretnél gyakrabban csinálni kettesben?",
    "Mi az a romantikus dolog, amire régóta vágysz?",
    "Mi az, amitől különlegesnek érzed magad mellettem?",
    "Mi az a közös pillanat, amitől mindig mosolyogsz?",
    "Milyen lenne számodra a tökéletes közös este?",
    "Mi az, amit szeretnél, hogy gyakrabban kezdeményezzek?",
    "Mi az a szeretetnyelv, amit szerinted a legjobban értek?",
    "Mitől tudod egy nehéz napon, hogy melletted állok?",
    "Ha most elmehetnénk bárhová kettesben, hová mennél?",
    "Adj a másiknak egy őszinte bókot, amit ritkán mondasz ki."
  ]},
  jovonk: { name:'Jövőnk', emoji:'🌱', cards:[
    "Milyen kapcsolatot szeretnél, hogy egy év múlva legyen köztünk?",
    "Mi az az álom, amit szeretnél velem megvalósítani?",
    "Milyen közös utazásra mennél el velem?",
    "Milyen lenne számodra az ideális közös otthon?",
    "Mi az, amit szeretnél, hogy közösen megtanuljunk?",
    "Milyen közös hagyományt alakítanál ki?",
    "Mi az, amit mindenképpen szeretnél egyszer együtt átélni?",
    "Milyen lenne számodra egy tökéletes közös hétvége?",
    "Mit szeretnél, hogy mindig megőrizzünk a kapcsolatunkból?",
    "Miben szeretnél fejlődni mellettem?",
    "Mi az, amit szeretnél, hogy öt év múlva is ugyanúgy csináljunk?",
    "Milyen közös célt tűznél ki nekünk?",
    "Mi lenne az álomrandink?",
    "Ha bármit megengedhetnénk magunknak, milyen életet építenénk együtt?",
    "Mi az az egy dolog, amit már most megtehetnénk a kapcsolatunkért?"
  ]},
  extra: { name:'Extra', emoji:'⭐', cards:[
    "„MOST TE JÖSSZ” — Válassz egy kérdést a pakliból a másiknak.",
    "„ÖLELÉS” — Ne beszéljetek. Öleljétek meg egymást legalább 20 másodpercig.",
    "„CSAK RÁD FIGYELEK” — Nézzetek egymás szemébe 30 másodpercig.",
    "„ÜZENET” — Mondj a másiknak valamit, amit szeretnél, hogy később is emlékezzen rá.",
    "„CSERE” — A következő kérdésre először a másik válaszol.",
    "„HÁLA” — Mondj három dolgot, amiért hálás vagy a másiknak.",
    "„MEGÉRTÉS” — A másik válaszát foglald össze saját szavaiddal.",
    "„MI LENNE, HA…” — Találjatok ki egy közös „Mi lenne, ha...” kérdést.",
    "„KÖZELEBB” — Adj a másiknak egy puszit, ölelést vagy más, mindkettőtök számára komfortos szeretetgesztust.",
    "„MOST MONDD KI” — Mondj ki valamit, amit már régóta szeretnél elmondani."
  ]}
};

// combined virtual deck: every card from every category, mixed together
const allSourceKeys = Object.keys(decks);
const allCards = allSourceKeys.flatMap(key =>
  decks[key].cards.map((c,i) => ({ text:c, cat:decks[key].name, catEmoji:decks[key].emoji, idx:i+1, total:decks[key].cards.length }))
);
decks.all = { name:'Összes pakli', emoji:'🎲', cards: allCards, mixed:true };

let deckKey = 'all';
let queues = {};
let turn = 1;

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function newQueue(key){
  const deck = decks[key];
  if(deck.mixed){
    queues[key] = shuffle(deck.cards);
  } else {
    queues[key] = shuffle(deck.cards.map((c,i)=>({text:c,idx:i+1})));
  }
}
Object.keys(decks).forEach(newQueue);

const decksEl = document.getElementById('decks');
const orderedKeys = ['all', ...allSourceKeys];
orderedKeys.forEach(key=>{
  const b = document.createElement('button');
  b.className = 'deck-btn' + (key===deckKey ? ' active' : '');
  b.textContent = decks[key].emoji + ' ' + decks[key].name;
  b.onclick = () => { deckKey = key; refreshFront(); updateProgress(); document.querySelectorAll('.deck-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); document.getElementById('card').classList.remove('flipped'); };
  decksEl.appendChild(b);
});

const cardEl = document.getElementById('card');
const frontEmoji = document.getElementById('frontEmoji');
const frontName = document.getElementById('frontName');
const backCat = document.getElementById('backCat');
const backNum = document.getElementById('backNum');
const backText = document.getElementById('backText');
const progressEl = document.getElementById('progress');
const turnEl = document.getElementById('turn');

function refreshFront(){
  frontEmoji.textContent = decks[deckKey].emoji;
  frontName.textContent = decks[deckKey].name;
}
function updateProgress(){
  const total = decks[deckKey].cards.length;
  const left = queues[deckKey].length;
  const label = decks[deckKey].mixed ? 'lap húzva összesen' : 'lap húzva ebből a pakliból';
  progressEl.textContent = `${total-left}/${total} ${label}`;
}
function updateTurn(){
  turnEl.textContent = turn===1 ? '1. játékos húz' : '2. játékos húz';
}
refreshFront(); updateProgress(); updateTurn();

document.getElementById('drawBtn').onclick = () => {
  if(queues[deckKey].length === 0) newQueue(deckKey);
  const drawn = queues[deckKey].pop();
  if(decks[deckKey].mixed){
    backCat.textContent = `${drawn.catEmoji} ${drawn.cat}`;
    backNum.textContent = `${drawn.idx} / ${drawn.total}`;
  } else {
    backCat.textContent = '';
    backNum.textContent = `${drawn.idx} / ${decks[deckKey].cards.length}`;
  }
  backText.textContent = drawn.text;
  cardEl.classList.add('flipped');
  updateProgress();
  turn = turn===1 ? 2 : 1;
  updateTurn();
};

cardEl.onclick = () => { cardEl.classList.toggle('flipped'); };

document.getElementById('shuffleBtn').onclick = () => {
  newQueue(deckKey);
  updateProgress();
  cardEl.classList.remove('flipped');
};
