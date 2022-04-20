// let rolLength = 6;
// let setNum; //랜덤 숫자 담을 변수
// let hiddenInput = document.createElement("input"); //히든인풋을 사용
// hiddenInput.className = "hidden-input";
let randomDeg = 0;

// 회전 각도 0 ~ 360도
const rRandom = () => {
  let min = 0;
  let max = 360;
  return Math.floor(Math.random() * (max - min));
};

// 돌림판 인터렉션
const rRotate = (panel, btn) => {
  randomDeg = rRandom();
  let num = 0;
  let ani = setInterval(() => {
    num++;
    panel.style.transform = "rotate(" + 360 * num + "deg)";
    console.log("panel.style.transform : " + panel.style.transform);
    btn.disabled = true; //button,input
    btn.style.pointerEvents = "none"; //a 태그

    if (num === 50) {
      clearInterval(ani);
      panel.style.transform = "rotate(" + randomDeg + "deg)";
    }
  }, 50);
};

// 결과 팝업
const rLayerPopup = (deg) => {
  // alert 뜨고 나서 다시 하기! 이런 버튼 누르면 룰렛 원상복귀 했으면 좋겠다..
  if (deg <= 30 || deg >= 330) alert("당첨!! CU 3,000원 상품권");
  else if (deg >= 90 && deg <= 150) alert("당첨!! 스타벅스 아메리카노");
  else if (deg >= 210 && deg <= 270) alert("당첨!! 햄버거 세트 교환권");
  else alert("꽝! 다음기회에");
};

// 돌림판 리셋
const rReset = (btn) => {
  setTimeout(() => {
    btn.disabled = false;
    btn.style.pointerEvents = "auto";
    rLayerPopup(randomDeg);
    // hiddenInput.remove();
  }, 5500);
};

document.addEventListener("click", function (e) {
  let panel = document.querySelector(".rouletter-wacu");
  let btn = document.querySelector(".rouletter-btn");
  rRotate(panel, btn);
  rReset(btn);
});
