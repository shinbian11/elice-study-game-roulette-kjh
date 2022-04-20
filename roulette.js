// let hiddenInput = document.createElement("input"); //히든인풋을 사용
// hiddenInput.className = "hidden-input";
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
      // 수정사항) 회전하는 애니메이션 좀 더 자연스럽게 하고 싶다..
      if (num === 50) {
        console.log("자 그만~");
        clearInterval(animation);
        panel.style.transform = "rotate(" + this.randomDeg + "deg)";
        // 수정사항) 회전 시작할땐 시계방향이었는데, 왜 끝날때쯤에는 역시계방향이지??
      }
    }, 50);
  };

  // displayResult() : 결과 팝업
  displayResult = () => {
    // 수정사항) alert 뜨고 나서 다시 하기! 이런 버튼 누르면 룰렛 원상복귀 했으면 좋겠다..
    if (this.randomDeg <= 30 || this.randomDeg >= 330)
      alert("당첨!! CU 3,000원 상품권");
    else if (this.randomDeg >= 90 && this.randomDeg <= 150)
      alert("당첨!! 스타벅스 아메리카노");
    else if (this.randomDeg >= 210 && this.randomDeg <= 270)
      alert("당첨!! 햄버거 세트 교환권");
    else alert("꽝! 다음기회에");
  };

  resetRoulette = () => {
    setTimeout(() => {
      btn.disabled = false;
      btn.style.pointerEvents = "auto";
      this.displayResult();
      // 수정사항) hiddenInput 데이터 살리기.. 백엔드와 연동 할 때 필요할듯
      // hiddenInput.remove();
    }, 5000);
  };

  btnClick = () => {
    this.rotateRoulette();
    this.resetRoulette();
  };
}

const r = new Roulette();
let panel = document.querySelector(".rouletter-wacu");
let btn = document.querySelector(".rouletter-btn");

btn.addEventListener("click", r.btnClick);
// 수정사항) 조금 더 다듬고... 다른 소스코드들도 구글링 해보기 .. 최대한 내가 커스터마이징한 느낌 내기, css, html 파일도 좀 내 스타일로 바꾸기, 룰렛 이미지도 바꾸고, 6 등분 아닐때도 구현 시도해보기 (이건 추가기능)
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
