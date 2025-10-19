const projects = [
  {
    id: 'p-01',
    title: 'Website Pengelola Keuangan',
    short: 'Responsive website finance project menggunakan HTML/CSS/JS.',
    desc: 'Website membantu kamu mengelola keuangan sehari-hari secara efisien. Dengan fitur tabungan fleksibel, pencatatan pengeluaran yang mudah, dan dashboard interaktif, kamu bisa memantau arus kas, menetapkan tujuan tabungan, dan membuat keputusan finansial yang lebih cerdas. Desain yang responsif memastikan pengalaman yang nyaman di semua perangkat, baik laptop maupun ponsel. Cocok untuk pelajar, profesional muda, atau siapa saja yang ingin lebih sadar dalam mengelola uangnya.',
    tools: 'HTML, CSS, JavaScript',
    image: 'img/project/pengelola-keuangan.png',
    link: 'https://lyf297.github.io/pengelola-keuangan/'
  },
  {
    id: 'p-02',
    title: 'Brief Design Generator – Buat Brief Desain Otomatis dalam Sekejap',
    short: 'Buat brief desain profesional hanya dengan mengisi form sederhana. Preview otomatis dan ekspor ke PDF/PNG siap digunakan.',
    desc: 'Brief Design Generator adalah alat praktis untuk membuat brief desain secara otomatis. Cukup isi form dengan informasi yang diperlukan, dan alat ini akan menghasilkan preview brief desain yang rapi dan siap digunakan. Kamu juga bisa mengekspor brief tersebut ke format PDF atau PNG untuk dibagikan atau dicetak. Cocok untuk desainer, freelancer, atau siapa saja yang membutuhkan brief desain dengan cepat dan efisien.',
    tools: 'HTML, CSS, JavaScript',
    image: 'img/project/brief.jpg',
    link: 'https://lyf297.github.io/brief-design-generator/'
  },
  {
    id: 'p-03',
    title: 'MindFlow Generator',
    short: 'Aplikasi web interaktif untuk membuat Mindmap & Flowchart profesional.',
    desc: 'MindFlow Ultimate adalah aplikasi Mindmap dan Flowchart interaktif berbasis web menggunakan JointJS.Fitur lengkap, profesional, dan responsif:Bebas watermark, clean, dan siap digunakan di desktop maupun mobile.',
    tools: 'HTML, CSS, JavaScript',
    image: 'img/project/mindflow.jpg',
    link: 'https://lyf297.github.io/mindflow-generator/'
  }, 
];

const grid = document.getElementById('projects-grid');
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

function createCard(p) {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="thumb"><img src="${p.image}" alt="${p.title}"/></div>
    <h3>${p.title}</h3>
    <p>${p.short}</p>
    <div class="meta">
      <small>${p.tools}</small>
      <button class="btn" data-id="${p.id}">Detail</button>
    </div>`;
  return el;
}

projects.forEach(p => grid.appendChild(createCard(p)));

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTools = document.getElementById('modal-tools');
const modalImage = document.getElementById('modal-image');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.querySelector('.modal-close');

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-id]');
  if (!btn) return;
  const id = btn.getAttribute('data-id');
  const data = projects.find(x => x.id === id);
  if (!data) return;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;
  modalTools.textContent = data.tools;
  modalImage.src = data.image;
  modalLink.href = data.link;
  modal.setAttribute('aria-hidden', 'false');
});

closeBtn.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
});