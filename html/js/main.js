const items = document.querySelectorAll('.item');

// 각 .item에 마우스 오버/아웃 이벤트 추가
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.add('show');
        }
    });

    item.addEventListener('mouseleave', () => {
        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.remove('show');
        }
    });
});
