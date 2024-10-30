// 메인 배너 슬라이드
var mainSwiper = new Swiper("#main-banner.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    speed: 800,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
    nextEl: "#main-banner .swiper-button-next",
    prevEl: "#main-banner .swiper-button-prev",
    },
    pagination: {
    el: "#main-banner .swiper-pagination",
    clickable: true,
    },
    keyboard: {
        enabled: true,
    },
});


// 아티스트 슬라이드
var artistSwiper = new Swiper("#artist-slide", {
    initialSlide: 2,
    spaceBetween: -80,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: "#artist-slide .swiper-pagination",
        clickable: true,
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: "#artist-slide .swiper-button-next",
        prevEl: "#artist-slide .swiper-button-prev",
    },
});


// PC 릴리즈 슬라이드
var releaseSwiper = new Swiper("#release-slide", {
    initialSlide: 2,
    slidesPerView: 3,
    spaceBetween: 100,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, 
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: -100,
    modifier: 1,
    slideShadows: false,
    },
    pagination: {
    el: "#release-slide .swiper-pagination",
    clickable: true,
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
});

// M 릴리즈 슬라이드
var mReleaseSwiper = new Swiper("#m-release-slide", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
    shadow: false,
    slideShadows: false,
    },
    pagination: {
    el: "#m-release-slide .swiper-pagination",
    clickable: true,
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
});

// sub-artist---------------------------------------
// 메인 슬라이드
// 공통 Swiper 옵션 정의
const subArtistMainswiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        clickable: true,
        draggable: true,
    }, 
};

// 각 슬라이드에 대해 Swiper 인스턴스 생성
const subArtistMainswiper1 = new Swiper(".sub-artist-main-swiper-1", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-1 .swiper-pagination",
    },
});

const subArtistMainswiper2 = new Swiper(".sub-artist-main-swiper-2", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-2 .swiper-pagination",
    },
});

const subArtistMainswiper3 = new Swiper(".sub-artist-main-swiper-3", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-3 .swiper-pagination",
    },
});

const subArtistMainswiper4 = new Swiper(".sub-artist-main-swiper-4", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-4 .swiper-pagination",
    },
});

const subArtistMainswiper5 = new Swiper(".sub-artist-main-swiper-5", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-5 .swiper-pagination",
    },
});



// 대표작 슬라이드
const subArtistBestswiperOptions = {
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

// 각 슬라이드에 대해 Swiper 인스턴스 생성
const subArtistBestswiper1 = new Swiper(".sub-artist-best-swiper-1", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-1 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper2 = new Swiper(".sub-artist-best-swiper-2", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-2 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper3 = new Swiper(".sub-artist-best-swiper-3", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-3 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper4 = new Swiper(".sub-artist-best-swiper-4", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-4 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper5 = new Swiper(".sub-artist-best-swiper-5", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-5 .swiper-pagination",
        
    },
});

const subArtistBestMswiperOptions = {
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        581: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
};

// 각 슬라이드에 대해 Swiper 인스턴스 생성
const subArtistBestMswiper1 = new Swiper(".sub-artist-best-m-swiper-1", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-1 .swiper-pagination",
    },
});
const subArtistBestMswiper2 = new Swiper(".sub-artist-best-m-swiper-2", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-2 .swiper-pagination",
    },
});
const subArtistBestMswiper3 = new Swiper(".sub-artist-best-m-swiper-3", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-3 .swiper-pagination",
    },
});
const subArtistBestMswiper4 = new Swiper(".sub-artist-best-m-swiper-4", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-4 .swiper-pagination",
    },
});
const subArtistBestMswiper5 = new Swiper(".sub-artist-best-m-swiper-5", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-5 .swiper-pagination",
    },
});
// sub-artist---------------------------------------



// SUB_Goods START ---------------------------------------
var goodsSwiper = new Swiper("#subGoods #bestBox .swiper.mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 4000, // 슬라이드 딜레이 (1000밀리초 === 1초)
    //     disableOnInteraction: false, // 사용자가 상호작용해도 자동 슬라이드 유지
    //     pauseOnMouseEnter: true, // 마우스 호버 시 자동 슬라이드 중지
    // },
    // loop: true,
    pagination: {
        el: "#subGoods #bestBox .swiper-pagination",
        clickable: true,
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        580: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
    },
});
// SUB_Goods END -----------------------------------------
