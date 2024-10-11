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

// sub-artist -----
document.addEventListener('DOMContentLoaded', function() {
    const moreButtons = document.querySelectorAll('.btn-more');
    
    moreButtons.forEach(button => {
        const listItems = button.previousElementSibling.querySelectorAll('li');
        const hiddenItems = Array.from(listItems).filter(item => item.classList.contains('hidden'));
        let currentIndex = 0;
        
        // 초기 상태: 숨김 처리
        listItems.forEach((item, index) => {
            if (index >= 4) {
                item.style.display = 'none'; // 처음 4개 항목만 표시
            }
        });

        button.addEventListener('click', function() {
            const img = button.querySelector('img');
            if (currentIndex < hiddenItems.length) {
                // 4개씩 표시
                const itemsToShow = hiddenItems.slice(currentIndex, currentIndex + 4);
                itemsToShow.forEach(item => {
                    item.style.display = 'block';
                    item.classList.remove('hidden');
                });
                currentIndex += 4;
                
                // 모든 항목이 표시되었는지 확인
                if (currentIndex >= hiddenItems.length) {
                    button.querySelector('span').textContent = 'CLOSE'; // 모든 항목이 표시된 경우 "CLOSE"
                    img.src = '/img/icon/btn-more-gray-close.svg';
                }
            } else {
                // "CLOSE" 클릭 시 원래 상태로 되돌리기
                listItems.forEach((item, index) => {
                    if (index >= 4) {
                        item.style.display = 'none'; // 다시 숨김
                        item.classList.add('hidden');
                    }
                });
                currentIndex = 0; // 인덱스 초기화
                button.querySelector('span').textContent = 'MORE'; // 버튼 텍스트 변경
                img.src = '/img/icon/btn-more-gray-plus.svg'; // 이미지 변경
            }
        });
    });
});
// sub-artist -----



// SUB_Goods START --------------------------------------
        // 페이지 로드 후 이벤트 리스너를 설정하는 코드
        window.onload = function() {
            // 모든 장바구니 요소와 하트 요소를 선택
            const shoppingBags = document.querySelectorAll('.shopBtn img'); // 장바구니 아이콘 선택
            const hearts = document.querySelectorAll('.likeBtn img'); // 하트 아이콘 선택

            // 각 하트에 클릭 이벤트 리스너 추가
            hearts.forEach(heart => {
                heart.addEventListener('click', (event) => {
                    const currentHeart = event.target; // 클릭한 하트 요소
                    const parent = currentHeart.parentElement; // 부모 요소 선택

                    // 현재 하트의 src 속성을 확인하고 변경
                    if (currentHeart.src.includes('heartIcon.svg')) {
                        currentHeart.src = '/img/subGoods/icon/fullHeartIcon.svg'; // 채워진 하트 이미지로 변경
                        parent.classList.remove('shim_dNHover'); // 부모 요소 클래스 제거
                        alert("찜하기에 추가되었습니다!"); // 알럿 메시지 출력
                    } else {
                        currentHeart.src = '/img/subGoods/icon/heartIcon.svg'; // 빈 하트 이미지로 변경
                        parent.classList.add('shim_dNHover'); // 부모 요소 클래스 추가
                    }
                });
            });

            // 각 장바구니에 클릭 이벤트 리스너 추가
            shoppingBags.forEach(shoppingBag => {
                shoppingBag.addEventListener('click', (event) => {
                    const currentShoppingBag = event.target; // 클릭한 장바구니 요소
                    const parent = currentShoppingBag.parentElement; // 부모 요소 선택

                    // 현재 장바구니의 src 속성을 확인하고 변경
                    if (currentShoppingBag.src.includes('bagIcon.svg')) {
                        const confirmAddToCart = confirm("장바구니에 추가하시겠습니까?");
                        if (confirmAddToCart) {
                            currentShoppingBag.src = '/img/subGoods/icon/fullBagIcon.svg'; // 채워진 장바구니 이미지로 변경
                            parent.classList.remove('shim_dNHover'); // 부모 요소 클래스 제거
                            alert("장바구니에 추가되었습니다!"); // 장바구니 추가 메시지 출력
                        }
                    } else {
                        currentShoppingBag.src = '/img/subGoods/icon/bagIcon.svg'; // 빈 장바구니 이미지로 변경
                        parent.classList.add('shim_dNHover'); // 부모 요소 클래스 추가
                    }
                });
            });
        }
// SUB_Goods END --------------------------------------



// kakao api---------------------------------------
    var mapContainer = document.getElementById('map-box'), // 지도를 표시할 div 
mapOption = { 
        center: new kakao.maps.LatLng(37.499557, 127.031397), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'https://i.ibb.co/2vHfqFB/2216335-location-map-map-pin-marker-pin-icon.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(68, 74), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(36, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.499557, 127.031397); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '    <span class="title">유니버스 엔터테인먼트</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.499557, 127.031397);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});
// kakao api---------------------------------------


// kakao api-990 ---------------------------------------
var mapContainer = document.getElementById('map-box2'), // 지도를 표시할 div 
mapOption = { 
        center: new kakao.maps.LatLng(37.499557, 127.031397), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'https://i.ibb.co/2vHfqFB/2216335-location-map-map-pin-marker-pin-icon.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(68, 74), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(36, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.499557, 127.031397); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '    <span class="title">유니버스 엔터테인먼트</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.499557, 127.031397);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});
// kakao api---------------------------------------


// 배너 이미지 축소 애니메이션-----------------------
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector('.banner');

    function checkVisibility() {
        const rect = banner.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            banner.classList.add('visible');
        } else {
            banner.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 초기 체크
});
// 배너 이미지 축소 애니메이션-----------------------
