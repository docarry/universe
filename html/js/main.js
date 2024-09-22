// 굿즈 마우스 오버 효과
// 모든 .item 요소를 선택
const items = document.querySelectorAll('.item');

// 각 .item에 마우스 오버/아웃 이벤트 추가
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.add('show'); // 마우스 올렸을 때 'show' 클래스 추가
        }
    });

    item.addEventListener('mouseleave', () => {
        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.remove('show'); // 마우스 뗐을 때 'show' 클래스 제거
        }
    });
});
