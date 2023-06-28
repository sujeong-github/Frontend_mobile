// 스와이퍼 생성 | .swiper-container = 구조 Swiper 클래스
var swiper = new Swiper('.swiper-container',{
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 1,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '10.333333%',
    /* c. 슬라이드 반복 여부 */
    loop: true,
    /* d. 그룹수 맞추기 => 안 맞을 경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: true,

    // 페이지, 넘버링
    pagination: {
        // 객체들어갈 때는 key vlaue 쌍으로 여러개 들어갈 수 있음
        /* 적용구조에 코딩된 클래스명 */
        el: '.swiper-pagination',
        type: 'bullets',
        /* bullets 적용 후, 점박이 클릭시 해당 슬라이드로 링크여부 */
        clickable: true
        
    },

    /* 네비게이션 좌우 화살표swiper-pagination */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});