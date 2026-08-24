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
    { title: "Quiet Hour", category: "Photography", image: "http", desc: "Po" },
    { title: "Neon Transit", category: "Photography", image: "https://i.pinimg.com/1200x/d7/fd/70/d7fd70e3f239e98c1b278c06d5e4315d.jpg", desc: "A long-exposure street photography shot capturing the energy of a bustling city at night." },
    { title: "Quiet Hour", category: "Photography", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80", desc: "Portrait work built on patience — skin, shadow and a face that is not performing." },
    { title: "Studio Grain", category: "Photography", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80", desc: "Hands, camera and the room around the shot. Process as the picture." },
    { title: "Brand Mark", category: "Graphic Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80", desc: "Identity work: type, space and a mark that can live on a phone and on a wall." },
    { title: "Coast Road", category: "Automotive", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80", desc: "Daylight automotive stills — stance, colour and the landscape doing half the work." },
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
