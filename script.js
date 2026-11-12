// Filter the products on each shop page as the search field is typed.
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const productCards = document.querySelectorAll('.product-card');

    if (!searchInput || productCards.length === 0) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLocaleLowerCase();

        productCards.forEach((card) => {
            const productDetails = card.textContent.toLocaleLowerCase();
            card.hidden = !productDetails.includes(query);
        });
    });
});
