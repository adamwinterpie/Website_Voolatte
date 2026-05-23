const translations = {
  id: {
    pageTitle: "Voolatte - Koleksi Squishy",
    navLabel: "Navigasi utama",
    languageLabel: "Pilihan bahasa",
    heroDescription: "Voolatte adalah koleksi squishy yang menampilkan berbagai squishy lucu, empuk, dan menggemaskan dengan tampilan pastel dan nyaman dilihat. Voolatte dibuat sebagai tempat untuk memperlihatkan koleksi squishy, mulai dari karakter lucu, hewan imut, hingga squishy bertema makanan dengan desain yang sederhana, modern, dan responsif.",
    heroButton: "Lihat Koleksi",
    galleryTitle: "Koleksi Voolatte",
    searchLabel: "Cari koleksi squishy",
    searchPlaceholder: "Cari squishy...",
    emptyState: "Squishy tidak ditemukan.",
    backButton: "Kembali ke Koleksi",
    cardAria: "Lihat detail",
    previousMedia: "Media sebelumnya",
    nextMedia: "Media berikutnya",
    imageAlt: "Foto"
  },
  en: {
    pageTitle: "Voolatte - Squishy Collection",
    navLabel: "Main navigation",
    languageLabel: "Language options",
    heroDescription: "Voolatte is a squishy collection that presents cute, soft, and adorable squishies with a pastel look that feels pleasant to view. Voolatte was created as a place to showcase squishy collections, from cute characters and sweet animals to food-themed squishies with a simple, modern, and responsive design.",
    heroButton: "View Collection",
    galleryTitle: "Voolatte Collection",
    searchLabel: "Search squishy collection",
    searchPlaceholder: "Search squishy...",
    emptyState: "Squishy not found.",
    backButton: "Back to Collection",
    cardAria: "View details for",
    previousMedia: "Previous media",
    nextMedia: "Next media",
    imageAlt: "Photo of"
  },
  zh: {
    pageTitle: "Voolatte - 软软玩具收藏",
    navLabel: "主导航",
    languageLabel: "语言选项",
    heroDescription: "Voolatte 是一个软软玩具收藏展示网站，收集了可爱、柔软又治愈的 squishy，整体视觉采用柔和的粉彩风格，清新又舒适。Voolatte 用来展示各种可爱的角色、小动物和食物主题 squishy，页面设计简单、现代，并且适合手机浏览。",
    heroButton: "查看收藏",
    galleryTitle: "Voolatte 收藏",
    searchLabel: "搜索软软玩具收藏",
    searchPlaceholder: "搜索 squishy...",
    emptyState: "没有找到 Squishy。",
    backButton: "返回收藏",
    cardAria: "查看详情",
    previousMedia: "上一个媒体",
    nextMedia: "下一个媒体",
    imageAlt: "照片"
  }
};

let currentLanguage = localStorage.getItem("voolatteLanguage") || "id";
let activeDetailIndex = null;
const activeMediaIndexes = {};
const starterMedia = [
  { type: "image", src: "images/squishy-a.png" },
  { type: "image", src: "images/squishy-b.png" },
  { type: "image", src: "images/squishy-c.png" }
];

if (!translations[currentLanguage]) {
  currentLanguage = "id";
}

