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
    // sub-join -----
    const now = new Date();
    const year = now.getFullYear();
    const mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    const day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate());
    //년도 selectbox만들기               
    for (let i = 1900; i <= year; i++) {
        $('#join-year').append('<option value="' + i + '">' + i + '</option>');
    }

    // 월별 selectbox 만들기            
    for (let i = 1; i <= 12; i++) {
        let mm = i > 9 ? i : "0" + i;
        $('#join-month').append('<option value="' + mm + '">' + mm + '</option>');
    }

    // 일별 selectbox 만들기
    for (let i = 1; i <= 31; i++) {
        let dd = i > 9 ? i : "0" + i;
        $('#join-day').append('<option value="' + dd + '">' + dd + '</option>');
    }
    $("#year  > option[value=" + year + "]").attr("selected", "true");
    $("#month  > option[value=" + mon + "]").attr("selected", "true");
    $("#day  > option[value=" + day + "]").attr("selected", "true");

    $('#join-email').change(function() {
        if ($(this).val() === 'user-input') {
            $('#custom-email').show();
            $('#join-email').hide(); // 기본 이메일 입력 숨기기
        } else {
            $('#custom-email').hide();
            $('#join-email').show(); // 기본 이메일 입력 보여주기
        }
    });


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
                        alert("상품이 위시리스트에 추가되었습니다."); // 알럿 메시지 출력
                    } else {
                        currentHeart.src = '/img/subGoods/icon/heartIcon.svg'; // 빈 하트 이미지로 변경
                        parent.classList.add('shim_dNHover'); // 부모 요소 클래스 추가
                        alert("상품이 위시리스트에서 제거되었습니다."); // 알럿 메시지 출력
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
                        const confirmAddToCart = confirm("해당 상품을 장바구니에 추가하시겠습니까?");
                        if (confirmAddToCart) {
                            currentShoppingBag.src = '/img/subGoods/icon/fullBagIcon.svg'; // 채워진 장바구니 이미지로 변경
                            parent.classList.remove('shim_dNHover'); // 부모 요소 클래스 제거
                            alert("상품이 장바구니에 추가되었습니다."); // 장바구니 추가 메시지 출력
                            location.href = "http://universe.dothome.co.kr/sub/mypage.html";
                        }
                    } else {
                        currentShoppingBag.src = '/img/subGoods/icon/bagIcon.svg'; // 빈 장바구니 이미지로 변경
                        parent.classList.add('shim_dNHover'); // 부모 요소 클래스 추가
                        alert("상품이 장바구니에서 제거되었습니다."); // 장바구니 추가 메시지 출력
                    }
                });
            });
        }
// SUB_Goods END --------------------------------------

// PW Icon Click Event START --------------------------------
    const togglePasswordElements = document.querySelectorAll('.toggle-password');

    togglePasswordElements.forEach(toggleIcon => {
        // 토글할 비밀번호 입력란을 찾기 위해 부모 요소의 비밀번호 입력란 선택
        const passwordInput = toggleIcon.closest('.password-container').querySelector('.password-input');

        toggleIcon.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.src = '/img/icon/hide.svg';  // 비밀번호 표시 이미지
            } else {
                passwordInput.type = 'password';
                toggleIcon.src = '/img/icon/view.svg';   // 비밀번호 숨김 이미지
            }
        });
    });
// PW Icon Click Event END ---------------------------------

// SUB_Login START --------------------------------
    // 로그인 상태 유지 기능
    const keepCheckbox = document.getElementById('keep');

    // 페이지가 로드될 때 체크박스 상태 복원
    window.onload = function() {
        const isChecked = localStorage.getItem('keepLoggedIn') === 'true';
        keepCheckbox.checked = isChecked;

        if (isChecked) {
            const savedUsername = localStorage.getItem('savedUsername');
            const savedPassword = localStorage.getItem('savedPassword');

            document.getElementById('login_id').value = savedUsername || '';
            document.getElementById('login_pw').value = savedPassword || '';
        }
    };

    // 로그인 폼 제출 이벤트
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 이벤트 방지

        // 사용자가 로그인할 때 체크박스 상태에 따라 로컬 스토리지에 저장
        if (keepCheckbox.checked) {
            const username = document.getElementById('login_id').value;
            const password = document.getElementById('login_pw').value;

            localStorage.setItem('keepLoggedIn', 'true');
            localStorage.setItem('savedUsername', username);
            localStorage.setItem('savedPassword', password);
        } else {
            // 체크박스가 체크되지 않았다면 로컬 스토리지 삭제
            localStorage.removeItem('keepLoggedIn');
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
        }

        // 여기서 로그인 로직을 추가하세요 (예: 서버에 로그인 요청)
        alert('로그인 성공!'); // 예시
    });
// SUB_Login END ----------------------------------

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
