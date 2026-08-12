/* ============================================================
   RESUME FROM GITHUB
   ------------------------------------------------------------
   1. Upload Ankita_FullStack_Developer.pdf to your GitHub repo
      (e.g. Anshi1208/Anshi1208.github.io or your portfolio repo)
   2. Update RESUME_GITHUB_URL below to the RAW file URL, e.g.:
      https://raw.githubusercontent.com/Anshi1208/Anshi1208.github.io/main/Ankita_FullStack_Developer.pdf
   3. When you update the PDF on GitHub, the portfolio will
      always open the latest version (browsers may cache briefly;
      add ?v=2 if needed after updates).
   ============================================================ */
/* ============================================================
   RESUME — open in browser as PDF (no download)
   File lives on: github.com/Anshi1208/Resume
   Update PDF there → portfolio always uses latest
   ============================================================ */
/* ============================================================
   RESUME FROM GITHUB
   Top  (#resume-btn)         → open PDF in browser
   Bottom (#resume-btn-bottom) → download PDF file
   ============================================================ */

const RESUME_RAW_URL =
  "https://raw.githubusercontent.com/Anshi1208/Resume/main/Ankita_FullStack_Developer.pdf?v=1";

const RESUME_LOCAL_URL = "./Ankita_FullStack_Developer.pdf";
const RESUME_FILENAME = "Ankita_FullStack_Developer.pdf";

function resumeViewUrl(rawUrl) {
  const url = rawUrl.split("?")[0] + "?v=1";
  return (
    "https://docs.google.com/gview?embedded=true&url=" +
    encodeURIComponent(url)
  );
}

async function downloadResume(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  const originalHtml = btn.innerHTML;

  try {
    btn.style.pointerEvents = "none";
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';

    const res = await fetch(RESUME_RAW_URL);
    if (!res.ok) throw new Error("fetch failed");

    const blob = await res.blob();
    const pdfBlob = new Blob([blob], { type: "application/pdf" });
    const objectUrl = URL.createObjectURL(pdfBlob);

    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = RESUME_FILENAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);
  } catch {
    window.open(RESUME_LOCAL_URL, "_blank");
  } finally {
    btn.innerHTML = originalHtml;
    btn.style.pointerEvents = "";
  }
}

function setResumeLinks() {
  // Top → VIEW in browser
  const viewBtn = document.getElementById("resume-btn");
  if (viewBtn) {
    viewBtn.href = resumeViewUrl(RESUME_RAW_URL);
    viewBtn.target = "_blank";
    viewBtn.rel = "noopener noreferrer";
    viewBtn.removeAttribute("download");
  }

  // Bottom → DOWNLOAD file
  const downloadBtn = document.getElementById("resume-btn-bottom");
  if (downloadBtn) {
    downloadBtn.href = "#";
    downloadBtn.removeAttribute("target");
    downloadBtn.removeAttribute("download");
    downloadBtn.addEventListener("click", downloadResume);
  }
}

/* ===== Title blink ===== */
window.onblur = function () {
  document.title = "Come back :)";
};
window.onfocus = function () {
  document.title = "Ankita Singh | Full Stack Developer";
};

/* ===== Sticky navbar ===== */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});

/* ===== Mobile menu ===== */
const navMenu = document.getElementById("nav-menu");
const menuBtn = document.getElementById("menu-btn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = menuBtn?.querySelector("i");
    if (icon) {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    }
  });
});

/* ===== Active section on scroll ===== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const height = current.offsetHeight;
    const top = current.offsetTop - 100;
    const id = current.getAttribute("id");
    const link = document.querySelector(`.nav-link[href*="${id}"]`);
    if (!link) return;
    if (scrollY > top && scrollY <= top + height) link.classList.add("active");
    else link.classList.remove("active");
  });
}
window.addEventListener("scroll", scrollActive);

/* ===== Footer year ===== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== Init ===== */
setResumeLinks();
