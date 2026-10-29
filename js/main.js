/* ═════════════════════════════════════════════════════════════════════
   NEW AGE SOLUTIONS (NAS) — MOTIONSITES INTERACTIVE ENGINE & CONTROLLER
   Inspired by: Vaultra, Nova-Agent, Facet-Glass, Velaris, Freight-Scroll
   ═════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initExplosiveParticleIntro();
  initScrollProgressBar();
  initParticleNetwork();
  initNavbar();
  initMobileMenu();
  initCardSpotlightAndTilt();
  initVaultraConsole();
  initScrollReveal();
  initAccordions();
  initStepper();
  initServiceCatalogueFilter();
  initServiceDetailModal();
  initFormHandler();
  initModal();
  initFloatingWhatsApp();
});

function initFloatingWhatsApp() {
  if (document.querySelector('.whatsapp-float')) return;
  const wa = document.createElement('a');
  wa.className = 'whatsapp-float';
  wa.href = 'https://wa.me/27763631820?text=Hi%20NAS%2C%20I%20would%20like%20to%20discuss%20Cyber%20Resilience%20%26%20Managed%20IT%20for%20my%20business.';
  wa.target = '_blank';
  wa.rel = 'noopener noreferrer';
  wa.setAttribute('aria-label', 'Chat with NAS on WhatsApp (076 363 1820)');
  wa.innerHTML = `
    <span class="whatsapp-float-icon"><i class="fa-brands fa-whatsapp"></i></span>
    <span class="whatsapp-float-text">
      <span class="whatsapp-float-label">WhatsApp Us</span>
      <span class="whatsapp-float-number">076 363 1820</span>
    </span>
  `;
  document.body.appendChild(wa);
}

/* 0. EXPLOSIVE PARTICLE SHATTER & REASSEMBLY INTRO SCREEN (Facet-Glass / Velaris style) */
function initExplosiveParticleIntro() {
  const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
  if (!isHome && sessionStorage.getItem('nas_intro_played')) return;
  sessionStorage.setItem('nas_intro_played', '1');

  const loader = document.createElement('div');
  loader.className = 'nas-intro-loader';
  loader.innerHTML = `
    <canvas id="nas-intro-canvas"></canvas>
    <div class="nas-intro-hud">
      <div class="nas-intro-status" id="nas-intro-status">INITIALIZING CYBER RESILIENCE ARCHITECTURE</div>
      <button type="button" class="nas-intro-skip" id="nas-intro-skip">Enter Site →</button>
    </div>
  `;
  document.body.prepend(loader);

  const canvas = loader.querySelector('#nas-intro-canvas');
  const statusEl = loader.querySelector('#nas-intro-status');
  const skipBtn = loader.querySelector('#nas-intro-skip');
  const ctx = canvas.getContext('2d');

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  let finished = false;
  function dismissLoader() {
    if (finished) return;
    finished = true;
    loader.classList.add('loader-exit');
    setTimeout(() => loader.remove(), 620);
  }
  skipBtn.addEventListener('click', dismissLoader);

  const img = new Image();
  img.src = 'nas-logo.png';

  img.onload = () => {
    const sampleSize = Math.min(w, h) * (w < 768 ? 0.48 : 0.40);
    const offCanvas = document.createElement('canvas');
    const offW = 240;
    const offH = 240;
    offCanvas.width = offW;
    offCanvas.height = offH;
    const offCtx = offCanvas.getContext('2d');
    offCtx.drawImage(img, 0, 0, offW, offH);

    const imgData = offCtx.getImageData(0, 0, offW, offH).data;
    const particles = [];
    const step = 3;

    for (let y = 0; y < offH; y += step) {
      for (let x = 0; x < offW; x += step) {
        const idx = (y * offW + x) * 4;
        const r = imgData[idx];
        const g = imgData[idx + 1];
        const b = imgData[idx + 2];
        const a = imgData[idx + 3];
        const brightness = r + g + b;

        if (a > 40 && brightness > 45) {
          const targetX = w * 0.5 + ((x / offW) - 0.5) * sampleSize;
          const targetY = h * 0.46 + ((y / offH) - 0.5) * sampleSize;

          const dx = targetX - w * 0.5;
          const dy = targetY - h * 0.46;
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.75;
          const blastForce = 200 + Math.random() * Math.max(w, h) * 0.52;

          particles.push({
            homeX: targetX,
            homeY: targetY,
            blastX: w * 0.5 + Math.cos(angle) * blastForce,
            blastY: h * 0.46 + Math.sin(angle) * blastForce,
            color: `rgb(${r}, ${g}, ${b})`,
            size: Math.random() * 1.8 + 1.3,
            swirlAngle: Math.random() * Math.PI * 2
          });
        }
      }
    }

    const startTime = performance.now();
    const totalDuration = 2150;

    function animateIntro(now) {
      if (finished) return;
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / totalDuration);

      ctx.clearRect(0, 0, w, h);

      let dispersion = 0;
      if (t < 0.28) {
        const p = t / 0.28;
        dispersion = 1 - Math.pow(1 - p, 3);
        if (statusEl) statusEl.textContent = 'SHATTERING TELEMETRY MATRIX...';
      } else if (t < 0.84) {
        const p = (t - 0.28) / 0.56;
        dispersion = Math.pow(1 - p, 2.7);
        if (statusEl) statusEl.textContent = 'REASSEMBLING NAS CYBER RESILIENCE CORE...';
      } else {
        dispersion = 0;
        if (statusEl) statusEl.textContent = 'RESILIENCE CORE ONLINE';
      }

      const glowRadius = sampleSize * (0.45 + dispersion * 0.75);
      const glow = ctx.createRadialGradient(w * 0.5, h * 0.46, 8, w * 0.5, h * 0.46, glowRadius);
      glow.addColorStop(0, `rgba(125, 211, 252, ${0.22 * (1 - dispersion * 0.5)})`);
      glow.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.46, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        const swirl = Math.sin(t * Math.PI) * 28 * dispersion;
        const curX = pt.homeX + (pt.blastX - pt.homeX) * dispersion + Math.cos(pt.swirlAngle + t * 4.5) * swirl;
        const curY = pt.homeY + (pt.blastY - pt.homeY) * dispersion + Math.sin(pt.swirlAngle + t * 4.5) * swirl;

        ctx.fillStyle = pt.color;
        ctx.fillRect(curX, curY, pt.size, pt.size);
      }

      if (t > 0.78) {
        const lockAlpha = Math.min(1, (t - 0.78) / 0.18);
        ctx.save();
        ctx.globalAlpha = lockAlpha;
        ctx.globalCompositeOperation = 'screen';
        ctx.drawImage(img, w * 0.5 - sampleSize * 0.5, h * 0.46 - sampleSize * 0.5, sampleSize, sampleSize);
        ctx.restore();
      }

      if (t < 1) {
        requestAnimationFrame(animateIntro);
      } else {
        dismissLoader();
      }
    }

    requestAnimationFrame(animateIntro);
  };

  img.onerror = () => dismissLoader();
}

