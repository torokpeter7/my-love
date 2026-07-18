// ===== Editable settings =====
// Change this date to the real start of your relationship.
const START_DATE = new Date('2026-06-30T21:00:00');
// Put your own song here later.
const MUSIC_SRC = 'music/music.mp3';

// ===== Content lists =====
const loveReasons = [
  'Imádom a mosolyodat.',
  'Szeretem, hogy mindig mellettem állsz.',
  'Melletted önmagam lehetek.',
  'A hangod megnyugtat.',
  'A tekintetedben otthonra találok.',
  'Veled még a csend is szép.',
  'Minden napom jobb, amikor írsz.',
  'A humortól szebb lesz a világ körülötted.',
  'A közelséged biztonságot ad.',
  'Szeretem, ahogy ölelsz.',
  'Benned egyszerre van erő és gyengédség.',
  'A türelmed különleges ajándék.',
  'A figyelmességed mindent megédesít.',
  'Szeretem, amikor nevetünk együtt.',
  'A szemedben olyan fény van, amitől minden szebb.',
  'Minden apró gesztusod számít nekem.',
  'Te teszed különlegessé a hétköznapokat.',
  'A veled töltött idő sosem elég.',
  'Minden beszélgetésünk kincs.',
  'A jelenléted felemel.',
  'Szeretem, hogy ilyen kedves vagy.',
  'A mosolyod fertőzően szép.',
  'A figyelmedtől fontosnak érzem magam.',
  'Veled bátrabb vagyok.',
  'A közös emlékeink már most is drágák nekem.',
  'Melletted a világ puhábbnak tűnik.',
  'Az ölelésed a kedvenc helyem.',
  'Szeretem az őszinteségedet.',
  'A szíved gyönyörű.',
  'A hangulatod azonnal magával ragad.',
  'A gondolataid inspirálnak.',
  'Szeretem, hogy figyelsz a részletekre.',
  'A közös terveink miatt izgatott vagyok.',
  'Minden pillanat veled emlékké válik.',
  'Szeretem, hogy ennyire különleges vagy.',
  'A szereteted gyógyít.',
  'A te oldaladon minden egyszerűbb.',
  'Szeretem, hogy őszintén tudok nevetni melletted.',
  'A személyiséged ragyog.',
  'Te vagy az, akire mindig mosollyal gondolok.',
  'A közös csendjeink is szépek.',
  'Melletted a szívem nyugodtabb.',
  'Szeretem, hogy tudsz meglepetést okozni.',
  'Az energiád magával húz.',
  'A gyengédséged megérint.',
  'Minden nap új okot adsz a szeretetre.',
  'A közös jövő gondolata boldoggá tesz.',
  'Szeretem, hogy fontos vagy nekem.',
  'A nevetésed a kedvenc hangjaim egyike.',
  'A jelenléted mindent szebbé tesz.',
  'Melletted a világ szerethetőbb.',
  'Egyszerűen te vagy az én csodám.'
];

// A "src" mező az igazi fotótok elérési útja az images mappában.
// Ha üresen hagyod (''), a rendszer automatikusan egy díszített
// helyőrző képet rajzol helyette, hogy addig se legyen üres a galéria.
const galleryItems = [
  { title: 'Első közös pillanat', alt: 'Első közös emlék', src: 'images/kep1.jpg' },
  { title: 'Mosolyok', alt: 'Mosolygós közös fotó', src: 'images/kep2.jpg' },
  { title: 'Egy szép este', alt: 'Romantikus este', src: 'images/kep3.jpg' },
  { title: 'Csók', alt: 'Ölelős fotó', src: 'images/kep4.jpg' },
  { title: 'Közös kaland', alt: 'Közös kaland', src: 'images/kep5.jpg' },
  { title: 'Szerelmes emlék', alt: 'Szerelmes emlék', src: 'images/kep6.jpg' }
];

const timelineItems = [
  { title: 'Megismerkedtünk', text: 'Itt kezdődött minden, amikor két külön világ finoman összeért.' },
  { title: 'Első találkozás', text: 'Az a pillanat, amikor a mosolyod máris otthonossá tette a napot.' },
  { title: 'Első randi', text: 'Egy emlék, amihez mindig vissza lehet sétálni gondolatban.' },
  { title: 'Első hónapunk', text: 'És ez csak az eleje annak a szép történetnek, amit együtt írunk.' }
];

// ===== Helpers =====
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function pad(value) {
  return String(value).padStart(2, '0');
}