// Data dummy disimpan di JavaScript agar mudah diganti dengan data asli.
// Tambahkan beberapa gambar/video dengan format media: [{ type: "image", src: "images/file.png" }, { type: "video", src: "videos/file.mp4" }].
const squishyList = [
  {
    name: "Squishy A",
    description: {
      id: "Squishy A memiliki tampilan lucu dengan warna lembut yang cocok untuk koleksi pastel Voolatte.",
      en: "Squishy A has a cute look with soft colors that fit perfectly into Voolatte's pastel collection.",
      zh: "Squishy A 外形可爱，颜色柔和，非常适合 Voolatte 的粉彩收藏。"
    },
    color: "#ffe2c8",
    icon: "A",
    image: "images/squishy-a.png"
  },
  {
    name: "Squishy B",
    description: {
      id: "Squishy B terlihat empuk dan menggemaskan, cocok menjadi koleksi favorit untuk pajangan meja.",
      en: "Squishy B looks soft and adorable, making it a sweet favorite for a desk display.",
      zh: "Squishy B 看起来柔软又可爱，很适合作为桌面展示的收藏。"
    },
    color: "#d8ecff",
    icon: "B",
    image: "images/squishy-b.png"
  },
  {
    name: "Squishy C",
    description: {
      id: "Squishy C punya desain sederhana dan manis, dengan nuansa lembut yang nyaman dilihat.",
      en: "Squishy C has a simple and sweet design with a soft tone that feels easy on the eyes.",
      zh: "Squishy C 设计简单甜美，柔和的氛围让人看起来很舒服。"
    },
    color: "#ffd6e7",
    icon: "C",
    image: "images/squishy-c.png"
  },
  {
    name: "Squishy D",
    description: {
      id: "Squishy D memiliki warna pastel lembut dengan bentuk lucu untuk melengkapi koleksi Voolatte.",
      en: "Squishy D has gentle pastel colors and a cute shape to complete the Voolatte collection.",
      zh: "Squishy D 拥有柔和的粉彩颜色和可爱的造型，为 Voolatte 收藏增添完整感。"
    },
    color: "#e8dcff",
    icon: "D"
  },
  {
    name: "Squishy E",
    description: {
      id: "Squishy E tampil manis dan empuk dengan nuansa creamy yang nyaman dilihat.",
      en: "Squishy E looks sweet and soft with a creamy tone that feels pleasant to view.",
      zh: "Squishy E 看起来甜美又柔软，奶油般的色调非常舒服。"
    },
    color: "#fff2c9",
    icon: "E"
  },
  {
    name: "Squishy F",
    description: {
      id: "Squishy F cocok untuk koleksi meja dengan tampilan sederhana, cerah, dan menggemaskan.",
      en: "Squishy F is great for a desk collection with its simple, bright, and adorable look.",
      zh: "Squishy F 外观简单明亮又可爱，很适合放在桌面收藏中。"
    },
    color: "#c9f4df",
    icon: "F"
  },
  {
    name: "Squishy G",
    description: {
      id: "Squishy G membawa sentuhan soft pastel yang membuat galeri Voolatte terasa lebih ramai.",
      en: "Squishy G adds a soft pastel touch that makes the Voolatte gallery feel more lively.",
      zh: "Squishy G 带来柔和的粉彩感觉，让 Voolatte 画廊更有活力。"
    },
    color: "#d8ecff",
    icon: "G"
  },
  {
    name: "Squishy H",
    description: {
      id: "Squishy H punya karakter lembut dengan warna peach yang hangat dan cozy.",
      en: "Squishy H has a gentle character with a warm and cozy peach color.",
      zh: "Squishy H 个性温柔，带有温暖舒适的蜜桃色。"
    },
    color: "#ffe2c8",
    icon: "H"
  },
  {
    name: "Squishy I",
    description: {
      id: "Squishy I terlihat imut dengan gaya minimalis yang cocok untuk koleksi pastel.",
      en: "Squishy I looks cute with a minimalist style that suits a pastel collection.",
      zh: "Squishy I 看起来很可爱，简约风格很适合粉彩收藏。"
    },
    color: "#ffd6e7",
    icon: "I"
  },
  {
    name: "Squishy J",
    description: {
      id: "Squishy J menambahkan variasi warna lembut dan tampilan lucu di koleksi Voolatte.",
      en: "Squishy J adds soft color variety and a cute look to the Voolatte collection.",
      zh: "Squishy J 为 Voolatte 收藏增添柔和的颜色变化和可爱的外观。"
    },
    color: "#e8dcff",
    icon: "J"
  },
  {
    name: "Squishy K",
    description: {
      id: "Squishy K terasa manis dengan desain sederhana dan nuansa strawberry milk.",
      en: "Squishy K feels sweet with a simple design and a strawberry milk mood.",
      zh: "Squishy K 设计简单甜美，带有草莓牛奶般的柔软氛围。"
    },
    color: "#fff2c9",
    icon: "K"
  },
  {
    name: "Squishy L",
    description: {
      id: "Squishy L hadir dengan kesan empuk, ringan, dan cocok untuk pajangan koleksi.",
      en: "Squishy L brings a soft, light feel that works well as a collection display.",
      zh: "Squishy L 给人柔软轻盈的感觉，很适合作为收藏展示。"
    },
    color: "#c9f4df",
    icon: "L"
  },
  {
    name: "Squishy M",
    description: {
      id: "Squishy M memiliki tampilan soft yang membuat koleksi terlihat semakin dreamy.",
      en: "Squishy M has a soft appearance that makes the collection feel even dreamier.",
      zh: "Squishy M 外观柔和，让整个收藏看起来更加梦幻。"
    },
    color: "#d8ecff",
    icon: "M"
  },
  {
    name: "Squishy N",
    description: {
      id: "Squishy N tampil kalem dengan warna pastel yang elegan dan tidak terlalu ramai.",
      en: "Squishy N looks calm with elegant pastel colors that are not too busy.",
      zh: "Squishy N 看起来安静温柔，优雅的粉彩颜色不会显得杂乱。"
    },
    color: "#ffe2c8",
    icon: "N"
  },
  {
    name: "Squishy O",
    description: {
      id: "Squishy O membawa suasana cute gallery dengan bentuk sederhana dan lembut.",
      en: "Squishy O brings a cute gallery feel with a simple and gentle shape.",
      zh: "Squishy O 以简单柔和的造型带来可爱画廊的感觉。"
    },
    color: "#ffd6e7",
    icon: "O"
  },
  {
    name: "Squishy P",
    description: {
      id: "Squishy P cocok untuk melengkapi koleksi squishy lucu bertema pastel.",
      en: "Squishy P is a good fit for completing a cute pastel-themed squishy collection.",
      zh: "Squishy P 很适合补充可爱的粉彩主题 squishy 收藏。"
    },
    color: "#e8dcff",
    icon: "P"
  },
  {
    name: "Squishy Q",
    description: {
      id: "Squishy Q punya nuansa creamy yang nyaman dan tampilan yang mudah disukai.",
      en: "Squishy Q has a cozy creamy tone and a look that is easy to love.",
      zh: "Squishy Q 有舒适的奶油色调，外观很容易让人喜欢。"
    },
    color: "#fff2c9",
    icon: "Q"
  },
  {
    name: "Squishy R",
    description: {
      id: "Squishy R menambah pilihan koleksi dengan warna lembut dan gaya cozy.",
      en: "Squishy R adds another collection option with soft colors and a cozy style.",
      zh: "Squishy R 用柔和颜色和舒适风格，为收藏增加更多选择。"
    },
    color: "#c9f4df",
    icon: "R"
  },
  {
    name: "Squishy S",
    description: {
      id: "Squishy S terlihat cerah, imut, dan cocok menjadi bagian dari galeri Voolatte.",
      en: "Squishy S looks bright and cute, making it a fitting part of the Voolatte gallery.",
      zh: "Squishy S 明亮又可爱，很适合成为 Voolatte 画廊的一部分。"
    },
    color: "#d8ecff",
    icon: "S"
  },
  {
    name: "Squishy T",
    description: {
      id: "Squishy T memiliki desain manis dengan sentuhan peach yang hangat.",
      en: "Squishy T has a sweet design with a warm peach touch.",
      zh: "Squishy T 设计甜美，并带有温暖的蜜桃色点缀。"
    },
    color: "#ffe2c8",
    icon: "T"
  },
  {
    name: "Squishy U",
    description: {
      id: "Squishy U menampilkan karakter lembut dengan warna pink pastel yang cute.",
      en: "Squishy U shows a gentle character with a cute pastel pink color.",
      zh: "Squishy U 展现出柔和的个性，粉彩粉色非常可爱。"
    },
    color: "#ffd6e7",
    icon: "U"
  },
  {
    name: "Squishy V",
    description: {
      id: "Squishy V memberi variasi dreamy dengan warna lavender yang elegan.",
      en: "Squishy V adds a dreamy variation with an elegant lavender color.",
      zh: "Squishy V 用优雅的薰衣草色带来梦幻的变化。"
    },
    color: "#e8dcff",
    icon: "V"
  },
  {
    name: "Squishy W",
    description: {
      id: "Squishy W tampil creamy dan sederhana untuk memperkaya koleksi squishy.",
      en: "Squishy W looks creamy and simple, adding more charm to the squishy collection.",
      zh: "Squishy W 外观奶油感十足又简单，为 squishy 收藏增添魅力。"
    },
    color: "#fff2c9",
    icon: "W"
  },
  {
    name: "Squishy X",
    description: {
      id: "Squishy X punya kesan segar dengan warna lembut yang tetap nyaman dilihat.",
      en: "Squishy X has a fresh impression with soft colors that remain pleasant to view.",
      zh: "Squishy X 给人清新的感觉，柔和颜色依然看起来很舒服。"
    },
    color: "#c9f4df",
    icon: "X"
  },
  {
    name: "Squishy Y",
    description: {
      id: "Squishy Y membawa nuansa biru pastel yang tenang dan lucu untuk koleksi.",
      en: "Squishy Y brings a calm and cute pastel blue tone to the collection.",
      zh: "Squishy Y 为收藏带来安静又可爱的粉彩蓝色调。"
    },
    color: "#d8ecff",
    icon: "Y"
  },
  {
    name: "Squishy Z",
    description: {
      id: "Squishy Z menjadi penutup koleksi alfabet dengan tampilan soft dan menggemaskan.",
      en: "Squishy Z closes the alphabet collection with a soft and adorable look.",
      zh: "Squishy Z 以柔和可爱的外观作为字母收藏的收尾。"
    },
    color: "#ffe2c8",
    icon: "Z"
  }
];