/* 1. TOP SCROLL LASER PROGRESS BAR */
function initScrollProgressBar() {
  let bar = document.querySelector('.scroll-progress-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    document.body.prepend(bar);
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }, { passive: true });
}

/* 2. LIVE SCROLL-REACTIVE 3D GEODESIC WIREFRAME & POINT-CLOUD GLOBE (Velaris + Vaultra) */
function initParticleNetwork() {
  const bgCanvasContainer = document.querySelector('.bg-canvas');
  if (!bgCanvasContainer) return;

  // Subtle atmospheric Vaultra globe horizon video layer
  const video = document.createElement('video');
  video.className = 'live-bg-video-layer';
  video.src = 'vaultra-globe.mp4';
  video.poster = 'vaultra-globe.jpg';
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  video.setAttribute('aria-hidden', 'true');
  bgCanvasContainer.prepend(video);
  video.play().catch(() => {});

  const vignette = document.createElement('div');
  vignette.className = 'live-bg-vignette';
  bgCanvasContainer.appendChild(vignette);

  // Interactive 3D Geodesic Wireframe & Point-Cloud Sphere Canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'nas-particle-canvas';
  bgCanvasContainer.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / width - 0.5) * 2;
    mouse.targetY = (e.clientY / height - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  let scrollProgress = 0;
  let smoothScroll = 0;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;

  window.addEventListener('scroll', () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    scrollVelocity = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
  }, { passive: true });

  // Build 3D Fibonacci Geodesic Point-Cloud & Triangulated Wireframe Struts (Velaris + Vaultra)
  const numSpherePoints = window.innerWidth < 768 ? 220 : 420;
  const spherePoints = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const nodeLabels = ['NODE.JHB.01', 'M365.VAULT', 'EDR.SHIELD', 'RMM.TELEMETRY', 'DR.STANDBY', 'BACKUP.SYNC'];

  for (let i = 0; i < numSpherePoints; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / numSpherePoints);
    const isMajorVertex = i % 24 === 0;
    const isAccent = i % 7 === 0;
    spherePoints.push({
      x: Math.cos(theta) * Math.sin(phi),
      y: Math.cos(phi),
      z: Math.sin(theta) * Math.sin(phi),
      size: isMajorVertex ? 2.4 : 1.25,
      isMajorVertex,
      label: isMajorVertex && (i / 24) < nodeLabels.length ? nodeLabels[Math.floor(i / 24)] : null,
      color: isMajorVertex ? '#f8fafc' : (isAccent ? '#a5b4fc' : (i % 2 === 0 ? '#7dd3fc' : '#6366f1')),
      pulseOffset: Math.random() * Math.PI * 2
    });
  }

  // Precompute Geodesic Wireframe Edges between neighboring points on the unit sphere
  const wireframeEdges = [];
  const maxEdgeDist = window.innerWidth < 768 ? 0.34 : 0.25;
  for (let i = 0; i < spherePoints.length; i++) {
    let connections = 0;
    for (let j = i + 1; j < spherePoints.length; j++) {
      const dx = spherePoints[i].x - spherePoints[j].x;
      const dy = spherePoints[i].y - spherePoints[j].y;
      const dz = spherePoints[i].z - spherePoints[j].z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < maxEdgeDist) {
        wireframeEdges.push([i, j]);
        connections++;
        if (connections >= 3) break;
      }
    }
  }

  // Build 3D Orbital Equatorial Rings
  const ringPoints = [];
  const numRingParticles = 110;
  for (let i = 0; i < numRingParticles; i++) {
    const angle = (i / numRingParticles) * Math.PI * 2;
    const radiusMult = i % 2 === 0 ? 1.26 : 1.44;
    ringPoints.push({
      angle,
      radiusMult,
      tilt: i % 2 === 0 ? 0.26 : -0.20,
      speed: i % 2 === 0 ? 0.0032 : -0.0024,
      color: i % 3 === 0 ? '#f8fafc' : (i % 3 === 1 ? '#7dd3fc' : '#818cf8')
    });
  }

  let rotY = 0;
  let time = 0;

  function renderFrame() {
    time += 0.016;
    smoothScroll += (scrollProgress - smoothScroll) * 0.28;
    scrollVelocity *= 0.90;
    mouse.x += (mouse.targetX - mouse.x) * 0.22;
    mouse.y += (mouse.targetY - mouse.y) * 0.22;

    ctx.clearRect(0, 0, width, height);

    const vidScale = 1 + smoothScroll * 0.22;
    const vidTranslateY = -smoothScroll * 90;
    video.style.transform = `scale(${vidScale.toFixed(3)}) translateY(${vidTranslateY.toFixed(1)}px)`;

    const baseRadius = Math.min(width, height) * (width < 768 ? 0.42 : 0.46);
    const radiusWave = 1 + Math.sin(smoothScroll * Math.PI) * 0.28;
    const globeRadius = baseRadius * radiusWave;

    const centerX = width * 0.5 + mouse.x * 54 + Math.sin(smoothScroll * Math.PI * 1.5) * (width * 0.08);
    const startY = height * 0.84;
    const midY = height * 0.48;
    const centerY = startY + (midY - startY) * Math.sin(smoothScroll * Math.PI * 0.88) + mouse.y * 42;

    // 1. Atmospheric Obsidian & Ice-Indigo Horizon Halo
    const haloGrad = ctx.createRadialGradient(
      centerX,
      centerY,
      globeRadius * 0.2,
      centerX,
      centerY,
      globeRadius * 1.4
    );
    haloGrad.addColorStop(0, 'rgba(125, 211, 252, 0.11)');
    haloGrad.addColorStop(0.45, 'rgba(99, 102, 241, 0.09)');
    haloGrad.addColorStop(0.75, 'rgba(139, 92, 246, 0.05)');
    haloGrad.addColorStop(1, 'rgba(3, 4, 7, 0)');

    ctx.fillStyle = haloGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, globeRadius * 1.4, 0, Math.PI * 2);
    ctx.fill();

    // 2. 3D Rotation Matrices (Scroll + Idle Spin + Cursor Tilt)
    rotY += 0.0042 + scrollVelocity * 0.0025;
    const rotX = -0.28 + smoothScroll * 1.05 + mouse.y * 0.35;
    const rotZ = smoothScroll * 0.38 + mouse.x * 0.22;

    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

    const projected = new Array(spherePoints.length);

    // 3. Project 3D Geodesic Vertices
    for (let i = 0; i < spherePoints.length; i++) {
      const p = spherePoints[i];

      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.z * cosY + p.x * sinY;
      const y1 = p.y;

      const y2 = y1 * cosX - z1 * sinX;
      const z2 = z1 * cosX + y1 * sinX;
      const x2 = x1;

      const x3 = x2 * cosZ - y2 * sinZ;
      const y3 = y2 * cosZ + x2 * sinZ;
      const z3 = z2;

      const perspective = 980 / (980 - z3 * globeRadius);
      const sx = centerX + x3 * globeRadius * perspective;
      const sy = centerY + y3 * globeRadius * perspective;

      projected[i] = { sx, sy, z3, perspective };
    }

    // 4. Draw Geodesic Triangulated Wireframe Lattice (Velaris Architectural Mesh)
    ctx.lineWidth = 0.7;
    for (let e = 0; e < wireframeEdges.length; e++) {
      const [i, j] = wireframeEdges[e];
      const a = projected[i];
      const b = projected[j];
      const avgZ = (a.z3 + b.z3) * 0.5;
      if (avgZ > -0.25) {
        const edgeAlpha = Math.max(0.02, Math.min(0.18, (avgZ + 0.35) * 0.16));
        ctx.strokeStyle = `rgba(148, 163, 184, ${edgeAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();
      }
    }

    // 5. Draw Geodesic Nodes & Subtle 3D Telemetry Coordinates
    ctx.font = '600 9px "JetBrains Mono", Consolas, monospace';
    for (let i = 0; i < spherePoints.length; i++) {
      const p = spherePoints[i];
      const proj = projected[i];
      const depthAlpha = Math.max(0.06, (proj.z3 + 1.15) * 0.44);

      ctx.beginPath();
      const pulse = 1 + Math.sin(time * 2.2 + p.pulseOffset) * 0.2;
      ctx.arc(proj.sx, proj.sy, p.size * proj.perspective * pulse, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.min(0.9, depthAlpha);
      ctx.fill();

      if (p.label && proj.z3 > 0.35 && width > 768) {
        ctx.globalAlpha = Math.min(0.45, (proj.z3 - 0.35) * 0.7);
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText(p.label, proj.sx + 7, proj.sy + 3);
      }
    }

    // 6. Render Orbital Equatorial Rings (Vaultra Horizon Rings)
    for (let i = 0; i < ringPoints.length; i++) {
      const rp = ringPoints[i];
      rp.angle += rp.speed + scrollVelocity * 0.0004;

      const r = globeRadius * rp.radiusMult;
      const rx = Math.cos(rp.angle) * r;
      const rz = Math.sin(rp.angle) * r;
      const ry = Math.sin(rp.angle * 2) * (r * rp.tilt);

      const ry2 = ry * cosX - rz * sinX;
      const rz2 = rz * cosX + ry * sinX;
      const persp = 980 / (980 - rz2);

      const px = centerX + rx * persp;
      const py = centerY + ry2 * persp;

      ctx.globalAlpha = Math.max(0.10, Math.min(0.7, (rz2 / r + 1.2) * 0.38));
      ctx.fillStyle = rp.color;
      ctx.beginPath();
      ctx.arc(px, py, 1.6 * persp, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}

/* 3. STICKY NAVBAR SCROLL OBSERVER */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* 4. MOBILE MENU DRAWER & DROPDOWN TOGGLE */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  const mobileLinks = mobileMenu.querySelectorAll('a:not(.mobile-sub-toggle)');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.style.overflow = '';
    });
  });
}

/* 5. FACET-GLASS SPECULAR CURSOR SPOTLIGHT */
function initCardSpotlightAndTilt() {
  const cards = document.querySelectorAll('.glass-card, .pkg-card, .value-card, .addon-card, .step-card, .service-catalog-card, .bento-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* 6. VAULTRA / NOVA-AGENT INTERACTIVE HERO COMMAND CONSOLE & AUTO-TYPING PROMPT */
function initVaultraConsole() {
  // Nova-Agent Auto-Typing Terminal Loop
  const typingEl = document.getElementById('nova-typing-text');
  if (typingEl) {
    const prompts = [
      'Verifying Microsoft 365 & workstation backup schedules...',
      'Monitoring endpoint anti-malware & ransomware behavioral policies...',
      'Auditing recovery readiness & off-site cloud retention quotas...',
      'Checking RMM patch status across managed client endpoints...'
    ];
    let pIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function typeStep() {
      const current = prompts[pIdx];
      if (!deleting) {
        charIdx++;
        typingEl.textContent = current.slice(0, charIdx);
        if (charIdx >= current.length) {
          deleting = true;
          setTimeout(typeStep, 2400);
          return;
        }
        setTimeout(typeStep, 34);
      } else {
        charIdx -= 2;
        if (charIdx <= 0) {
          charIdx = 0;
          deleting = false;
          pIdx = (pIdx + 1) % prompts.length;
          typingEl.textContent = '';
          setTimeout(typeStep, 260);
          return;
        }
        typingEl.textContent = current.slice(0, charIdx);
        setTimeout(typeStep, 16);
      }
    }
    typeStep();
  }

  const tabs = document.querySelectorAll('.console-tab');
  const panels = document.querySelectorAll('.console-panel');
  if (!tabs.length || !panels.length) return;

  let currentIdx = 0;
  let autoCycle = setInterval(nextTab, 4800);

  function activateTab(idx) {
    currentIdx = idx;
    tabs.forEach((t, i) => t.classList.toggle('active', i === idx));
    panels.forEach((p, i) => p.classList.toggle('active', i === idx));
  }

  function nextTab() {
    activateTab((currentIdx + 1) % tabs.length);
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      clearInterval(autoCycle);
      activateTab(idx);
    });
  });
}

/* 7. FREIGHT-SCROLL / TERRENA CHOREOGRAPHED SCROLL REVEAL */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.glass-card, .pkg-card, .value-card, .addon-card, .step-card, .service-catalog-card, .statement-banner, .h2-section'
  );

  if (!('IntersectionObserver' in window)) return;

  targets.forEach((el, idx) => {
    el.classList.add('reveal-on-scroll');
    el.style.transitionDelay = `${(idx % 4) * 65}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* 8. FAQ ACCORDION CONTROLLER */
function initAccordions() {
  const faqHeaders = document.querySelectorAll('.faq-header');

  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });
}

