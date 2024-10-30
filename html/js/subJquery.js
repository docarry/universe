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

        // sub-join -----
        // sub-cart -----
        // 전체 선택 체크박스 상태 변경
        $('#cart-all').change(function() {
            const isChecked = $(this).is(':checked');
            // 모든 체크박스를 전체 선택 체크박스 상태로 설정
            $('.goods-name-wrap input[type="checkbox"]').prop('checked', isChecked);
            updateTotal(); // 전체 가격 및 수량 업데이트
        });
    
        // 개별 체크박스 상태 변경 시 전체 선택 체크박스 업데이트
        $('.cart-list').on('change', '.goods-name-wrap input[type="checkbox"]', function() {
            const allChecked = $('.goods-name-wrap input[type="checkbox"]:checked').length === $('.goods-name-wrap input[type="checkbox"]').length;
            $('#cart-all').prop('checked', allChecked);
            updateTotal(); // 전체 가격 및 수량 업데이트
        });
    
        // 품절 삭제 버튼 클릭 시 선택된 항목 삭제
        $('.del-btn').click(function() {
            $('.goods-name-wrap input[type="checkbox"]:checked').each(function() {
                $(this).closest('.goods-name-wrap').remove();
            });
            updateTotal(); // 전체 가격 및 수량 업데이트
        });
    
        function updatePrice(item) {
            const num = parseInt(item.find('.num').val());
            const pricePerItem = parseInt(item.find('.goods-price').text().replace(/[^0-9]/g, ''));
            const totalPrice = num * pricePerItem;
    
            item.find('.price').text(totalPrice.toLocaleString() + ' 원');
            return totalPrice; // 총 가격 반환
        }
    
        function updateTotal() {
            let total = 0;
            let itemCount = 0;
    
            $('.goods-name-wrap').each(function() {
                const item = $(this);
                const isChecked = item.find('input[type="checkbox"]').is(':checked');
                if (isChecked) {
                    itemCount += parseInt(item.find('.num').val());
                    total += updatePrice(item); // 각 항목의 총 가격 합산
                }
            });
    
            // 배송비 추가
            const deliveryFee = 3000;
            total += deliveryFee;
    
            // 업데이트된 값 설정
            $('.goods-num').text(itemCount + '개');
            $('.all-price').text(total.toLocaleString() + ' 원');
        }
    
        $('.cart-list').on('click', '.plus', function() {
            const item = $(this).closest('.goods-name-wrap');
            const numElem = item.find('.num');
            const minusBtn = item.find('.minus');
    
            let num = parseInt(numElem.val());
            numElem.val(num + 1);
    
            // 빼기 버튼 활성화
            if (num + 1 > 1) {
                minusBtn.prop('disabled', false);
                minusBtn.find('img').attr('src', '/img/icon/btn-minus-black.svg');
            }
    
            // 가격 업데이트
            updatePrice(item);
            updateTotal(); // 전체 가격 및 수량 업데이트
        });
    
        $('.cart-list').on('click', '.minus', function() {
            const item = $(this).closest('.goods-name-wrap');
            const numElem = item.find('.num');
            const minusBtn = item.find('.minus');
    
            let num = parseInt(numElem.val());
            if (num > 1) {
                numElem.val(num - 1);
                updatePrice(item);
            } else if (num === 1) {
                // 수량이 1에서 0으로 감소할 경우
                numElem.val(0);
                item.remove(); // .goods-name-wrap 삭제
            }
    
            // 수량이 1 이하일 경우에도 빼기 버튼 활성화
            minusBtn.prop('disabled', false);
            minusBtn.find('img').attr('src', '/img/icon/btn-minus-black.svg');
            updateTotal(); // 전체 가격 및 수량 업데이트
        });
    
        $('.cart-list').on('input', '.num', function() {
            const item = $(this).closest('.goods-name-wrap');
            const num = parseInt($(this).val());
    
            if (num > 0) {
                updatePrice(item);
                item.find('.minus').prop('disabled', false);
                item.find('.minus img').attr('src', '/img/icon/btn-minus-black.svg');
            } else {
                $(this).val(1); // 최소 1로 설정
                updatePrice(item);
            }
            updateTotal(); // 전체 가격 및 수량 업데이트
        });
    
        $('.cart-list').on('click', '.close', function() {
            $(this).closest('.goods-name-wrap').remove();
            updateTotal(); // 전체 가격 및 수량 업데이트
        });
    
        // 체크박스 상태 변경 시 가격 및 수량 업데이트
        $('.cart-list').on('change', 'input[type="checkbox"]', function() {
            updateTotal();
        });
    
        // 초기 총 가격 및 수량 업데이트
        updateTotal();
        // sub-cart -----   
    });
    