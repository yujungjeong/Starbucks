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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //현재 연도 시간이 나오게