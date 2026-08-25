/* ============================================================
   SITE CONFIG — edit this object to update the website
   ============================================================ */
const siteConfig = {
  name: "Sanjid Hasan",
  photo: "https://i.imgur.com/zIkLYYy.jpg",
  location: "Bangladesh",
  profession: "Graphic Designer, Photographer & Videographer",
  roles: "Graphic Designer • Photographer • Videographer • Content Creator",
  tagline: "Creative visual storyteller focused on photography, videography, graphic design and digital content.",
  interests: "Photography, Videography, Cars, Design, Technology and Content Creation",
  focus: "Cinematic stills, automotive media and brand-led visual content",
  email: "sanjidhasan908@gmail.com",
  phone: "+880 1968856582",
  bio: "I grew up noticing how light sits on metal, how a frame can make a quiet moment feel cinematic, and how a simple layout can give a brand its posture. That curiosity turned into a practice: photography, videography, graphic design and the kind of digital content people actually stop for.",
  bio2: "Based in Bangladesh, I work across portraits, lifestyle, automotive and brand work — stills, motion, edits and social-first pieces. The goal is always the same: images that feel considered, not noisy. If it looks expensive, it is because the craft is quiet.",

  facebook: "https://www.facebook.com/share/1Cd28FDdFn/",
  instagram: "https://www.instagram.com/sanjidul_haque/",
  youtube: "https://www.youtube.com/@SanjidHasan0",
  tiktok: "https://i.pinimg.com/1200x/62/a7/6a/62a76a09cdfa54e69d0188de2c63cb48.jpg",
  discord: "https://discord.gg/WcqbrS77Mm",
  linkedin: "https://www.linkedin.com/in/sanjid-hasan-b62754357/",

  socials: [
    { key: "facebook", icon: "facebook", handle: "Sanjid Hasan", blurb: "Updates, behind-the-scenes and conversation." },
    { key: "instagram", icon: "instagram", handle: "@sanjidul_haque", blurb: "Stills, reels and the daily visual diary." },
    { key: "youtube", icon: "youtube", handle: "@SanjidHasan0", blurb: "Longer cuts, cinematic pieces and process." },
    { key: "tiktok", icon: "music-2", handle: "@sanjidhasan", blurb: "Short-form motion and quick visual ideas." },
    { key: "discord", icon: "message-circle", handle: "Community", blurb: "Hang out, share work and talk craft." },
    { key: "linkedin", icon: "linkedin", handle: "Sanjid Hasan", blurb: "Professional work, collaborations and credits." }
  ],

  skills: [
    { icon: "pen-tool", name: "Graphic Design", desc: "Layouts, identity systems and graphics that stay sharp at any size." },
    { icon: "camera", name: "Photography", desc: "Portraits, lifestyle and automotive frames with cinematic restraint." },
    { icon: "video", name: "Videography", desc: "Motion that feels directed — light, pace and a clear point of view." },
    { icon: "clapperboard", name: "Video Editing", desc: "Cuts, colour and sound that turn footage into a story." },
    { icon: "image", name: "Photo Editing", desc: "Colour, texture and finish without overcooking the file." },
    { icon: "hexagon", name: "Branding", desc: "Visual identity that feels like a person, not a template." },
    { icon: "share-2", name: "Social Media Content", desc: "Formats built for feeds without looking like feed filler." },
    { icon: "compass", name: "Creative Direction", desc: "The brief, the look and the sequence — held in one place." }
  ],

  work: [
    { icon: "pen-tool", name: "Graphic Design", desc: "Logos, posters, social media graphics, branding and visual identity." },
    { icon: "camera", name: "Photography", desc: "Portrait, lifestyle, automotive and creative photography." },
    { icon: "video", name: "Videography", desc: "Cinematic videos, events, reels and social media content." },
    { icon: "scissors", name: "Video Editing", desc: "Short-form videos, reels, cinematic edits and creative storytelling." },
    { icon: "sparkles", name: "Content Creation", desc: "Creative digital content for Facebook, Instagram, YouTube and other platforms." },
    { icon: "car", name: "Automotive Content", desc: "Professional car photography, cinematic car videos and automotive media." }
  ],

  services: [
    { icon: "pen-tool", title: "Graphic Design", desc: "Identity, posters, campaign graphics and social assets with a consistent visual language.", price: "Price on request" },
    { icon: "camera", title: "Photography", desc: "Portrait, lifestyle and product sessions directed for both print and feed.", price: "Price on request" },
    { icon: "video", title: "Videography", desc: "Cinematic coverage for events, launches and personal projects.", price: "Price on request" },
    { icon: "clapperboard", title: "Video Editing", desc: "Reels, short films and branded cuts with colour and pacing that hold.", price: "Price on request" },
    { icon: "share-2", title: "Social Media Content", desc: "A visual system for platforms — stills, motion and captions that match.", price: "Price on request" },
    { icon: "car", title: "Automotive Photography", desc: "Car stills and motion with attention to line, paint and atmosphere.", price: "Price on request" },
    { icon: "layers", title: "Creative Projects", desc: "Open-ended collaborations when the brief is still taking shape.", price: "Price on request" }
  ],

  /* Replace image URLs with files in assets/images/ when ready */
  portfolio: [
    { title: "Tea Stall", category: "Photography", image: "https://i.pinimg.com/736x/e5/f9/75/e5f9755c9ce6b2a2af7c4bb17ee36550.jpg", desc: "Nestled directly beneath the tree is a small, traditional roadside shop made of corrugated tin, wood, and thatch" },
    { title: "Neon Transit", category: "Photography", image: "https://i.pinimg.com/1200x/d7/fd/70/d7fd70e3f239e98c1b278c06d5e4315d.jpg", desc: "A long-exposure street photography shot capturing the energy of a bustling city at night." },
    { title: "Flock of Ducks", category: "Photography", image:"https://i.pinimg.com/736x/4d/78/ee/4d78ee9fda7dc989843682ac27816772.jpg", desc: "A group of ducks with various plumage colors—white, brown, and black-and-white—is swimming together in a natural pond or stream, catching the warm sunlight." },
    { title: "Quiet Solitude", category: "Photography", image: "https://i.pinimg.com/736x/3e/6d/91/3e6d9139754074ddf2d6a500c20bae2b.jpg", desc: "A cinematic capture of filtered sunlight and shadows around an empty park bench." },
    { title: "Morning Shadows", category: "Photography", image: "https://i.pinimg.com/1200x/de/46/56/de4656bdb2292f7bfd72a81af56952bc.jpg", desc: "Low golden sunlight filtering through a leafy canopy onto a quiet country road." },
    { title: "Sunburst Canopy", category: "Photography", image: "https://i.pinimg.com/736x/e3/a3/29/e3a3297da0a4509ce1730af448825df6.jpg", desc: "A vivid upward view of brilliant sunlight peeking through vibrant green leaves." },
    { title: "In Bloom", category: "Photography", image: "https://i.pinimg.com/736x/ae/e1/b2/aee1b2045440e9a548807e42fadd555f.jpg", desc: "Soft white jasmine petals standing out against warm green leaves." },
    { title: "Forest Sanctuary", category: "Photography", image: "https://i.pinimg.com/1200x/8e/4a/a7/8e4aa78825333365726abf181920953e.jpg", desc: "Natural textures of rock, clear water, and deep green canopy under bright daylight." },
    { title: "Perched Together", category: "Photography", image: "https://i.pinimg.com/736x/1a/66/46/1a664640f80a937eab80b8ff14a19431.jpg", desc: "An intimate glance between two sparrows sheltering on a window ledge." },
    { title: "Dusk on the Water", category: "Photography", image: "https://i.pinimg.com/736x/b8/4c/d1/b84cd18e80ef3cad0ba9385e2e1f9342.jpg", desc: "A serene, solitary boat anchored beneath sweeping branches during twilight." },

    { title: "Heritage in Print", category: "Graphic Design", image: "https://i.pinimg.com/736x/95/42/14/9542140604be36d20911acf6b8d2335d.jpg", desc: "A classic vintage postage stamp featuring Bangladesh’s national fruit, the jackfruit tree." },
    { title: "Echoes of Al-Andalus", category: "Graphic Design", image: "https://i.pinimg.com/736x/d6/a9/7e/d6a97e8b20cb192d219c1a8a43c9370b.jpg", desc: "An ornate archway framing the timeless architecture of Granada's Alhambra." },
    { title: "Land of Rivers", category: "Graphic Design", image: "https://i.pinimg.com/736x/47/a6/31/47a63108b54804751d69637a484697a7.jpg", desc: "A vintage-inspired graphic artwork celebrating Bangladeshi heritage and architecture." },
    { title: "Heritage & Peaks", category: "Graphic Design", image: "https://i.pinimg.com/736x/04/67/7b/04677ba87ad7791f9d8df32249760699.jpg", desc: "A retro travel art composition highlighting Pakistan's iconic architecture and mountain landscapes." },
    { title: "Spanish Heritage", category: "Graphic Design", image: "https://i.pinimg.com/736x/d3/5d/eb/d35deb9e2e94e503e76c86c5c983b768.jpg", desc: "Bold typography and warm architectural textures combined in a classic travel poster layout." },
    { title: "Botanical Print", category: "Graphic Design", image: "https://i.pinimg.com/736x/bb/35/a9/bb35a9a95a0e4b50dc03941e89248a7a.jpg", desc: "A vintage editorial poster showcasing the lush foliage of a potted Pothos." },
    { title: "Tokyo Tower", category: "Graphic Design", image: "https://i.pinimg.com/1200x/d5/7b/8a/d57b8ad66dddac6b10446c9f39988695.jpg", desc: "A vintage-inspired graphic print capturing Japan's iconic landmark from a low-angle perspective." },
    { title: "Broken Prayer", category: "Graphic Design", image: "https://i.pinimg.com/1200x/d4/b8/f9/d4b8f9a965ada05816219f382658885b.jpg", desc: "A dark, dark-art magazine cover featuring a blindfolded statue with bitmap halftone textures." },
     
    { title: "Carbon Precision", category: "Automotive", image: "https://i.pinimg.com/736x/95/38/2b/95382b4e84d703c69571d10d1d00b504.jpg", desc: "A dark, dramatic capture highlighting the exposed carbon weave of a Porsche race car." },
    { title: "Yellow DRLs", category: "Automotive", image: "https://i.pinimg.com/1200x/a7/73/02/a773024ca10dbb9d75f3b1814c42aa2c.jpg", desc: "Dynamic shadow play highlighting the aggressive front fascia and sharp character lines of the BMW M." },
    { title: "Sakura Drift", category: "Automotive", image: "https://i.pinimg.com/736x/11/f1/9b/11f19bea403f6291a1ecb969ea46f685.jpg", desc: "Soft cherry blossoms contrasting with aggressive widebody lines and custom wheel fitment." },
    { title: "Night Light Signature", category: "Automotive", image: "https://i.pinimg.com/736x/46/0b/34/460b3407e64021bdcd67d62949795673.jpg", desc: "Dramatic LED taillight glow framing the sharp rear profile of a white Audi RS7." },
    { title: "M4 Precision", category: "Automotive", image: "https://i.pinimg.com/736x/2e/e3/a7/2ee3a78439083b90419952cfb28be12c.jpg", desc: "A modern poster layout celebrating the bold stance and sharp lines of the BMW M4." },
    { title: "Vehicle & Livery", category: "Automotive", image: "https://i.pinimg.com/736x/c1/c2/75/c1c275df2a2725396bb6e59cfbb2b0d1.jpg", desc: "The white GT3 RS features a custom Great Wave livery wrap across the rear quarter panel and door, striking red-rimmed wheels, and a prominent rear wing." },
    { title: "Subject Matter", category: "Automotive", image: "https://i.pinimg.com/736x/3d/13/b8/3d13b874abfa5e246821526731b2ea5d.jpg", desc: "A modified white BMW M4 fitted with an aggressive widebody kit, carbon front splitters, dark multi-spoke wheels, and a prominent rear wing, angled steeply as if falling through the sky." },
    { title: "Rolls-Royce", category: "Automotive", image: "https://i.pinimg.com/736x/23/05/75/230575e5d3f685fecaee7694443ee76d.jpg", desc: "Gloss black Rolls-Royce Phantom featuring a polished chrome Pantheon grille and matching dark multi-spoke rims." },
     
    { title: "Reel Cut", category: "Videography", image: "https://pin.it/67GQguEWd", desc: "Short-form motion with a cinematic grade. Built to stop a thumb." },
    { title: "Feed System", category: "Social Media", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80", desc: "A visual grid for social — consistent crops, type and colour so the profile feels like a studio." },
    { title: "After Hours", category: "Photography", image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=1200&q=80", desc: "Practical lights, haze and a frame that feels like a still from a film." },
    { title: "Type & Paper", category: "Graphic Design", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80", desc: "Poster and print explorations. Physical objects, not just files." }
  ],

  projects: [
    { name: "Personal Brand Hub", desc: "A focused landing page for socials and presence — the first public face of the brand.", tech: ["HTML", "CSS", "JavaScript"], image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80", live: "https://www.instagram.com/sanjidul_haque/", github: "" },
    { name: "Visual Archive", desc: "A placeholder for a photography archive. Swap the thumbnail and point the live button at your gallery.", tech: ["HTML", "CSS"], image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80", live: "#portfolio", github: "" },
    { name: "Motion Reel Site", desc: "A home for cinematic cuts and client reels. Connect YouTube or a custom player when ready.", tech: ["HTML", "JS"], image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80", live: "https://www.youtube.com/@SanjidHasan0", github: "" },
    { name: "Studio Notes", desc: "Optional blog or process log. Leave GitHub empty until the repo exists.", tech: ["Design", "Content"], image: "https://images.unsplash.com/photo-1516383740770-dfbd21dac3d5?auto=format&fit=crop&w=1200&q=80", live: "#contact", github: "" }
  ],

  /* Form endpoint (leave empty for local success state).
     Formspree example: "https://formspree.io/f/xxxxxx"
     EmailJS: handle in onSubmit yourself. */
  formEndpoint: ""
};               

/* ============================================================
   RENDER
   ============================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function applyConfigText() {
  $$("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    const value = siteConfig[key];
    if (!value) return;
    if (el.tagName === "IMG") {
      el.src = value;
      el.alt = `${siteConfig.name} portrait`;
    } else {
      el.textContent = value;
    }
  });
  const emailLink = $('[data-contact="email"]');
  const phoneLink = $('[data-contact="phone"]');
  if (emailLink) emailLink.href = `mailto:${siteConfig.email}`;
  if (phoneLink) phoneLink.href = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  ["facebook", "instagram", "discord"].forEach((key) => {
    const el = $(`[data-contact="${key}"]`);
    if (el && siteConfig[key]) el.href = siteConfig[key];
  });
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function renderSkills() {
  $("#skills-grid").innerHTML = siteConfig.skills.map((s) => `
    <article class="card reveal">
      <div class="card__icon">${icon(s.icon)}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    </article>`).join("");
}

function renderWork() {
  $("#work-grid").innerHTML = siteConfig.work.map((s) => `
    <article class="card work-card reveal">
      <div class="card__icon">${icon(s.icon)}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    </article>`).join("");
}

function renderSocials() {
  $("#socials-grid").innerHTML = siteConfig.socials.map((s) => `
    <article class="card social-card reveal">
      <div class="card__icon">${icon(s.icon)}</div>
      <h3>${s.key[0].toUpperCase() + s.key.slice(1)}</h3>
      <p class="handle">${s.handle}</p>
      <p>${s.blurb}</p>
      <a class="btn btn--ghost btn--sm" href="${siteConfig[s.key]}" target="_blank" rel="noopener noreferrer">Visit</a>
    </article>`).join("");

  $("#footer-socials").innerHTML = siteConfig.socials.map((s) => `
    <a href="${siteConfig[s.key]}" target="_blank" rel="noopener noreferrer" aria-label="${s.key}">${icon(s.icon)}</a>
  `).join("");
}

function renderProjects() {
  $("#projects-grid").innerHTML = siteConfig.projects.map((p) => `
    <article class="card project-card reveal">
      <img src="${p.image}" alt="${p.name} thumbnail" loading="lazy">
      <div class="project-card__body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="project-card__tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
        <div class="project-card__actions">
          ${p.live ? `<a class="btn btn--gold btn--sm" href="${p.live}" ${p.live.startsWith("#") ? "" : 'target="_blank" rel="noopener noreferrer"'}>Live Website</a>` : ""}
          ${p.github ? `<a class="btn btn--ghost btn--sm" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
        </div>
      </div>
    </article>`).join("");
}

function renderServices() {
  $("#services-grid").innerHTML = siteConfig.services.map((s) => `
    <article class="card service-card reveal">
      <div class="card__icon">${icon(s.icon)}</div>
      <div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <p class="price">${s.price}</p>
        <a class="btn btn--ghost btn--sm" href="#contact">Discuss a Project</a>
      </div>
    </article>`).join("");
}

const CATEGORIES = ["All", "Photography", "Videography", "Graphic Design", "Automotive", "Social Media"];
let activeFilter = "All";
let lightboxIndex = 0;

function visibleItems() {
  return siteConfig.portfolio.filter((p) => activeFilter === "All" || p.category === activeFilter);
}

function renderFilters() {
  $("#filters").innerHTML = CATEGORIES.map((c) => `
    <button type="button" data-filter="${c}" class="${c === activeFilter ? "is-active" : ""}">${c}</button>
  `).join("");
}

function renderGallery() {
  const items = visibleItems();
  $("#gallery").innerHTML = items.map((p, i) => `
    <article class="gallery__item" tabindex="0" data-index="${i}">
      <img src="${p.image}" alt="${p.title} — ${p.category}" loading="lazy">
      <div class="gallery__overlay">
        <p class="gallery__cat">${p.category}</p>
        <h3>${p.title}</h3>
        <button class="btn btn--gold btn--sm" type="button">View Project</button>
      </div>
    </article>`).join("");
}

function openLightbox(index) {
  const items = visibleItems();
  lightboxIndex = (index + items.length) % items.length;
  const p = items[lightboxIndex];
  $("#lb-image").src = p.image;
  $("#lb-image").alt = p.title;
  $("#lb-title").textContent = p.title;
  $("#lb-cat").textContent = p.category;
  $("#lb-desc").textContent = p.desc;
  const box = $("#lightbox");
  box.hidden = false;
  box.classList.add("is-open");
  document.body.style.overflow = "hidden";
  $(".lightbox__close").focus();
}

function closeLightbox() {
  const box = $("#lightbox");
  box.hidden = true;
  box.classList.remove("is-open");
  document.body.style.overflow = "";
}

/* ============================================================
   NAV / SCROLL
   ============================================================ */
function initNav() {
  const nav = $("#nav");
  const toggle = $("#nav-toggle");
  const drawer = $("#nav-drawer");
  const overlay = $("#nav-overlay");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setOpen = (open) => {
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      drawer.hidden = false;
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => drawer.classList.add("is-open"));
    } else {
      drawer.classList.remove("is-open");
      overlay.hidden = true;
      document.body.style.overflow = "";
      setTimeout(() => {
        if (!drawer.classList.contains("is-open")) drawer.hidden = true;
      }, 450);
    }
  };

  toggle.addEventListener("click", () => setOpen(!toggle.classList.contains("is-open")));
  overlay.addEventListener("click", () => setOpen(false));
  $$(".nav-drawer__links a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.classList.contains("is-open")) setOpen(false);
  });

  const sectionIds = ["home", "about", "skills", "what-i-do", "portfolio", "socials", "projects", "services", "contact"];
  const navMap = { home: "home", about: "about", skills: "skills", "what-i-do": "skills", services: "services", portfolio: "portfolio", socials: "socials", projects: "projects", contact: "contact" };

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      const key = navMap[id] || id;
      $$(".nav__links a, .nav-drawer__links a").forEach((a) => {
        a.classList.toggle("is-active", a.dataset.section === key);
      });
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });
}

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
}

