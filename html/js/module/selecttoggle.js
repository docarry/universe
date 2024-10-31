const togglePasswordElements = document.querySelectorAll('.toggle-password'); // 패스워드

// 셀렉트 객체가 있는지 확인하고 존재할 경우에만 설정
const selectBox = document.querySelector('.selectBox'); // 셀렉트 객체
let options, optionElements;

if (selectBox) {
    options = selectBox.querySelector('.options'); // 옵션
    optionElements = options.querySelectorAll('.option'); // 옵션들
}

// PW Icon Click Event START --------------------------------
togglePasswordElements.forEach(toggleIcon => {
    const passwordInput = toggleIcon.closest('.password-container').querySelector('.password-input');

    toggleIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.src = '/img/icon/hide.svg';
        } else {
            passwordInput.type = 'password';
            toggleIcon.src = '/img/icon/view.svg';
        }
    });
});
// PW Icon Click Event END ----------------------------------

// 셀렉트 박스가 존재할 경우에만 드롭다운 설정


if (selectBox) {
    function toggleDropdown() {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }

    // 클릭 이벤트로 드롭다운 토글
    selectBox.addEventListener('click', (event) => {
        toggleDropdown();
        event.stopPropagation(); // 이벤트 전파 방지
    });

    optionElements.forEach(option => {
        option.addEventListener('click', function(event) {
            const selectedText = this.textContent;
            const selectedElement = selectBox.querySelector('.selected');
            selectedElement.textContent = selectedText;

            // 텍스트 컬러 변경
            selectedElement.style.color = '#000'; // 원하는 색상으로 변경

            const selectedValue = this.getAttribute('data-value');
            console.log(selectedValue); // 원하는 곳에 사용
            options.style.display = 'none'; // 선택 후 드롭다운 닫기
        });
    });

    document.addEventListener('click', function(e) {
        if (!selectBox.contains(e.target)) {
            options.style.display = 'none';
        }
    });
}

