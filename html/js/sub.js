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
    var container = document.getElementById('map-box');
    var options = {
        center: new kakao.maps.LatLng(37.499557, 127.031397),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.499557, 127.031397); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

// kakao api---------------------------------------