/* 9. DEFENSE IN DEPTH STEPPER INTERACTION */
function initStepper() {
  const steps = document.querySelectorAll('.step-card');
  steps.forEach(step => {
    step.addEventListener('mouseenter', () => {
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });
}

/* 10. INTERACTIVE SERVICE CATALOGUE FILTER */
function initServiceCatalogueFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categorySections = document.querySelectorAll('[data-catalog-section]');
  const serviceCards = document.querySelectorAll('[data-service-card]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      if (filter === 'all') {
        categorySections.forEach(sec => (sec.style.display = ''));
        serviceCards.forEach(c => (c.style.display = ''));
        return;
      }

      // Check if filtering by package compatibility tag or by category
      if (filter.startsWith('pkg-')) {
        const pkgKey = filter.replace('pkg-', '');
        categorySections.forEach(sec => (sec.style.display = ''));
        serviceCards.forEach(c => {
          const tags = (c.getAttribute('data-pkg') || '').split(',');
          c.style.display = tags.includes(pkgKey) ? '' : 'none';
        });
      } else {
        serviceCards.forEach(c => (c.style.display = ''));
        categorySections.forEach(sec => {
          const cat = sec.getAttribute('data-catalog-section');
          sec.style.display = cat === filter ? '' : 'none';
        });
      }
    });
  });
}

