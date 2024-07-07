document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const menuItems = document.querySelectorAll('#menu table tr');
    const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
   
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        menuItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = '';
                // Ensure parent dropdown is visible if a child matches the search
                let parentRow = item.previousElementSibling;
                while (parentRow && parentRow.classList.contains('dropdown-content')) {
                    parentRow.style.display = '';
                    parentRow = parentRow.previousElementSibling;
                }
            } else {
                if (!item.classList.contains('dropdown-content')) {
                    item.style.display = 'none';
                }
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const detailsElements = document.querySelectorAll('.menu-category details');
    detailsElements.forEach(details => {
        details.addEventListener('toggle', function () {
            const priceCell = this.closest('tr').querySelector('.main-price');
            if (this.open) {
                priceCell.classList.add('hidden-price');
            } else {
                priceCell.classList.remove('hidden-price');
            }
        });
    });
});