const squishyGrid = document.querySelector("#squishyGrid");
const squishySearch = document.querySelector("#squishySearch");
const squishyDetail = document.querySelector("#squishyDetail");
const detailCard = document.querySelector("#detailCard");
const backButton = document.querySelector("#backButton");
const languageButtons = document.querySelectorAll(".language-button");

function getText(key) {
  return translations[currentLanguage][key];
}

function getSquishyMedia(squishy) {
  if (Array.isArray(squishy.media) && squishy.media.length > 0) {
    return squishy.media;
  }

  if (squishy.image) {
    const extraMedia = starterMedia.filter((media) => media.src !== squishy.image);
    return [{ type: "image", src: squishy.image }, ...extraMedia];
  }

  return starterMedia;
}

function getActiveMediaIndex(squishyIndex, totalMedia) {
  if (totalMedia === 0) {
    return 0;
  }

  const activeIndex = activeMediaIndexes[squishyIndex] || 0;
  return ((activeIndex % totalMedia) + totalMedia) % totalMedia;
}

function createMediaContent(squishy, squishyIndex) {
  const mediaList = getSquishyMedia(squishy);

  if (mediaList.length > 0) {
    const media = mediaList[getActiveMediaIndex(squishyIndex, mediaList.length)];

    if (media.type === "video") {
      return `<video src="${media.src}" controls preload="metadata" aria-label="${getText("imageAlt")} ${squishy.name}"></video>`;
    }

    return `<img src="${media.src}" alt="${getText("imageAlt")} ${squishy.name}">`;
  }

  return `<div class="placeholder-shape" aria-hidden="true">${squishy.icon}</div>`;
}

