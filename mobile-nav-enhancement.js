/* Optional navigation refinement for mobile.
   Paste this immediately after the existing showPage() function's event binding,
   before the rest of the script. Existing menu button onclick can remain unchanged. */
function closeMobileNav() {
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.remove('open');
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMobileNav();
});

document.addEventListener('click', (event) => {
  const header = document.querySelector('header');
  const nav = document.getElementById('navLinks');
  if (nav && nav.classList.contains('open') && header && !header.contains(event.target)) {
    closeMobileNav();
  }
});
