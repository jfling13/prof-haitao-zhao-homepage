// Load common header, navigation and footer templates
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;

        // After header is loaded, load navigation into its placeholder
        const navigationPlaceholder = document.getElementById('navigation-placeholder');
        if (navigationPlaceholder) {
          fetch('navigation.html')
            .then(response => response.text())
            .then(data => {
              navigationPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading navigation:', error));
        }
      })
      .catch(error => console.error('Error loading header:', error));
  }

  // Load footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }
});