/* 11. 10-POINT SERVICE DETAIL MODAL ENGINE */
const SERVICE_CATALOG_DETAILS = {
  'workstation-backup': {
    title: 'Workstation Backup',
    badge: 'INCLUDED IN ESSENTIAL • BUSINESS SECURE • COMPLETE (SUBJECT TO CONFIG)',
    whatItIs: 'Managed backup service that protects agreed business files, folders or system volumes on supported Windows and macOS workstations.',
    problem: 'Accidental deletion, laptop hardware failure, file corruption or ransomware can cause permanent loss of critical work stored locally on user computers.',
    whatNasDoes: 'NAS configures automated backup schedules, monitors backup job completion alerts, and provides assisted recovery support when files need to be restored.',
    included: 'Configured workstation backup plan, 300 GB workstation storage allocation (subject to validation), backup health monitoring, status reporting, and assisted file recovery.',
    notIncluded: 'Full-machine bare-metal restore to dissimilar hardware unless Full-Machine Backup is specifically enabled, licensed and validated.',
    whoItSuits: 'Businesses whose employees store important documents, accounting files or operational data on laptops and desktops.',
    howItWorks: 'A lightweight agent backs up agreed directories or volumes according to schedule to encrypted cloud storage, overseen by NAS.',
    packageStatus: 'Core package inclusion across NAS Essential, Business Secure and Complete, subject to confirmed configuration.',
    faq: 'Does workstation backup include entire-machine recovery? Only where full-machine backup is explicitly enabled, licensed and validated for the device.'
  },
  'full-machine-backup': {
    title: 'Full-Machine Backup & Recovery',
    badge: 'SUBJECT TO TECHNICAL & LICENSING VALIDATION',
    whatItIs: 'Image-level backup that captures the operating system volume, installed applications, system settings and data on supported workstations.',
    problem: 'When a workstation suffers complete drive failure or theft, reinstalling Windows and all line-of-business software manually can take days.',
    whatNasDoes: 'Where supported and configured, NAS captures system-image recovery points and assists in restoring the image to compatible or supported replacement hardware.',
    included: 'Full-image backup configuration, recovery point monitoring, and assisted image restoration to supported hardware.',
    notIncluded: 'Replacement laptop hardware costs, third-party software re-licensing fees, or guaranteed seamless transfer to incompatible hardware architectures.',
    whoItSuits: 'Executives, engineers, accountants and key personnel with complex local software setups that cannot afford lengthy rebuild times.',
    howItWorks: 'Block-level disk snapshots are taken on an agreed schedule so either individual files or the entire system volume can be recovered.',
    packageStatus: 'Subject to technical and licensing validation during assessment.',
    faq: 'Will every application transfer seamlessly to a new laptop? Hardware drivers, OEM licences and certain security tokens may require re-activation after image restoration.'
  },
  'm365-backup': {
    title: 'Microsoft 365 Backup',
    badge: 'INCLUDED IN ESSENTIAL • BUSINESS SECURE • COMPLETE',
    whatItIs: 'Independent cloud-to-cloud backup for supported Microsoft 365 business data, including Exchange Online mailboxes, OneDrive, SharePoint and Teams.',
    problem: 'Microsoft 365 provides platform availability, but accidental deletion, malicious insider purging, or retention policy expiration can permanently erase business emails and files.',
    whatNasDoes: 'NAS configures dedicated cloud backup for covered M365 accounts, monitors backup health, and performs point-in-time restores of emails or files on request.',
    included: 'Automated cloud backup of supported M365 workloads, hosted backup storage per selected licence terms, monitoring, and assisted item-level recovery.',
    notIncluded: 'Microsoft 365 user subscription licences themselves, or automatic backup of every Azure AD/Entra identity and tenant configuration setting.',
    whoItSuits: 'Any business relying on Microsoft 365 for daily email communication, document collaboration and client records.',
    howItWorks: 'Secure cloud-to-cloud API synchronization captures recovery points independently of Microsoft’s native recycle bin.',
    packageStatus: 'Included in NAS Essential, Business Secure and Complete, subject to confirmed package scope.',
    faq: 'Does Microsoft 365 automatically back up all our data? Microsoft provides infrastructure resilience and limited retention, not an independent managed backup strategy for every recovery scenario.'
  },
  'google-workspace-backup': {
    title: 'Google Workspace Backup',
    badge: 'AVAILABLE AS AN ADD-ON • SUBJECT TO ASSESSMENT',
    whatItIs: 'Independent cloud-to-cloud backup protecting supported Gmail mailboxes, Google Drive files, Shared Drives, Contacts and Calendars.',
    problem: 'Deleted Google Drive folders, departing employee account removals or ransomware sync can result in irreversible cloud data loss.',
    whatNasDoes: 'NAS scopes and configures automated Google Workspace backup, monitors protection status, and assists with granular restoration.',
    included: 'Configured Google Workspace backup, status monitoring, and assisted recovery of protected items.',
    notIncluded: 'Google Workspace licensing fees or third-party marketplace app configurations.',
    whoItSuits: 'Businesses operating on Google Workspace that need independent data retention and recovery assurance.',
    howItWorks: 'Encrypted cloud-to-cloud connectors back up Workspace user data on a daily schedule.',
    packageStatus: 'Available as an add-on, subject to assessment and confirmation.',
    faq: 'Can we restore a former employee’s Gmail messages to another user? Yes, supported mailbox items can be restored or exported according to agreed scope.'
  },
  'server-backup': {
    title: 'Server Backup',
    badge: 'AVAILABLE AS A SEPARATELY SCOPED ADD-ON',
    whatItIs: 'Managed backup protection for physical Windows and Linux business servers hosting files, line-of-business applications or databases.',
    problem: 'Server hardware failure, RAID corruption or ransomware can halt multi-user operations across the entire company.',
    whatNasDoes: 'NAS designs a server backup schedule around your workload, monitors backup completion, and coordinates server volume or file restoration.',
    included: 'Configured server backup plan, backup health oversight, status reporting, and assisted recovery coordination.',
    notIncluded: 'Cloud failover compute infrastructure unless a Disaster Recovery solution is separately scoped and contracted.',
    whoItSuits: 'Businesses running on-premises file servers, accounting servers (such as Pastel/Sage), or domain controllers.',
    howItWorks: 'Server agents capture volume and file backups to local NAS storage, cloud storage, or a hybrid target.',
    packageStatus: 'Available as a separately scoped add-on.',
    faq: 'How is Server Backup priced? Final pricing depends on server count, data volume, storage targets and recovery requirements confirmed during assessment.'
  },
  'vm-backup': {
    title: 'Virtual Machine Backup',
    badge: 'AVAILABLE AS A SEPARATELY SCOPED ADD-ON',
    whatItIs: 'Configured backup protection for supported Hyper-V and VMware virtual machine workloads.',
    problem: 'Unprotected virtual machines risk simultaneous multi-workload downtime if the host hypervisor or datastore fails.',
    whatNasDoes: 'NAS configures host- or agent-based VM backups, monitors snapshot health, and supports full-VM or granular file recovery.',
    included: 'VM backup configuration, monitoring, reporting, and assisted VM recovery.',
    notIncluded: 'Hypervisor licensing, host hardware replacement, or instant cloud failover unless Disaster Recovery is scoped.',
    whoItSuits: 'SMEs running virtualized server environments on Hyper-V or VMware.',
    howItWorks: 'Snapshots virtual machines at the hypervisor or guest level and replicates recovery points to secure storage.',
    packageStatus: 'Available as a separately scoped add-on.',
    faq: 'Can individual files be restored from a VM backup without restoring the whole server? Yes, granular file recovery is supported where configured.'
  },
  'mobile-backup': {
    title: 'Mobile Backup',
    badge: 'AVAILABLE AS AN ADD-ON • SUBJECT TO VALIDATION',
    whatItIs: 'Backup protection for supported iOS and Android mobile business data such as contacts, photos, calendars and reminders.',
    problem: 'Lost or damaged company phones can lead to lost client contacts and business media.',
    whatNasDoes: 'NAS provisions mobile backup access and assists users in migrating or restoring covered mobile data.',
    included: 'Supported mobile app backup configuration and self-service or assisted restoration.',
    notIncluded: 'Full operating system clones, WhatsApp third-party chat databases, or MDM hardware locking unless separately scoped.',
    whoItSuits: 'Field teams, directors and sales staff capturing business contacts and media on mobile devices.',
    howItWorks: 'The mobile protection app backs up covered data categories over Wi-Fi or cellular data to secure cloud storage.',
    packageStatus: 'Available as an add-on, subject to validation.',
    faq: 'Does mobile backup cover every app on a phone? No, it protects supported data categories permitted by iOS and Android security boundaries.'
  },
  'additional-storage': {
    title: 'Additional Backup Storage',
    badge: 'AVAILABLE AS A SEPARATELY PRICED ADD-ON',
    whatItIs: 'Scalable cloud backup storage capacity beyond the standard allocation included in your core package.',
    problem: 'Growing businesses, engineering firms and media-heavy teams often exceed standard workstation or server storage allocations.',
    whatNasDoes: 'NAS monitors storage consumption trends and provisions additional encrypted cloud storage capacity as required.',
    included: 'Expanded cloud backup storage quota and capacity monitoring.',
    notIncluded: 'Local NAS hardware appliances unless separately quoted.',
    whoItSuits: 'Businesses with large CAD files, legal archives, medical imaging or long-term retention requirements.',
    howItWorks: 'Seamlessly expands your tenant storage pool without interrupting existing backup schedules.',
    packageStatus: 'Available as a separately priced add-on.',
    faq: 'How do we know if we need extra storage? NAS reviews your data volume during the initial assessment and reports on storage usage monthly.'
  },
  'endpoint-security': {
    title: 'Endpoint Security',
    badge: 'INCLUDED IN BUSINESS SECURE • COMPLETE',
    whatItIs: 'Managed endpoint security controls designed to help detect, block and prevent malware, ransomware and malicious activity on supported business computers.',
    problem: 'Relying on unmanaged consumer antivirus leaves business laptops exposed to modern ransomware, credential theft and zero-day exploits.',
    whatNasDoes: 'NAS deploys and configures endpoint protection policies, reviews security alerts during agreed service hours, and assists with threat remediation.',
    included: 'Anti-malware and anti-ransomware protection, centralized policy management, alert monitoring within agreed scope, and security status reporting.',
    notIncluded: '24/7 human SOC threat hunting unless Managed Detection & Response (MDR) is separately contracted, or guarantee of 100% immunity against all cyber threats.',
    whoItSuits: 'Businesses wanting centrally managed, business-grade endpoint security across all staff laptops and desktops.',
    howItWorks: 'Behavioral anti-ransomware and real-time threat prevention engines run on each protected device, reporting centrally to NAS.',
    packageStatus: 'Included in NAS Business Secure and NAS Complete, subject to confirmed service configuration.',
    faq: 'Does this replace our existing antivirus? Yes, NAS configures a unified protection agent so backup and endpoint security work together without software conflicts.'
  },
  'advanced-endpoint': {
    title: 'Advanced Endpoint Protection',
    badge: 'INCLUDED IN COMPLETE (SUBJECT TO VALIDATION) • ADD-ON',
    whatItIs: 'Enhanced endpoint security capabilities offering deeper threat visibility, extended detection controls and integrated protection for higher-risk environments.',
    problem: 'Businesses handling sensitive financial, legal or personal data require stronger visibility into complex attack chains beyond standard antivirus.',
    whatNasDoes: 'NAS configures advanced protection policies, monitors elevated threat telemetry, and coordinates incident isolation and recovery.',
    included: 'Ultimate Workstation protection capabilities (subject to licence validation), enhanced threat detection, and managed security oversight.',
    notIncluded: 'Guaranteed prevention of every possible cyber incident or formal regulatory compliance certification.',
    whoItSuits: 'Firms with sensitive client data seeking broader endpoint defense and deeper security oversight.',
    howItWorks: 'Combines multi-layered endpoint defense with integrated backup recovery points.',
    packageStatus: 'Included in NAS Complete (subject to final licence validation) or available via assessed proposal.',
    faq: 'Can we upgrade from Business Secure to Advanced Endpoint Protection later? Yes, licences can be upgraded as your security requirements mature.'
  },
  'mdr': {
    title: 'Managed Detection & Response (MDR)',
    badge: 'AVAILABLE AS AN ADD-ON • SUBJECT TO ASSESSMENT',
    whatItIs: 'Advanced security monitoring, threat investigation and response guidance delivered through a supported MDR service arrangement.',
    problem: 'Sophisticated cyber threats can bypass automated blocks and require deeper investigation to contain before damage spreads.',
    whatNasDoes: 'NAS scopes and coordinates supported MDR capabilities to investigate suspicious alerts and execute agreed containment actions such as host isolation.',
    included: 'Supported MDR alert triage, threat investigation insights, and agreed response coordination.',
    notIncluded: 'Unverified 24/7 onsite physical response or guaranteed instant resolution of every security event.',
    whoItSuits: 'Businesses requiring elevated security monitoring and structured incident investigation beyond standard endpoint protection.',
    howItWorks: 'Endpoint telemetry is analyzed to surface high-priority security incidents with actionable containment guidance.',
    packageStatus: 'Available as an add-on, subject to confirmation of the selected MDR service, operating model, response scope and licensing.',
    faq: 'Is MDR required for every small business? Not always—many SMEs start with NAS Business Secure and evaluate MDR if risk or governance demands it.'
  },
  'vulnerability-assessment': {
    title: 'Vulnerability Assessment',
    badge: 'ASSESSMENT-LED SERVICE • INCLUDED IN SELECTED PLANS',
    whatItIs: 'Systematic scanning and review of supported systems and software to identify known security weaknesses, missing patches and configuration gaps.',
    problem: 'Unpatched operating systems and outdated third-party software are among the most common entry points for ransomware.',
    whatNasDoes: 'NAS scans supported devices, identifies prioritized vulnerabilities, and recommends practical remediation or patch actions.',
    included: 'Configured vulnerability scanning on supported endpoints and summary reporting of identified risks.',
    notIncluded: 'Formal manual penetration testing, ethical hacking exploitation, source-code auditing, or formal compliance certification audits.',
    whoItSuits: 'Any business wanting visibility into outdated software and security weaknesses before attackers exploit them.',
    howItWorks: 'Automated assessment tooling checks installed software versions and OS patch states against known vulnerability databases.',
    packageStatus: 'Assessment-led service; ongoing scanning available within selected managed plans.',
    faq: 'Is a vulnerability assessment the same as a penetration test? No. A vulnerability assessment identifies known software and configuration weaknesses, whereas a penetration test simulates active exploitation.'
  },
  'security-awareness': {
    title: 'Security Awareness Training',
    badge: 'INCLUDED IN BUSINESS SECURE • COMPLETE',
    whatItIs: 'Structured employee security education and phishing awareness training designed to strengthen the human layer of cybersecurity.',
    problem: 'Employees are the primary target of phishing emails, fake invoice scams, and credential harvesting attacks.',
    whatNasDoes: 'NAS enrolls covered users into ongoing training modules and phishing awareness exercises, providing management with progress reporting.',
    included: 'User enrollment in bite-sized security awareness courses, periodic phishing simulations (where configured), and completion reporting.',
    notIncluded: 'Guaranteed elimination of human error or accredited university/SETA qualification certificates.',
    whoItSuits: 'Every business whose staff use email, browse the web, or handle financial and client communications.',
    howItWorks: 'Users receive periodic, easy-to-follow training lessons and simulated phishing checks to build lasting security habits.',
    packageStatus: 'Included in NAS Business Secure and NAS Complete, subject to confirmed package configuration.',
    faq: 'Will training disrupt our staff’s workday? No—modules are short, practical and designed to be completed in a few minutes.'
  },
  'm365-security-mgmt': {
    title: 'Microsoft 365 Security & Management',
    badge: 'SUBJECT TO LICENCE, PERMISSIONS & AGREED SCOPE',
    whatItIs: 'Assessment and ongoing management of supported Microsoft 365 security settings, user access controls and tenant administration.',
    problem: 'Default Microsoft 365 settings often leave businesses exposed to mailbox forwarding rules, weak MFA enforcement and over-privileged accounts.',
    whatNasDoes: 'NAS reviews and manages agreed M365 security configurations, user access policies and basic tenant administration.',
    included: 'Agreed M365 security policy administration, user access reviews, and configuration oversight within supported scope.',
    notIncluded: 'Custom SharePoint intranet development, PowerBI engineering, or Microsoft licence subscription fees.',
    whoItSuits: 'Businesses using Microsoft 365 that lack dedicated internal cloud administrators.',
    howItWorks: 'NAS uses authorized admin permissions and management tooling to oversee agreed tenant security parameters.',
    packageStatus: 'Subject to selected licence, permissions, configuration and agreed scope.',
    faq: 'Do we need specific Microsoft licences for advanced security features? Certain Microsoft security controls depend on whether your business uses Business Basic, Standard or Premium.'
  },
  'm365-posture': {
    title: 'Microsoft 365 Security Posture Management',
    badge: 'SUBJECT TO TECHNICAL & LICENSING VALIDATION',
    whatItIs: 'Continuous or periodic review of your Microsoft 365 tenant security baseline against recommended security practices.',
    problem: 'As users are added and settings change over time, cloud tenants drift into insecure configurations without anyone noticing.',
    whatNasDoes: 'NAS evaluates supported M365 security baselines, flags risky configuration drift, and recommends or applies agreed hardening steps.',
    included: 'Tenant posture review, baseline risk identification, and practical hardening recommendations.',
    notIncluded: 'Automatic protection of every third-party OAuth app or custom enterprise Azure infrastructure.',
    whoItSuits: 'Growing businesses wanting assurance that their Microsoft 365 environment is configured securely.',
    howItWorks: 'Monitors tenant security policies—such as MFA status, external sharing rules and admin roles—against best-practice baselines.',
    packageStatus: 'Subject to technical and licensing validation.',
    faq: 'Does M365 backup cover posture management? No—backup protects data copies, while posture management focuses on tenant security configurations.'
  },
  'identity-access': {
    title: 'Identity & Access Protection',
    badge: 'ASSESSMENT-LED • SUBJECT TO CONFIGURATION',
    whatItIs: 'Review and strengthening of user authentication, Multi-Factor Authentication (MFA) and account access controls.',
    problem: 'Stolen passwords and compromised user logins are the number-one cause of business email compromise (BEC) and fraudulent payment redirects.',
    whatNasDoes: 'NAS assesses your current login security, helps implement MFA and conditional access where supported by your licensing, and reviews privileged accounts.',
    included: 'Identity security review, MFA enforcement guidance, and admin account hygiene recommendations.',
    notIncluded: 'Hardware FIDO2 security keys or third-party enterprise IAM licences unless separately quoted.',
    whoItSuits: 'All businesses using cloud email, accounting platforms and remote access.',
    howItWorks: 'Aligns user login policies with least-privilege principles and multi-factor verification.',
    packageStatus: 'Assessment-led; exact capabilities depend on selected services and Microsoft licensing.',
    faq: 'Can NAS help us roll out MFA without locking out our staff? Yes, we plan phased rollouts with clear user guidance.'
  },
  'rmm': {
    title: 'Remote Monitoring & Management (RMM)',
    badge: 'AVAILABLE WITHIN MANAGED IT • SUBJECT TO SCOPE',
    whatItIs: 'Centralized platform enabling NAS to monitor device health, receive system alerts, track hardware inventory and perform remote maintenance on supported computers.',
    problem: 'Without centralized monitoring, IT issues go unnoticed until an employee’s computer crashes or runs out of disk space.',
    whatNasDoes: 'NAS deploys RMM agents to supported endpoints, reviews configured health alerts, and executes approved background maintenance.',
    included: 'Device health monitoring, configured alerting, hardware/software inventory visibility, and background maintenance tasks.',
    notIncluded: 'Unlimited onsite IT callouts, full network/firewall engineering, server administration, or 24/7 helpdesk unless explicitly contracted.',
    whoItSuits: 'Businesses wanting proactive visibility and structured maintenance across their company laptops and desktops.',
    howItWorks: 'A lightweight management agent reports device health metrics and patch status to the NAS management console.',
    packageStatus: 'Available within selected Managed IT services and Business Secure / Complete where configured.',
    faq: 'Does RMM slow down user computers? No, the agent uses minimal system resources and runs maintenance silently in the background.'
  },
  'patch-management': {
    title: 'Patch Management',
    badge: 'INCLUDED IN SELECTED MANAGED IT & SECURITY PLANS',
    whatItIs: 'Automated monitoring and deployment of approved operating system and supported third-party software updates.',
    problem: 'Employees frequently postpone Windows and application updates, leaving known security vulnerabilities unpatched for months.',
    whatNasDoes: 'NAS establishes an agreed update policy, schedules patch deployments, and monitors compliance across supported workstations.',
    included: 'OS patch scheduling, supported third-party application updates, and patch compliance reporting.',
    notIncluded: 'Manual updates for bespoke legacy software or proprietary ERP systems that do not support automated patching.',
    whoItSuits: 'Businesses wanting consistent, centrally managed software updates without relying on staff to click update prompts.',
    howItWorks: 'Updates are tested and deployed during agreed maintenance windows to minimize user disruption.',
    packageStatus: 'Available within Managed IT packages and selected cyber resilience plans.',
    faq: 'Will computers restart in the middle of a client meeting? NAS configures reboot policies and maintenance windows to avoid unexpected daytime restarts.'
  },
  'remote-it-support': {
    title: 'Remote IT Support',
    badge: 'AVAILABLE IN MANAGED IT SUPPORT & COMPLETE MANAGED IT',
    whatItIs: 'Agreed remote helpdesk assistance to help employees troubleshoot supported workstation and software issues during business hours.',
    problem: 'When staff encounter printer errors, email glitches or software issues, productivity stops without a clear support channel.',
    whatNasDoes: 'NAS technicians connect remotely (with user permission) during agreed service hours to diagnose and resolve covered IT issues.',
    included: 'Remote troubleshooting for supported workstations, operating systems and standard office software within agreed scope and hours.',
    notIncluded: 'Onsite hardware repairs, structured cabling, third-party vendor software development, or after-hours support unless separately agreed.',
    whoItSuits: 'Growing SMEs without internal IT staff that want reliable remote support for their team.',
    howItWorks: 'Users log a support request and a NAS technician initiates a secure remote session to resolve the issue.',
    packageStatus: 'Included in Managed IT Support and Complete Managed IT packages; available as an add-on.',
    faq: 'Can NAS work alongside our existing onsite IT person? Yes, we can provide remote endpoint management and backup while your technician handles physical hardware.'
  },
  'it-asset-mgmt': {
    title: 'IT Asset Management',
    badge: 'AVAILABLE WITHIN MANAGED IT SERVICES',
    whatItIs: 'Ongoing tracking and reporting of managed computers, hardware specifications, operating systems and installed software.',
    problem: 'Many business owners do not have an accurate list of which laptops exist, how old they are, or what software is installed across the company.',
    whatNasDoes: 'NAS maintains an up-to-date inventory of managed endpoints and provides periodic reporting to support budgeting and lifecycle planning.',
    included: 'Automated hardware and software inventory for managed devices and periodic asset reporting.',
    notIncluded: 'Physical barcode tagging of office furniture or tracking of unmanaged personal devices.',
    whoItSuits: 'Operations and finance managers who need clear visibility into company IT assets.',
    howItWorks: 'Automatically collects system specifications, serial numbers and software lists from every managed workstation.',
    packageStatus: 'Available within Managed IT services and selected protection plans.',
    faq: 'Does this help us plan laptop replacements? Yes, asset reports highlight aging devices before hardware failures disrupt staff.'
  },
  'onboarding-offboarding': {
    title: 'User Onboarding & Offboarding',
    badge: 'AVAILABLE WITHIN MANAGED IT SERVICES',
    whatItIs: 'Structured IT setup for new hires and secure account/device revocation when employees leave the business.',
    problem: 'Delayed laptop setup frustrates new staff, while forgotten ex-employee accounts create serious data leakage and security risks.',
    whatNasDoes: 'NAS follows a standardized checklist to configure new user accounts, deploy protection agents, and revoke access promptly upon departure.',
    included: 'Agreed M365 account creation/deactivation, protection agent deployment, and mailbox archival coordination.',
    notIncluded: 'Procurement and courier shipping of physical laptops unless separately arranged.',
    whoItSuits: 'Growing businesses hiring new staff or managing staff turnover.',
    howItWorks: 'HR or management notifies NAS of a starter or leaver, triggering a documented setup or revocation workflow.',
    packageStatus: 'Available within Managed IT Support and Complete Managed IT.',
    faq: 'What happens to an ex-employee’s emails when they leave? NAS can convert the mailbox or retain backed-up data according to your company policy.'
  },
  'dr-planning': {
    title: 'Disaster Recovery Planning',
    badge: 'ASSESSMENT-LED SERVICE',
    whatItIs: 'Structured evaluation and documentation of how your business will restore critical systems and continue operating after a major IT disruption.',
    problem: 'Having backups is not a plan—when a server room floods or ransomware hits, teams panic if recovery priorities and steps are undocumented.',
    whatNasDoes: 'NAS works with management to identify business-critical workloads, define realistic recovery expectations, and document a clear recovery runbook.',
    included: 'Critical workload identification, RPO/RTO requirement review, and documented recovery procedures.',
    notIncluded: 'Cloud compute hosting fees unless a Disaster Recovery Solution is also implemented.',
    whoItSuits: 'Businesses that cannot afford extended operational paralysis during a major incident.',
    howItWorks: 'Maps system dependencies, contact escalations and step-by-step restoration priorities prior to an emergency.',
    packageStatus: 'Assessment-led service available standalone or alongside DR solutions.',
    faq: 'Do we need a DR plan if we already have backups? Yes—a DR plan defines who does what, in what order, and on what infrastructure when backups need to be restored.'
  },
  'dr-solutions': {
    title: 'Disaster Recovery Solutions',
    badge: 'AVAILABLE AS AN ADD-ON • SUBJECT TO ASSESSMENT',
    whatItIs: 'Configured cloud or standby recovery environment designed to spin up and run supported critical workloads when primary infrastructure becomes unavailable.',
    problem: 'Restoring terabytes of server data onto new physical hardware after a disaster can take days of costly downtime.',
    whatNasDoes: 'NAS designs, configures and manages a supported disaster recovery environment capable of running protected workloads during an outage.',
    included: 'Configured DR environment for supported workloads, replication monitoring, and assisted failover coordination.',
    notIncluded: 'Guaranteed zero-second downtime or unassessed RPO/RTO promises prior to technical validation.',
    whoItSuits: 'Businesses running mission-critical servers or databases where multi-day downtime carries severe financial impact.',
    howItWorks: 'Replicates protected server images to a standby cloud environment ready for failover activation.',
    packageStatus: 'Available as an add-on, subject to assessment, technical validation and agreed scope.',
    faq: 'How fast can a DR solution bring our server back online? Recovery speed depends on workload design, connectivity and configuration, which NAS validates during assessment.'
  },
  'recovery-testing': {
    title: 'Recovery Testing',
    badge: 'INCLUDED IN SELECTED DR & MANAGED PLANS',
    whatItIs: 'Scheduled verification and test restoration of protected data or disaster recovery workloads to confirm recoverability.',
    problem: 'An untested backup or DR plan can fail silently due to corrupted snapshots, missing passwords or changed network settings.',
    whatNasDoes: 'Where included in the agreed service, NAS performs periodic test restores or sandboxed DR drills and provides verification proof.',
    included: 'Agreed scheduled recovery test exercises and outcome documentation.',
    notIncluded: 'Unscheduled full-production disruption tests outside agreed windows.',
    whoItSuits: 'Businesses requiring documented assurance for directors, auditors or insurers that recovery procedures work.',
    howItWorks: 'Restores sample data or boots replica workloads in an isolated test network without disrupting live operations.',
    packageStatus: 'Available within scoped Disaster Recovery services and selected managed agreements.',
    faq: 'Will recovery testing interrupt our daily work? No, tests are conducted in isolated environments or during agreed windows.'
  },
  'failover-failback': {
    title: 'Failover & Failback Orchestration',
    badge: 'SUBJECT TO TECHNICAL VALIDATION & DR DESIGN',
    whatItIs: 'Managed transition of critical workloads to a standby recovery environment during an outage (failover) and safe return to primary infrastructure once repaired (failback).',
    problem: 'Failing over to the cloud is only half the battle—returning live data back to repaired local servers without data loss requires careful orchestration.',
    whatNasDoes: 'NAS executes agreed failover runbooks during declared disasters and coordinates structured failback synchronization once primary hardware is ready.',
    included: 'Failover activation support, network routing coordination within scope, and failback resynchronization planning.',
    notIncluded: 'Replacement physical server hardware purchases or ISP fibre installation.',
    whoItSuits: 'Clients with configured NAS Disaster Recovery environments.',
    howItWorks: 'Switches user connectivity to the standby replica during an incident and synchronizes changes back when primary systems are restored.',
    packageStatus: 'Subject to technical validation and agreed DR design.',
    faq: 'Who authorizes a disaster failover? Failover is triggered in coordination with your designated business decision-makers according to the agreed DR runbook.'
  }
};

