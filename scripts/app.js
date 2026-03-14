import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js';

const page = document.body.dataset.page;
const data = window.THANKS_DATA || {};

function createEmptyState(message) {
  const block = document.createElement('div');
  block.className = 'empty-state';
  block.textContent = message;
  return block;
}

function setupLightbox(gallerySelector, itemSelector = 'a') {
  const lightbox = new PhotoSwipeLightbox({
    gallery: gallerySelector,
    children: itemSelector,
    pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js'),
    bgOpacity: 0.9,
    showHideAnimationType: 'zoom'
  });
  lightbox.init();
  return lightbox;
}

function buildLinkItem(item, className) {
  const link = document.createElement('a');
  link.className = className;
  link.href = item.src;
  link.dataset.pswpWidth = String(item.width);
  link.dataset.pswpHeight = String(item.height);
  link.target = '_blank';
  link.rel = 'noreferrer';

  const image = document.createElement('img');
  image.src = item.thumb;
  image.alt = item.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  link.append(image);
  return link;
}

function initMessages() {
  const root = document.getElementById('messages-gallery');
  const items = data.messages || [];

  if (!items.length) {
    root.append(createEmptyState('寄せ書き画像がまだありません。追加したらここに表示されます。'));
    return;
  }

  items.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'message-item';
    article.append(buildLinkItem(item, 'message-link'));
    root.append(article);
  });

  setupLightbox('#messages-gallery');
}

function initCards() {
  const root = document.getElementById('cards-slider');
  const items = data.cards || [];

  if (!items.length) {
    root.append(createEmptyState('カード画像がまだありません。追加したらここに表示されます。'));
    return;
  }

  const track = document.createElement('div');
  track.className = 'card-track';

  items.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'card-frame';

    const link = buildLinkItem(item, 'card-link');
    link.setAttribute('aria-label', `${item.alt}を拡大表示`);

    const meta = document.createElement('div');
    meta.className = 'card-meta';

    const title = document.createElement('p');
    title.className = 'card-title';
    title.textContent = item.alt;

    const open = document.createElement('span');
    open.className = 'open-button';
    open.textContent = '拡大する';

    meta.append(title, open);
    article.append(link, meta);
    track.append(article);
  });

  root.append(track);
  setupLightbox('#cards-slider');
}

function initAlbum() {
  const root = document.getElementById('album-grid');
  const items = data.photos || [];

  if (!items.length) {
    root.append(createEmptyState('思い出写真がまだありません。追加したらここに表示されます。'));
    return;
  }

  items.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'album-item';
    article.append(buildLinkItem(item, 'album-link'));
    root.append(article);
  });

  setupLightbox('#album-grid');
}

if (page === 'messages') {
  initMessages();
} else if (page === 'cards') {
  initCards();
} else if (page === 'album') {
  initAlbum();
}