function createPlaceholderDataUri(title, subtitle, index) {
  const hue = (330 + index * 19) % 360;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="hsl(${hue} 80% 68%)" />
          <stop offset="52%" stop-color="hsl(${(hue + 25) % 360} 58% 30%)" />
          <stop offset="100%" stop-color="hsl(${(hue + 55) % 360} 50% 18%)" />
        </linearGradient>
        <radialGradient id="r" cx="30%" cy="20%" r="90%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.38)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#g)" />
      <circle cx="280" cy="160" r="250" fill="url(#r)" />
      <circle cx="930" cy="220" r="170" fill="rgba(255,255,255,0.08)" />
      <circle cx="1000" cy="700" r="210" fill="rgba(255,255,255,0.06)" />
      <text x="80" y="690" fill="#fff" font-size="72" font-family="Montserrat, Arial, sans-serif" font-weight="700">${title}</text>
      <text x="80" y="770" fill="rgba(255,255,255,0.84)" font-size="34" font-family="Montserrat, Arial, sans-serif">${subtitle}</text>
      <text x="80" y="830" fill="rgba(255,255,255,0.52)" font-size="24" font-family="Montserrat, Arial, sans-serif">Cseréld le ezt a képet saját fotóra az images mappában.</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createSparkleLayer(parent, count, className) {
  for (let index = 0; index < count; index += 1) {
    const spark = document.createElement('span');
    spark.className = className;
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.animationDelay = `${Math.random() * 6}s`;
    spark.style.animationDuration = `${3 + Math.random() * 4}s`;
    parent.appendChild(spark);
  }
}

function spawnParticle(container, className, text, options = {}) {
  const particle = document.createElement('span');
  particle.className = className;
  particle.textContent = text;
  particle.style.left = `${options.x ?? Math.random() * 100}%`;
  particle.style.top = options.top ?? `${options.y ?? -10}vh`;
  particle.style.fontSize = options.size ?? `${1 + Math.random() * 1.2}rem`;
  particle.style.opacity = options.opacity ?? '1';
  particle.style.setProperty('--drift', `${(Math.random() * 40 - 20).toFixed(0)}px`);
  particle.style.animationDuration = options.duration ?? `${8 + Math.random() * 10}s`;
  container.appendChild(particle);
  window.setTimeout(() => particle.remove(), 20000);
}

function createMouseHeart(x, y) {
  const mouseLayer = $('#mouse-hearts');
  const heart = document.createElement('span');
  heart.className = 'mouse-heart';
  heart.textContent = '❤️';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  mouseLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), 1100);
}

function createConfettiBurst(x, y) {
  const colors = ['#ff6f91', '#ffd166', '#ffffff', '#ffb3c7'];
  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'sparkle';
    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
    piece.style.background = colors[index % colors.length];
    piece.style.width = `${3 + Math.random() * 5}px`;
    piece.style.height = piece.style.width;
    piece.style.animationDuration = `${1.8 + Math.random() * 1.8}s`;
    piece.style.transform = `translate(${Math.random() * 180 - 90}px, ${Math.random() * 160 - 80}px) scale(${0.8 + Math.random() * 0.8})`;
    $('#sparkles').appendChild(piece);
    window.setTimeout(() => piece.remove(), 2800);
  }
}

function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now.getTime() - START_DATE.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  $('#days').textContent = String(days);
  $('#hours').textContent = pad(hours);
  $('#minutes').textContent = pad(minutes);
  $('#seconds').textContent = pad(seconds);
}

function runTypewriter() {
  const target = $('#typewriter');
  const text = 'Ez a kis weboldal csak Neked készült...';
  let index = 0;
  target.textContent = '';

  const timer = window.setInterval(() => {
    target.textContent = text.slice(0, index + 1);
    index += 1;
    if (index >= text.length) {
      window.clearInterval(timer);
    }
  }, 52);
}