function initCountUp() {
  const stats = $("#stats");
  if (!stats) return;
  const io = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    $$("[data-count]", stats).forEach((el) => {
      const target = Number(el.dataset.count);
      const start = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.disconnect();
  }, { threshold: 0.4 });
  io.observe(stats);
}

function initPortfolio() {
  renderFilters();
  renderGallery();
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    renderFilters();
    renderGallery();
    if (window.lucide) lucide.createIcons();
  });
  $("#gallery").addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (!item) return;
    openLightbox(Number(item.dataset.index));
  });
  $("#gallery").addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const item = e.target.closest(".gallery__item");
    if (!item) return;
    e.preventDefault();
    openLightbox(Number(item.dataset.index));
  });
  $(".lightbox__close").addEventListener("click", closeLightbox);
  $(".lightbox__nav--prev").addEventListener("click", () => openLightbox(lightboxIndex - 1));
  $(".lightbox__nav--next").addEventListener("click", () => openLightbox(lightboxIndex + 1));
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(lightboxIndex - 1);
    if (e.key === "ArrowRight") openLightbox(lightboxIndex + 1);
  });
}

function initForm() {
  const form = $("#contact-form");
  const status = $("#form-status");
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const errors = {
      name: data.name.trim() ? "" : "Please enter your name.",
      email: emailOk(data.email) ? "" : "Enter a valid email address.",
      subject: data.subject.trim() ? "" : "Add a subject.",
      message: data.message.trim().length >= 8 ? "" : "Write a little more so I can reply well."
    };
    Object.entries(errors).forEach(([k, v]) => { $(`[data-error="${k}"]`).textContent = v; });
    if (Object.values(errors).some(Boolean)) {
      status.textContent = "Please fix the highlighted fields.";
      status.className = "form__status is-err";
      return;
    }

    status.textContent = "Sending…";
    status.className = "form__status";

    try {
      if (siteConfig.formEndpoint) {
        const res = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Network");
      }
      status.textContent = "Message received. I’ll get back to you soon.";
      status.className = "form__status is-ok";
      form.reset();
    } catch {
      status.textContent = "Couldn’t send right now. Email me directly instead.";
      status.className = "form__status is-err";
    }
  });
}

