const searchEl = document.querySelector('.search');
// 변수 searchEl를 지정해주고 찾아라. document라는 개체에서 querySelector라는 매소드를 실행해줌. class가 search인 요소를 검색
const searchInputEl = searchEl.querySelector('input');
// 변수 searchInputEl를 찾아라. searchEl안에서 input요소를 찾아라`

searchEl.addEventListener('click', function () {
  // .search라는 div요소를 click을 했을때 함수를 실행해라
  searchInputEl.focus();
  // searchInputEl를 포커스 해라
});

searchInputEl.addEventListener('focus', function () {
  // searchInputEl의 요소에 포커스가 되면
  searchEl.classList.add('focused');
  // 요소.개체.매소드
  //특정요소에 class정보를 가지고 있는 개체에서 focused된 상태를 추가하겠다
  searchInputEl.setAttribute('placeholder', '통합검색');
  //searchInputEl에 html세팅한다. placeholder-설명으로 들어갈 힌트작성 ('통합검색')
});

searchInputEl.addEventListener('blur', function () {
  // searchInputEl의 요소에 blur처리를 해라
  searchEl.classList.remove('focused');
  // searchInputEl의 요소에 포커스가 해제되면 
  searchInputEl.setAttribute('placeholder', '');
    //searchInputEl에 html세팅한다. placeholder-설명으로 들어갈 힌트작성 (' ')
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY); //스크롤 할때마다 콘솔에 scroll이 나옴옴
  if (window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to('#to-top', .2, {
      x: 0
    });    
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));

// .throttle(함수, 시간) 

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, { //1초 동안 어떻게 움직일건지 작성
    delay:(index + 1) * .7, //0.7, 1.4, 2.1, 2.7
    opacity:1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 버여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드 가운데 보이기
  loop: true,
   autoplay: {
    delay:5000
   },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //시용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.arwards .swiper-prev',
    nextEl: '.arwards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');  // promotion이라는 클래스를 찾아서 promotionEl 할당함
const promotionToggleBtn = document.querySelector('.toggle-promotion') // toggle-promotion 클래스를 찾아서 변수 promotionToggleBtn를 할당함
let isHidePromotion = false; // isHidePromotion는 false다 즉, 보이고 있다
promotionToggleBtn.addEventListener('click', function (){  // promotionToggleBtn을 클릭을 하면 함수가 진행이 된다
  isHidePromotion = !isHidePromotion  // isHidePromotion의 !(반대값)을 찾아서 다시 할당함 즉, true가 할당됨
  // ! 반대가 되게 만들어 주세요 -> true
  if (isHidePromotion) { // 할당된 값이 true이기 때문에 else전 숨김처리가 실행된다
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
    
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerhook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //현재 연도 시간이 나오게