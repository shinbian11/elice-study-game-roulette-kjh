class Roulette {
  randomDeg;

  // generateRandom() : 회전 각도 0 ~ 360도
  generateRandom = () => {
    let min = 0;
    let max = 360;
    return Math.floor(Math.random() * (max - min));
  };

  // rotateRoulette() : 돌림판 인터렉션
  rotateRoulette = () => {
    this.randomDeg = this.generateRandom();
    let num = 0;
    let animation = setInterval(() => {
      num++;
      panel.style.transform = "rotate(" + 360 * num + "deg)";
      btn.disabled = true;
      btn.style.pointerEvents = "none";

      if (num === 50) {
        clearInterval(animation);
        panel.style.transform = "rotate(" + this.randomDeg + "deg)";
      }
    }, 50);
  };

  // displayResult() : btn 상태 원상 복구 & 결과 창 팝업 & 룰렛 위치 원상 복구
  resetRoulette = () => {
    setTimeout(() => {
      btn.disabled = false;
      btn.style.pointerEvents = "auto";
      this.displayResult();
      panel.style.transform = "rotate(" + 0 + "deg)";
    }, 5000);
  };

  // displayResult() : 결과 창 팝업 (추후 메인 페이지에 합치고 나서는 필요 없는 부분! 메인 페이지에서 만들어놓은 모달창에 메세지 데이터만 넘겨주면 됨)
  displayResult = () => {
    let message = "";
    if (this.randomDeg <= 30 || this.randomDeg >= 330)
      message = "당첨!! CU 3,000원 상품권";
    else if (this.randomDeg >= 90 && this.randomDeg <= 150)
      message = "당첨!! 스타벅스 아메리카노";
    else if (this.randomDeg >= 210 && this.randomDeg <= 270)
      message = "당첨!! 햄버거 세트 교환권";
    else message = "꽝! 다음기회에";

    alert(message);
  };

  btnClick = () => {
    this.rotateRoulette();
    this.resetRoulette();
  };
}

const r = new Roulette();

let panel = document.querySelector(".roulette-image");
let btn = document.querySelector(".roulette-btn");

btn.addEventListener("click", r.btnClick);

// 수정사항) 룰렛 백그라운드 이미지 바꾸기 & 6등분이 아니라 사용자가 임의로 추가한 만큼의 선택지를 룰렛에 구현하기 (추가 기능)
// => 만약 도전한다면 Canvas API 또는 p5.js 먼저 학습해야 할 듯
// 참고 링크는, md 파일에 출처 모두 남기기 + 노션에 배운 내용, 진행 현황 기록할 때도 참고)
/*
- 룰렛 : https://jnoony-code.tistory.com/19
- https://ko.javascript.info/settimeout-setinterval
- http://www.devdic.com/javascript/refer/dom/method:1585/animate()
- https://webdir.tistory.com/506
- https://webzz.tistory.com/369
- https://api.jquery.com/animate/

추가.... 

*/
