const readline = require('readline');
const chalk = require('chalk');
let force = chalk.cyan;
let force2 = chalk.red;

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let count = 0;
let chance = 5;
let shiritori = '';
let firstWord = '';

function dingdong(str) {
   count += 10;
   shiritori += ` => ${str}`;
   console.log(shiritori, '++', count, '점');
}

function ddaeng() {
   if (chance > 0) {
      console.log(force(`땡! 틀렸습니다.\n남은 기회:${chance--}`));
   } else {
      console.log(force2('GameOver!!!'));
      rl.close();
   }
}

//?주어진 시간 내에 입력이 없으면 함수호출, 값이 있으면 함수를 무력화 시키는 방법.
//?아래 함수 2개를 필요한 곳에 배치해봤는데 너무 코드가 지저분해짐.
//?비동기적으로 구현하는 방법이 뭘까.
// const startTimeSet = function () {
//    setTimeout(() => {
//       console.log(`시간초과! -5감점: ${count-=5}`)
//    }, 10000);
// }

// function deleteTimeSet() {
//    clearTimeout(startTimeSet);
// }


function init() {
   console.log(force('시작할 단어를 입력하세요'))
   rl.on('line', (answer) => {

      if (answer === 'quit') rl.close();

      if (firstWord.length === 0) {
         shiritori += answer;
         firstWord = answer;
         console.log(force('단어를 이어가세요'))
      } else {
         if (firstWord[firstWord.length - 1] === answer[0]) {
            dingdong(answer);
            firstWord = answer; //!!!제일중요한 부분!!!//
         } else {
            ddaeng();
         }

      }
   });

   rl.on('close', () => {
      console.log(force('게임종료'))
      console.log(force(`점수: ${count}`))
      process.exit()
   })
}

init();
