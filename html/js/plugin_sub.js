
// sub-artist----- 
// 메인 슬라이드
var subArtistMainswiper = new Swiper(".sub-artist-main-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".sub-artist-main-swiper .swiper-pagination",
        clickable: true,
    },
});
function changeImage(event, clickedFrameClass) {
    // 클릭한 프레임의 부모 요소를 찾음
    const frameWrap = event.currentTarget.closest('.frame-wrap');
    const largeFrame = frameWrap.querySelector('.sub-artist-frame1');
    const frame2 = frameWrap.querySelector('.sub-artist-frame2');
    const frame3 = frameWrap.querySelector('.sub-artist-frame3');

    // 현재 이미지 저장
    const largeImageSrc = largeFrame.querySelector('img').src;
    const frame2ImageSrc = frame2.querySelector('img').src;
    const frame3ImageSrc = frame3.querySelector('img').src;

    // 클릭된 프레임에 따라 이미지 교환
    if (clickedFrameClass === 'sub-artist-frame2') {
        largeFrame.querySelector('img').src = frame2ImageSrc;
        frame2.querySelector('img').src = frame3ImageSrc;
        frame3.querySelector('img').src = largeImageSrc;
    } else if (clickedFrameClass === 'sub-artist-frame3') {
        largeFrame.querySelector('img').src = frame3ImageSrc;
        frame3.querySelector('img').src = frame2ImageSrc;
        frame2.querySelector('img').src = largeImageSrc;
    }
}

// 앨범 슬라이드
var subArtistDiscoswiper = new Swiper(".sub-artist-disco-swiper", {
    loop: true,
    // effect: 'creative',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup : 1,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".sub-artist-info-3 .swiper-button-next",
        prevEl: ".sub-artist-info-3 .swiper-button-prev",
    },
    autoHeight: true,
});
var subArtistDiscoMswiper = new Swiper(".sub-artist-disco-m-swiper", {
    slidesPerView: 2,
    spaceBetween: 28,
    loop: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
    },
});

// sub-artist-----



// sub-goods---------------------------------------
var goodsSwiper = new Swiper("#subGoods #bestBox .swiper.mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: "#subGoods #bestBox .nextBtn",
        prevEl: "#subGoods #bestBox .prevBtn",
    },
    breakpoints: {
        580: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
    },
});
// sub-goods---------------------------------------
