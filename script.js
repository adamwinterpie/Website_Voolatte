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
    imageAlt: "Photo of"
  }
};

let currentLanguage = localStorage.getItem("voolatteLanguage") || "id";
let activeDetailIndex = null;

if (!translations[currentLanguage]) {
  currentLanguage = "id";
}

// Data dummy disimpan di JavaScript agar mudah diganti dengan data asli.
const squishyList = [
  {
    name: "Squishy A",
    description: {
      id: "Squishy A memiliki tampilan lucu dengan warna lembut yang cocok untuk koleksi pastel Voolatte.",
      en: "Squishy A has a cute look with soft colors that fit perfectly into Voolatte's pastel collection."
    },
    color: "#ffe2c8",
    icon: "A",
    image: "images/squishy-a.png"
  },
  {
    name: "Squishy B",
    description: {
      id: "Squishy B terlihat empuk dan menggemaskan, cocok menjadi koleksi favorit untuk pajangan meja.",
      en: "Squishy B looks soft and adorable, making it a sweet favorite for a desk display."
    },
    color: "#d8ecff",
    icon: "B",
    image: "images/squishy-b.png"
  },
  {
    name: "Squishy C",
    description: {
      id: "Squishy C punya desain sederhana dan manis, dengan nuansa lembut yang nyaman dilihat.",
      en: "Squishy C has a simple and sweet design with a soft tone that feels easy on the eyes."
    },
    color: "#ffd6e7",
    icon: "C",
    image: "images/squishy-c.png"
  },
  {
    name: "Squishy D",
    description: {
      id: "Squishy D memiliki warna pastel lembut dengan bentuk lucu untuk melengkapi koleksi Voolatte.",
      en: "Squishy D has gentle pastel colors and a cute shape to complete the Voolatte collection."
    },
    color: "#e8dcff",
    icon: "D"
  },
  {
    name: "Squishy E",
    description: {
      id: "Squishy E tampil manis dan empuk dengan nuansa creamy yang nyaman dilihat.",
      en: "Squishy E looks sweet and soft with a creamy tone that feels pleasant to view."
    },
    color: "#fff2c9",
    icon: "E"
  },
  {
    name: "Squishy F",
    description: {
      id: "Squishy F cocok untuk koleksi meja dengan tampilan sederhana, cerah, dan menggemaskan.",
      en: "Squishy F is great for a desk collection with its simple, bright, and adorable look."
    },
    color: "#c9f4df",
    icon: "F"
  },
  {
    name: "Squishy G",
    description: {
      id: "Squishy G membawa sentuhan soft pastel yang membuat galeri Voolatte terasa lebih ramai.",
      en: "Squishy G adds a soft pastel touch that makes the Voolatte gallery feel more lively."
    },
    color: "#d8ecff",
    icon: "G"
  },
  {
    name: "Squishy H",
    description: {
      id: "Squishy H punya karakter lembut dengan warna peach yang hangat dan cozy.",
      en: "Squishy H has a gentle character with a warm and cozy peach color."
    },
    color: "#ffe2c8",
    icon: "H"
  },
  {
    name: "Squishy I",
    description: {
      id: "Squishy I terlihat imut dengan gaya minimalis yang cocok untuk koleksi pastel.",
      en: "Squishy I looks cute with a minimalist style that suits a pastel collection."
    },
    color: "#ffd6e7",
    icon: "I"
  },
  {
    name: "Squishy J",
    description: {
      id: "Squishy J menambahkan variasi warna lembut dan tampilan lucu di koleksi Voolatte.",
      en: "Squishy J adds soft color variety and a cute look to the Voolatte collection."
    },
    color: "#e8dcff",
    icon: "J"
  },
  {
    name: "Squishy K",
    description: {
      id: "Squishy K terasa manis dengan desain sederhana dan nuansa strawberry milk.",
      en: "Squishy K feels sweet with a simple design and a strawberry milk mood."
    },
    color: "#fff2c9",
    icon: "K"
  },
  {
    name: "Squishy L",
    description: {
      id: "Squishy L hadir dengan kesan empuk, ringan, dan cocok untuk pajangan koleksi.",
      en: "Squishy L brings a soft, light feel that works well as a collection display."
    },
    color: "#c9f4df",
    icon: "L"
  },
  {
    name: "Squishy M",
    description: {
      id: "Squishy M memiliki tampilan soft yang membuat koleksi terlihat semakin dreamy.",
      en: "Squishy M has a soft appearance that makes the collection feel even dreamier."
    },
    color: "#d8ecff",
    icon: "M"
  },
  {
    name: "Squishy N",
    description: {
      id: "Squishy N tampil kalem dengan warna pastel yang elegan dan tidak terlalu ramai.",
      en: "Squishy N looks calm with elegant pastel colors that are not too busy."
    },
    color: "#ffe2c8",
    icon: "N"
  },
  {
    name: "Squishy O",
    description: {
      id: "Squishy O membawa suasana cute gallery dengan bentuk sederhana dan lembut.",
      en: "Squishy O brings a cute gallery feel with a simple and gentle shape."
    },
    color: "#ffd6e7",
    icon: "O"
  },
  {
    name: "Squishy P",
    description: {
      id: "Squishy P cocok untuk melengkapi koleksi squishy lucu bertema pastel.",
      en: "Squishy P is a good fit for completing a cute pastel-themed squishy collection."
    },
    color: "#e8dcff",
    icon: "P"
  },
  {
    name: "Squishy Q",
    description: {
      id: "Squishy Q punya nuansa creamy yang nyaman dan tampilan yang mudah disukai.",
      en: "Squishy Q has a cozy creamy tone and a look that is easy to love."
    },
    color: "#fff2c9",
    icon: "Q"
  },
  {
    name: "Squishy R",
    description: {
      id: "Squishy R menambah pilihan koleksi dengan warna lembut dan gaya cozy.",
      en: "Squishy R adds another collection option with soft colors and a cozy style."
    },
    color: "#c9f4df",
    icon: "R"
  },
  {
    name: "Squishy S",
    description: {
      id: "Squishy S terlihat cerah, imut, dan cocok menjadi bagian dari galeri Voolatte.",
      en: "Squishy S looks bright and cute, making it a fitting part of the Voolatte gallery."
    },
    color: "#d8ecff",
    icon: "S"
  },
  {
    name: "Squishy T",
    description: {
      id: "Squishy T memiliki desain manis dengan sentuhan peach yang hangat.",
      en: "Squishy T has a sweet design with a warm peach touch."
    },
    color: "#ffe2c8",
    icon: "T"
  },
  {
    name: "Squishy U",
    description: {
      id: "Squishy U menampilkan karakter lembut dengan warna pink pastel yang cute.",
      en: "Squishy U shows a gentle character with a cute pastel pink color."
    },
    color: "#ffd6e7",
    icon: "U"
  },
  {
    name: "Squishy V",
    description: {
      id: "Squishy V memberi variasi dreamy dengan warna lavender yang elegan.",
      en: "Squishy V adds a dreamy variation with an elegant lavender color."
    },
    color: "#e8dcff",
    icon: "V"
  },
  {
    name: "Squishy W",
    description: {
      id: "Squishy W tampil creamy dan sederhana untuk memperkaya koleksi squishy.",
      en: "Squishy W looks creamy and simple, adding more charm to the squishy collection."
    },
    color: "#fff2c9",
    icon: "W"
  },
  {
    name: "Squishy X",
    description: {
      id: "Squishy X punya kesan segar dengan warna lembut yang tetap nyaman dilihat.",
      en: "Squishy X has a fresh impression with soft colors that remain pleasant to view."
    },
    color: "#c9f4df",
    icon: "X"
  },
  {
    name: "Squishy Y",
    description: {
      id: "Squishy Y membawa nuansa biru pastel yang tenang dan lucu untuk koleksi.",
      en: "Squishy Y brings a calm and cute pastel blue tone to the collection."
    },
    color: "#d8ecff",
    icon: "Y"
  },
  {
    name: "Squishy Z",
    description: {
      id: "Squishy Z menjadi penutup koleksi alfabet dengan tampilan soft dan menggemaskan.",
      en: "Squishy Z closes the alphabet collection with a soft and adorable look."
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

function createImageContent(squishy) {
  if (squishy.image) {
    return `<img src="${squishy.image}" alt="${getText("imageAlt")} ${squishy.name}">`;
  }

  return `<div class="placeholder-shape" aria-hidden="true">${squishy.icon}</div>`;
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
    <button class="squishy-card" type="button" data-index="${squishy.index}" aria-label="${getText("cardAria")} ${squishy.name}">
      <div class="image-placeholder" style="--card-color: ${squishy.color};">
        ${createImageContent(squishy)}
      </div>
      <div class="card-content">
        <h3>${squishy.name}</h3>
      </div>
    </button>
  `).join("");
}

// Fungsi ini membuka tampilan detail saat kartu squishy diklik.
function showSquishyDetail(index) {
  const squishy = squishyList[index];
  activeDetailIndex = index;

  detailCard.innerHTML = `
    <div class="detail-image" style="--card-color: ${squishy.color};">
      ${createImageContent(squishy)}
    </div>
    <div class="detail-content">
      <h2>${squishy.name}</h2>
      <p>${squishy.description[currentLanguage]}</p>
    </div>
  `;

  squishyDetail.classList.remove("hidden");
  squishyDetail.scrollIntoView({ behavior: "smooth" });
}

// Event klik dibuat di grid agar semua kartu yang dibuat JavaScript bisa merespons.
squishyGrid.addEventListener("click", (event) => {
  const selectedCard = event.target.closest(".squishy-card");

  if (!selectedCard) {
    return;
  }

  showSquishyDetail(selectedCard.dataset.index);
});

backButton.addEventListener("click", () => {
  squishyDetail.classList.add("hidden");
  activeDetailIndex = null;
  document.querySelector("#galeri").scrollIntoView({ behavior: "smooth" });
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