function setupScrollReveal() {
  const revealElements = $$('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealElements.forEach((element) => observer.observe(element));
}

function buildTimeline() {
  // The timeline content is in the HTML by design for easy editing.
  // This function only enhances the current items if needed later.
  return timelineItems;
}

function buildGallery() {
  const grid = $('#gallery-grid');
  const template = $('#gallery-template');
  grid.innerHTML = '';

  galleryItems.forEach((item, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const img = $('img', node);
    const title = $('.gallery-title', node);
    const subtitle = $('.gallery-subtitle', node);
    const trigger = $('.gallery-trigger', node);

    const placeholder = createPlaceholderDataUri(item.title, item.subtitle, index + 1);
    const realSource = item.src && item.src.trim() ? item.src.trim() : '';
    let currentSource = realSource || placeholder;

    img.src = currentSource;
    img.alt = item.alt;
    title.textContent = item.title;
    subtitle.textContent = item.subtitle;

    // Ha a megadott fájl (még) nem létezik, automatikusan a helyőrzőre vált,
    // hogy a galéria sose törjön el egy hiányzó kép miatt.
    img.addEventListener('error', () => {
      if (currentSource !== placeholder) {
        currentSource = placeholder;
        img.src = placeholder;
      }
    });

    trigger.addEventListener('click', () => openLightbox(currentSource, item.title));
    grid.appendChild(node);
  });
}

function buildReasons() {
  const grid = $('#reasons-grid');
  const template = $('#reason-template');
  grid.innerHTML = '';

  loveReasons.forEach((reason, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const number = $('.reason-number', node);
    const back = $('.reason-back p', node);

    number.textContent = `❤️ ${index + 1}`;
    back.textContent = reason;

    node.addEventListener('click', () => {
      node.classList.toggle('is-flipped');
    });

    grid.appendChild(node);
  });
}

function openLightbox(src, caption) {
  const lightbox = $('#lightbox');
  const image = $('#lightbox-image');
  const captionNode = $('#lightbox-caption');
  image.src = src;
  captionNode.textContent = caption;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const lightbox = $('#lightbox');
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function setupLightbox() {
  $('#lightbox-close').addEventListener('click', closeLightbox);
  $('#lightbox').addEventListener('click', (event) => {
    if (event.target.id === 'lightbox') {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
}

function setupEnvelope() {
  const envelope = $('#envelope');
  envelope.addEventListener('click', () => {
    const isOpen = envelope.classList.toggle('is-open');
    envelope.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      createConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.7);
    }
  });
}

function setupIntro() {
  const intro = $('#intro-screen');
  const openButton = $('#open-heart');
  const appShell = $('#app-shell');

  openButton.addEventListener('click', () => {
    intro.classList.add('is-out');
    appShell.classList.remove('is-hidden');
    window.setTimeout(() => intro.remove(), 900);

    // Start background motion once the welcome screen is gone.
    startAmbientEffects();
    runTypewriter();

    // A gombnyomás "user interakciónak" számít, így itt már
    // elindítható a zene automatikusan, a böngésző nem blokkolja.
    const audio = $('#background-music');
    const musicButton = $('#music-toggle');
    audio.play()
      .then(() => { musicButton.textContent = '❚❚ A mi dalunk'; })
      .catch(() => {
        // Ha mégis blokkolná a böngésző, marad a kézi gomb megoldás.
        musicButton.textContent = '▶ A mi dalunk';
      });
  });
}

function setupParallax() {
  const parallaxNodes = $$('[data-parallax]');

  document.addEventListener('mousemove', (event) => {
    const { innerWidth, innerHeight } = window;
    const x = event.clientX / innerWidth - 0.5;
    const y = event.clientY / innerHeight - 0.5;

    parallaxNodes.forEach((node, index) => {
      const depth = (index + 1) * 10;
      node.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });

    if (Math.random() > 0.9) {
      createMouseHeart(event.clientX, event.clientY);
    }
  }, { passive: true });
}

function startAmbientEffects() {
  const heartsLayer = $('#floating-hearts');
  const petalsLayer = $('#floating-petals');
  const sparklesLayer = $('#sparkles');

  if (!heartsLayer.dataset.started) {
    heartsLayer.dataset.started = 'true';
    petalsLayer.dataset.started = 'true';
    sparklesLayer.dataset.started = 'true';

    window.setInterval(() => spawnParticle(heartsLayer, 'float-heart', '❤️', { duration: `${8 + Math.random() * 6}s` }), 900);
    window.setInterval(() => spawnParticle(petalsLayer, 'float-petal', '', { duration: `${10 + Math.random() * 5}s`, size: '1rem' }), 1200);
    createSparkleLayer(sparklesLayer, 30, 'sparkle');

    window.setInterval(() => {
      if (Math.random() > 0.7) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.3;
        createMouseHeart(x, y);
      }
    }, 3000);
  }
}

function setupMusic() {
  const audio = $('#background-music');
  const button = $('#music-toggle');
  audio.src = MUSIC_SRC;
  audio.loop = true;

  const setButtonLabel = () => {
    button.textContent = audio.paused ? '▶ A mi dalunk' : '❚❚ A mi dalunk';
  };

  button.addEventListener('click', async () => {
    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
      setButtonLabel();
    } catch (error) {
      button.textContent = 'Töltsd fel a zenét';
      button.title = 'Helyezd el a zenefájlt a music mappában, majd nevezd át a scriptben.';
    }
  });

  audio.addEventListener('error', () => {
    button.textContent = 'Töltsd fel a zenét';
  });
}

function init() {
  buildTimeline();
  buildGallery();
  buildReasons();
  setupLightbox();
  setupEnvelope();
  setupIntro();
  setupParallax();
  setupScrollReveal();
  setupMusic();
  updateCounter();
  window.setInterval(updateCounter, 1000);

  // Keep a subtle background sparkle on load, even before opening.
  createSparkleLayer($('#sparkles'), 18, 'sparkle');
}

document.addEventListener('DOMContentLoaded', init);