function createMediaViewer(squishy, squishyIndex, className, showControls = false) {
  const mediaList = getSquishyMedia(squishy);
  const activeIndex = getActiveMediaIndex(squishyIndex, mediaList.length);
  const controls = showControls && mediaList.length > 1 ? `
    <div class="media-controls" aria-label="${squishy.name} media">
      <button class="media-button" type="button" data-media-action="previous" data-index="${squishyIndex}" aria-label="${getText("previousMedia")}">&lsaquo;</button>
      <span class="media-counter">${activeIndex + 1}/${mediaList.length}</span>
      <button class="media-button" type="button" data-media-action="next" data-index="${squishyIndex}" aria-label="${getText("nextMedia")}">&rsaquo;</button>
    </div>
  ` : "";

  return `
    <div class="${className} media-viewer" style="--card-color: ${squishy.color};">
      ${createMediaContent(squishy, squishyIndex)}
      ${controls}
    </div>
  `;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = getText("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getText(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = getText(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getText(element.dataset.i18nAriaLabel));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });
}

// Fungsi ini menampilkan kartu squishy sesuai kata kunci nama.
function renderSquishyCards(keyword = "") {
  const searchKeyword = keyword.trim().toLowerCase();
  const filteredSquishy = squishyList
    .map((squishy, index) => ({ ...squishy, index }))
    .filter((squishy) => {
      return squishy.name.toLowerCase().includes(searchKeyword);
    });

  if (filteredSquishy.length === 0) {
    squishyGrid.innerHTML = `<p class="empty-state">${getText("emptyState")}</p>`;
    squishyDetail.classList.add("hidden");
    activeDetailIndex = null;
    return;
  }

  squishyGrid.innerHTML = filteredSquishy.map((squishy) => `
    <article class="squishy-card" data-index="${squishy.index}">
      ${createMediaViewer(squishy, squishy.index, "image-placeholder")}
      <div class="card-content">
        <button class="card-open-button" type="button" aria-label="${getText("cardAria")} ${squishy.name}">
          <h3>${squishy.name}</h3>
        </button>
      </div>
    </article>
  `).join("");
}

function renderSquishyDetail() {
  if (activeDetailIndex === null) {
    detailCard.innerHTML = "";
    squishyDetail.classList.add("hidden");
    return;
  }

  const squishy = squishyList[activeDetailIndex];

  detailCard.innerHTML = `
    <button class="detail-close-button" type="button" data-close-detail>${getText("backButton")}</button>
    ${createMediaViewer(squishy, activeDetailIndex, "detail-image", true)}
    <div class="detail-content">
      <h2>${squishy.name}</h2>
      <p>${squishy.description[currentLanguage]}</p>
    </div>
  `;

  squishyDetail.classList.remove("hidden");
}

function closeSquishyDetail() {
  activeDetailIndex = null;
  renderSquishyDetail();
}

// Fungsi ini membuka popup detail saat kartu squishy diklik.
function showSquishyDetail(index) {
  activeDetailIndex = Number(index);
  renderSquishyDetail();
}

// Event klik dibuat di grid agar semua kartu yang dibuat JavaScript bisa merespons.
squishyGrid.addEventListener("click", (event) => {
  if (event.target.closest("video")) {
    return;
  }

  const selectedCard = event.target.closest(".squishy-card");

  if (!selectedCard) {
    return;
  }

  showSquishyDetail(selectedCard.dataset.index);
});

backButton.addEventListener("click", () => {
  closeSquishyDetail();
});

squishyDetail.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-detail]")) {
    closeSquishyDetail();
    return;
  }

  const mediaButton = event.target.closest("[data-media-action]");

  if (mediaButton) {
    const squishyIndex = Number(mediaButton.dataset.index);
    const mediaCount = getSquishyMedia(squishyList[squishyIndex]).length;
    const direction = mediaButton.dataset.mediaAction === "next" ? 1 : -1;

    activeMediaIndexes[squishyIndex] = getActiveMediaIndex(squishyIndex, mediaCount) + direction;
    renderSquishyDetail();
    return;
  }

  if (event.target.closest(".media-controls")) {
    return;
  }

  if (event.target.closest("video")) {
    return;
  }

  if (event.target === squishyDetail) {
    closeSquishyDetail();
  }
});

squishySearch.addEventListener("input", (event) => {
  renderSquishyCards(event.target.value);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    localStorage.setItem("voolatteLanguage", currentLanguage);
    applyLanguage();
    renderSquishyCards(squishySearch.value);

    if (activeDetailIndex !== null) {
      showSquishyDetail(activeDetailIndex);
    }
  });
});

applyLanguage();
renderSquishyCards();