function initCursor() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduce || window.innerWidth < 900) {
    document.body.classList.add("is-mobile");
    return;
  }
  document.body.classList.add("has-cursor");
  const dot = $(".cursor__dot");
  const ring = $(".cursor__ring");
  let x = 0, y = 0, rx = 0, ry = 0;
  window.addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
  const loop = () => {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener("pointerover", (e) => {
    const grow = e.target.closest("a, button, .gallery__item, .card, input, textarea");
    document.body.classList.toggle("cursor-grow", Boolean(grow));
  });
}

function initParticles() {
  const canvas = $("#particles");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let dots = [];
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const n = Math.min(48, Math.floor(window.innerWidth / 40));
    dots = Array.from({ length: n }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15
    }));
  };
  resize();
  window.addEventListener("resize", resize);
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(201,166,107,0.35)";
    dots.forEach((d) => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };
  draw();
}

function initParallax() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const blobs = $$(".bg__blob");
  window.addEventListener("mousemove", (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 16;
    const ny = (e.clientY / window.innerHeight - 0.5) * 16;
    blobs.forEach((b, i) => {
      const k = (i + 1) * 0.35;
      b.style.translate = `${nx * k}px ${ny * k}px`;
    });
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-loading");
  applyConfigText();
  renderSkills();
  renderWork();
  renderSocials();
  renderProjects();
  renderServices();
  initNav();
  initPortfolio();
  initForm();
  initCursor();
  initParticles();
  initParallax();
  if (window.lucide) lucide.createIcons();
  initReveal();
  initCountUp();
  requestAnimationFrame(() => document.body.classList.remove("is-loading"));
});
