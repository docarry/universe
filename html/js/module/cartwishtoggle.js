const shoppingBags = document.querySelectorAll('.shopBtn img'); // 장바구니 아이콘
const hearts = document.querySelectorAll('.likeBtn img'); // 위시리스트 아이콘



// SUB_Goods START ----------------------------------
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
// SUB_Goods END ----------------------------------