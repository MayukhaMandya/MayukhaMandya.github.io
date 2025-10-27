// Smooth panel navigation
const buttons = document.querySelectorAll('.toggle-btn');
const panels = document.querySelectorAll('.panel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetPanel = document.getElementById(targetId);

    // Hide all panels
    panels.forEach(panel => panel.classList.remove('active'));

    // Show selected panel
    if (targetPanel) {
      targetPanel.classList.add('active');
      targetPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
function toggleDetails(button) {
  const details = button.nextElementSibling;
  if (details.style.display === "block") {
    details.style.display = "none";
    button.textContent = "More Details ⬇";
  } else {
    details.style.display = "block";
    button.textContent = "Less Details ⬆";
  }
}
// === GALLERY FILTER FUNCTIONALITY ===
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});
