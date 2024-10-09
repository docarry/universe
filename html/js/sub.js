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


// kakao api---------------------------------------
    // var container = document.getElementById('map-box');
    // var options = {
    //     center: new kakao.maps.LatLng(37.499557, 127.031397),
    //     level: 3
    // };

    // var map = new kakao.maps.Map(container, options);

    // // 마커가 표시될 위치입니다 
    // var markerPosition  = new kakao.maps.LatLng(37.499557, 127.031397); 

    // // 마커를 생성합니다
    // var marker = new kakao.maps.Marker({
    //     position: markerPosition
    // });

    // // 마커가 지도 위에 표시되도록 설정합니다
    // marker.setMap(map);



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


// sub-info 회사 컨택---------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const infoContactElements = document.querySelectorAll('.info-contact h3, .info-email, .info-number');
    
    function checkVisibility() {
        infoContactElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            // 요소가 뷰포트에 들어왔는지 확인
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible'); // 클래스 추가
            }
        });
    }
    
    // 스크롤 시 체크
    document.addEventListener("scroll", checkVisibility);
    // 초기 로드 시 체크
    checkVisibility();
});
// sub-info---------------------------------------


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


