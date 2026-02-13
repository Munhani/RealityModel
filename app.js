const clients = [
  {
    id: "zafer-mimarlik",
    name: "Zafer Mimarlık",
    tag: "Mimari Proje",
    location: "İstanbul",
    models: [
      {
        id: "zm-kayabasi-127-1",
        title: "Kayabaşı 127/1 Konut Bloğu Reality Modeli",
        description:
          "Drone ile çekilen fotoğraflardan üretilmiş yüksek detaylı 3B konut bloğu modeli.",
        thumbnail:
          "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
        // Bu link, GitHub Pages'te RealityModel projesi altından açılır:
        // https://munhani.github.io/RealityModel/07_127_120251001_3MX_WEB/App/index.html
        // Önemli: Başa "/" koymuyoruz ki repo kökü korunmuş olsun.
        url: "07_127_120251001_3MX_WEB/App/index.html",
        status: "Yayında",
      },
    ],
  },
  {
    id: "bakirci-yapi",
    name: "Bakırcı Yapı",
    tag: "Ticari Proje",
    location: "İstoç / İstanbul",
    models: [
      {
        id: "bakirci-istoc",
        title: "İstoç Projesi Reality Modeli",
        description:
          "İstoç bölgesindeki ticari yapıların detaylı 3B reality model çalışması.",
        thumbnail:
          "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        // GitHub Pages üzerinde:
        // https://munhani.github.io/RealityModel/01_2144_4_20260124_3MX/App/index.html
        url: "01_2144_4_20260124_3MX/App/index.html",
        status: "Yayında",
      },
    ],
  },
  {
    id: "baku-havalimani",
    name: "Bakü Havalimanı Kavşağı",
    tag: "Yol & Kavşak",
    location: "Bakü",
    models: [
      {
        id: "baku-interchange",
        title: "Bakü Havalimanı Kavşağı Reality Modeli",
        description:
          "Kritik bağlantı yolları ve kavşak geometrisini içeren 3B reality model.",
        thumbnail:
          "https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "#",
        status: "Demo",
      },
    ],
  },
  {
    id: "edirne-koprusu",
    name: "Edirne Sırpsındığı Köprüsü",
    tag: "Köprü Projesi",
    location: "Edirne",
    models: [
      {
        id: "edirne-bridge",
        title: "Sırpsındığı Köprüsü Detaylı Reality Modeli",
        description:
          "Tarihî köprü ve çevresinin yüksek çözünürlüklü reality model taraması.",
        thumbnail:
          "https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "#",
        status: "Demo",
      },
    ],
  },
];

function createClientCard(client) {
  const card = document.createElement("button");
  card.className = "client-card";
  card.type = "button";
  card.setAttribute("data-client-id", client.id);

  card.innerHTML = `
    <div class="client-card-header">
      <div class="client-name">${client.name}</div>
      <div class="client-tag">${client.tag}</div>
    </div>
    <div class="client-meta">
      <span><span class="client-dot"></span>${client.location}</span>
      <span class="client-model-count">${client.models.length} model</span>
    </div>
  `;

  card.addEventListener("click", () => openModalForClient(client.id));
  return card;
}

function renderClientsGrid() {
  const grid = document.getElementById("clientsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  clients.forEach((client) => {
    grid.appendChild(createClientCard(client));
  });
}

function openModalForClient(clientId) {
  const client = clients.find((c) => c.id === clientId);
  if (!client) return;

  const backdrop = document.getElementById("projectModal");
  const titleEl = document.getElementById("modalTitle");
  const subtitleEl = document.getElementById("modalSubtitle");
  const contentEl = document.getElementById("modalContent");

  titleEl.textContent = client.name;
  subtitleEl.textContent = `${client.location} • ${client.models.length} reality model`;

  contentEl.innerHTML = "";

  client.models.forEach((model) => {
    const card = document.createElement("div");
    card.className = "model-card";

    const thumbStyle = model.thumbnail
      ? `background-image:url('${model.thumbnail}')`
      : "";

    card.innerHTML = `
      <div class="model-thumb" style="${thumbStyle}"></div>
      <div class="model-body">
        <h3 class="model-title">${model.title}</h3>
        <p class="model-meta">${model.description}</p>
        <div class="model-actions">
          ${
            model.url && model.url !== "#"
              ? `<a class="model-link" href="${model.url}" target="_blank" rel="noreferrer">Reality modeli aç</a>`
              : `<span class="model-link" style="opacity:.7;cursor:default;">Yakında eklenecek</span>`
          }
          <span class="model-badge">${model.status}</span>
        </div>
      </div>
    `;

    contentEl.appendChild(card);
  });

  backdrop.classList.add("visible");
}

function closeModal() {
  const backdrop = document.getElementById("projectModal");
  backdrop.classList.remove("visible");
}

function setupModalEvents() {
  const backdrop = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  closeBtn.addEventListener("click", closeModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("visible")) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderClientsGrid();
  setupModalEvents();
});

