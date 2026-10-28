(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Sticky navbar ── */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── Mobile menu ── */
  const navToggle = document.querySelector(".nav-toggle-btn");
  const navLinks = document.querySelector(".nav-links");
  const navOverlay = document.querySelector(".nav-overlay");

  const setMenuOpen = (open) => {
    if (!navToggle || !navLinks) return;
    navToggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    if (navOverlay) navOverlay.classList.toggle("is-visible", open);
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") !== "true";
      setMenuOpen(open);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    if (navOverlay) {
      navOverlay.addEventListener("click", () => setMenuOpen(false));
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 60px 0px" }
      );
      revealEls.forEach((el) => observer.observe(el));
    }
  }

  /* ── Project filters ── */
  const filterBtns = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll(".project-card[data-category]");
  const emptyState = document.querySelector(".projects-empty");

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        filterBtns.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });

        let visible = 0;
        projectCards.forEach((card) => {
          const cats = (card.getAttribute("data-category") || "").split(/\s+/);
          const show = filter === "all" || cats.includes(filter);
          card.hidden = !show;
          if (show) visible += 1;
        });

        if (emptyState) emptyState.hidden = visible > 0;
      });
    });
  }

  /* ── Project modals ── */
  const modal = document.getElementById("project-modal");
  if (modal) {
    const modalTitle = modal.querySelector(".modal-title");
    const modalBody = modal.querySelector(".modal-body");
    const modalClose = modal.querySelectorAll("[data-modal-close]");
    let lastFocus = null;

    const getFocusable = () =>
      modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

    const openModal = (card) => {
      const data = card.querySelector(".project-detail-data");
      if (!data || !modalTitle || !modalBody) return;

      lastFocus = document.activeElement;
      modalTitle.textContent = data.dataset.title || card.querySelector("h3")?.textContent || "Proje Detayı";

      const english = localStorage.getItem("berkay-lang") === "en";
      const problem = (english ? data.dataset.problemEn : data.dataset.problem) || "";
      const approach = (english ? data.dataset.approachEn : data.dataset.approach) || "";
      const tech = data.dataset.tech || "";
      const result = (english ? data.dataset.resultEn : data.dataset.result) || "";
      const github = data.dataset.github || "";

      modalBody.innerHTML = `
        <div class="modal-section">
          <h4>Problem</h4>
          <p>${problem}</p>
        </div>
        <div class="modal-section">
          <h4>${english ? "Approach" : "Yaklaşım"}</h4>
          <p>${approach}</p>
        </div>
        <div class="modal-section">
          <h4>${english ? "Technologies" : "Teknolojiler"}</h4>
          <p>${tech}</p>
        </div>
        <div class="modal-section">
          <h4>${english ? "Results" : "Sonuç"}</h4>
          <p>${result}</p>
        </div>
        ${
          github
            ? `<div class="modal-actions">
                <a href="${github}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  ${english ? "Source Code (GitHub)" : "Kaynak Kodu (GitHub)"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </a>
              </div>`
            : `<div class="modal-actions"><span class="project-meta">${data.dataset.note || "Kaynak kodu herkese açık bir depoda değil."}</span></div>`
        }
      `;

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      const closeBtn = modal.querySelector(".modal-close");
      if (closeBtn) closeBtn.focus();
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    };

    document.querySelectorAll("[data-open-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".project-card");
        if (card) openModal(card);
      });
    });

    modalClose.forEach((el) => el.addEventListener("click", closeModal));

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("is-open")) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === "Tab") {
        const focusable = [...getFocusable()];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ── Year in footer (optional) ── */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
