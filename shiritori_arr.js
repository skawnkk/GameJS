const readline = require('readline');
const chalk = require('chalk');
let force = chalk.cyan;
let force2 = chalk.red;

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let count = 0;
let arr = [];
let shiritori = '';
let chance = 5;

function checkLetter(str) {
   let compareLetter = str[0];
   let lastWord = arr[arr.length - 1];
   let beforeLetter = lastWord[lastWord.length - 1];
   //let beforeLetter = arr[0][arr.length - 1];
   (compareLetter === beforeLetter) ? dingdong(str): ddaeng()
}

function dingdong(str) {
   count += 10;
   arr.push(str);
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

      if (arr.length === 0) {
         shiritori += answer;
         arr.unshift(answer);
         console.log(force('단어를 이어가세요'))
      } else {
         checkLetter(answer)
      }
   });

   rl.on('close', () => {
      console.log(force('게임종료'))
      console.log(force(`점수: ${count}`))
      process.exit()
   })
}

init();