document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const previewItems = document.querySelectorAll('.preview-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const zoomBtn = document.getElementById('zoom-btn');

    let currentIndex = 0;
    const maxIndex = previewItems.length - 1;

    function updateActiveImage(index) {
        previewItems.forEach(item => item.classList.remove('active'));
        previewItems[index].classList.add('active');

        const previewSrc = previewItems[index].querySelector('img').src;
        const mainSrc = previewSrc.replace('800x600', '1200x900');
        mainImage.src = mainSrc;

        currentIndex = index;
    }

    previewItems.forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateActiveImage(index);
        });
    });

    prevBtn.addEventListener('click', function() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = maxIndex;
        updateActiveImage(newIndex);
    });

    nextBtn.addEventListener('click', function() {
        let newIndex = currentIndex + 1;
        if (newIndex > maxIndex) newIndex = 0;
        updateActiveImage(newIndex);
    });

    zoomBtn.addEventListener('click', function() {
        mainImage.classList.toggle('zoomed');
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Escape') {
            zoomBtn.click();
        }
    });
});