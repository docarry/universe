$(function() {

// sub-artist -----
    // Toggle .item-wrap 표시
    $('.toggle-nav').on('click', function(event) {
        event.stopPropagation(); // 이벤트 전파 방지
        $('.item-wrap').toggleClass('show'); // .item-wrap을 토글
        $(this).toggleClass('active'); // toggle-nav의 active 클래스 토글
    });

    // 영역 밖 클릭 시 .item-wrap 숨김
    $(document).on('click', function() {
        if ($('.item-wrap').hasClass('show')) {
            $('.item-wrap').removeClass('show'); // 숨김
            $('.toggle-nav').removeClass('active'); // active 클래스 제거
        }
    });
// sub-artist -----

});






// sub-goods---------------------------------------
var goodsSwiper = new Swiper("#subGoods #bestBox .swiper.mySwiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: "#subGoods #bestBox .swiper-button",
        prevEl: "#subGoods #bestBox .swiper-button",
    },
});
// sub-goods---------------------------------------