function initServiceDetailModal() {
  const triggers = document.querySelectorAll('[data-service-detail]');
  const modal = document.getElementById('service-detail-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.service-detail-close');

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-service-detail');
      const info = SERVICE_CATALOG_DETAILS[key];
      if (!info) return;

      document.getElementById('sd-badge').textContent = info.badge;
      document.getElementById('sd-title').textContent = info.title;
      document.getElementById('sd-what').textContent = info.whatItIs;
      document.getElementById('sd-problem').textContent = info.problem;
      document.getElementById('sd-nas-does').textContent = info.whatNasDoes;
      document.getElementById('sd-included').textContent = info.included;
      document.getElementById('sd-not-included').textContent = info.notIncluded;
      document.getElementById('sd-suits').textContent = info.whoItSuits;
      document.getElementById('sd-how').textContent = info.howItWorks;
      document.getElementById('sd-pkg-status').textContent = info.packageStatus;
      document.getElementById('sd-faq').textContent = info.faq;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeServiceModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeServiceModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeServiceModal();
  });
}

/* 12. FORM SUBMISSION & VALIDATION */
function initFormHandler() {
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      openModal(
        'Enquiry Received',
        `Thank you ${data.name || 'there'}. Your enquiry for ${data.company || 'your business'} has been received. We'll review the information provided and contact you to discuss the next step.`
      );

      form.reset();
    });
  });
}

/* 13. GLOBAL CONFIRMATION MODAL */
function initModal() {
  const modalOverlay = document.getElementById('success-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function openModal(title, message) {
  const modalOverlay = document.getElementById('success-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMsg = document.getElementById('modal-msg');

  if (modalTitle) modalTitle.textContent = title;
  if (modalMsg) modalMsg.textContent = message;

  if (modalOverlay) {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('success-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}
