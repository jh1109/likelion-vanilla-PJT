

/* -------------------------- [ 장바구니에 얼마나 수량을 담을지 결정하는 버튼과 관련된 이벤트 함수 ] ------------------------- */

// -버튼을 누르면 선택한 수량이 줄어든다
function clickMinusButton() { 
  // 현재 상품 개수를 가지고 있는 노드 가져옴
  let productNumNode = document.querySelector('.number_of_product span');
  // 노드에서 텍스트만 가져옴
  let productNum = +(productNumNode.textContent); 
  // 만약에 현재 값이 1이라면 더이상 값이 줄어들 수 없음 => return처리하기
  if(productNum == 1) {
    return;
  }
  // 값을 줄어들게 한다
  productNum = productNum - 1;
  // 줄어든 값이 1일 경우, 마이너스 버튼을 light색으로 바꿈
  if(productNum == 1) {
    let getImgNode = document.querySelector('.minus_amount img');
    getImgNode.src="./assets/icons/detail_miyoung/minus_light.svg";
  }
  // 값을 바꿔낀다
  productNumNode.textContent = `${productNum}`;
  // 총 값을 보여주는 노드 가져옴
  let totalPrice = document.querySelector('.total_price_2');
  // 단가를 가져옴
  let onePrice = document.querySelector('.total_price_1');
  onePrice = +((onePrice.textContent).replace(/[^0-9]/g,"")); // 숫자만 추출
  // 새로운 값을 계산
  let newPrice = onePrice*productNum;
  // 3자리마다 콤마 붙혀서 문자열로 저장
  newPrice = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 값 업데이트(콤마 붙힌 상태로)
  totalPrice.textContent = newPrice;
}

// +버튼을 누르면 선택한 수량이 늘어난다
function clickPlusButton() {
  // 현재 상품 개수를 가지고 있는 노드 가져옴
  let productNumNode = document.querySelector('.number_of_product span');
  // 노드에서 텍스트만 가져옴
  let productNum = +(productNumNode.textContent);
  // 값을 증가하게 한다
  productNum = productNum + 1;
  // 1이 아닐경우, 마이너스 버튼을 dark색으로 바꿈
  if(productNum != 1) {
    let getImgNode = document.querySelector('.minus_amount img');
    getImgNode.src="./assets/icons/detail_miyoung/minus_dark.svg";
  }
  // 값을 바꿔낀다
  productNumNode.textContent = `${productNum}`;
  // 총 값을 보여주는 노드 가져옴
  let totalPrice = document.querySelector('.total_price_2');
  // 단가를 가져옴
  let onePrice = document.querySelector('.total_price_1');
  onePrice = +((onePrice.textContent).replace(/[^0-9]/g,"")); // 숫자만 추출
  // 새로운 값을 계산
  let newPrice = onePrice*productNum;
  // 3자리마다 콤마 붙혀서 문자열로 저장
  newPrice = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 값 업데이트(콤마 붙힌 상태로)
  totalPrice.textContent = newPrice;
}

const minusButton = document.querySelector('.minus_amount');
minusButton.addEventListener('click', clickMinusButton);

const plusButton = document.querySelector('.plus_amount');
plusButton.addEventListener('click', clickPlusButton);


/* -------------------------------- [ 사용자가 후기를 등록할때마다 네비게이션바의 후기개수 늘어나기 ] ------------------------------- */
// 참고로 동률님과 코드를 합치기 전에 짠거라서 나중에 합치면 수정이 필요할 수도 있음
// 동률님 코드: <button class="btn-submit">등록</button>
function clickSubmitButton() {
  // 네비게이션바의 후기 버튼 노드 가져오기
  const getNumNode = document.querySelector('.btn_product_review span');
  // 네비게이션바의 후기에서 괄호안의 숫자만 빼오기
  let reviewNum = +((getNumNode.textContent).replace(/[^0-9]/g,"")); // (숫자)에서 숫자만 추출
  // 등록하면 후기 개수 하나 증가
  reviewNum = reviewNum + 1; 
  // 바뀐 후기 개수를 네비게이션바에 업데이트 하기 
  getNumNode.textContent = `(${reviewNum})`;
}
const getSubmitButton = document.querySelector('.btn-submit');
getSubmitButton.addEventListener('click', clickSubmitButton);


/* ---------------------------------------- [ 네비게이션바 > 각 영역으로 화면 초점 이동 ] ------------------------------------------ */
function goToScroll(name) {
  let location = document.querySelector("."+name).offsetTop;
  window.scrollTo({
    top: location,
    behavior: 'smooth'
  });
}
// [재확인 필요] 동률님의 리팩토링된 클래스명 확인 필요
// 동률님 코드와 합치면, HTML파일에서 navigation의 3,4번째 버튼에 onclick연결해줘야 함
// onclick="goToScroll('클래스명')"


/* --------------------------------- [ 네비게이션바 > 화면초점위치에 따라 버튼의 css스타일링 바뀌기 ] ---------------------------------- */




// 후기 개수에 따라 후기 값 변화



















///////////////////////네비게이션 바 고정///////////////////////////
// --> 창환님 코드 진행 후 붙히기
// let nav = document.querySelector('.product_navigation');
// let navTop = nav.offsetTop;

// function fixNav() {
//   if (window.scroppY >= navTop) {
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.classList.remove('fixed-nav');
//   }
// }
// window.addEventListener('scroll', fixNav);

// let getTop = nav.offset().top;
// function ficNav() {
  //   let window = 
  //   window.scroll 
  // }

  // let nav = document.querySelector('.product_navigation');
  // nav.addEventListener('scroll', function() {
  // console.log(window.scrollY); // 현재 스크롤바를 얼마나 내렸냐 측정
  // window.scrollY = window.pageYOffset;

  // this.window.scrollTo(0,100);
  // this.window.scrollBy(0,100);

// });