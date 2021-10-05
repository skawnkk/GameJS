const CarManuel = () => {
  let oil = 10000;
  let park = (ms, target) => {
    if (ms === target) {
      if (oil < 0) console.log("연료가 부족해 운행을 종료합니다");
      else console.log(`이용시간이 완료되었습니다.`);
    } else if (ms < target && oil < 0)
      console.log("연료가 부족해 운행을 종료합니다");
  };
  let drive = (ms, target) => {
    if (ms === 0) return;
    new Promise((resolve) => {
      var timer = setTimeout(() => {
        oil -= 1000;
        if (oil >= 0) console.log(`${ms / 1000}초, 남은 연료: ${oil}`);
        else clearTimeout(timer);
        resolve();
      }, ms);
    }).then(() => {
      park(ms, target);
    });
  };

  return {
    get oil() {
      return oil;
    },
    start: (target) => {
      console.log("운행을 시작합니다.");
      for (let i = 0; i <= target; i += 1000) {
        drive(i, target);
      }
    },
  };
};

const myCar = CarManuel();
console.log(myCar.oil);
console.log(myCar.start(10000)); //목표주행시간
