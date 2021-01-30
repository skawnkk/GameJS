const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
const chalk = require('chalk');
let force = chalk.cyan;
let force1 = chalk.red;

let count = 0;
let chance = 5;
let result;

function dingdong() {
   count += 10;
   console.log(force(`정답! , ++${count}`))
   quiz();
}

function ddaeng() {
   if (chance > 0) {
      console.log(force(`땡! , 남은 기회: ${chance}/5`))
      chance--;
   } else {
      rl.close()
   }
}

const quiz = function () {
   let random1 = Math.ceil(Math.random() * 9);
   let random2 = Math.ceil(Math.random() * 9);
   let answer = random1 * random2
   console.log(`${parseInt(random1)}*${parseInt(random2)}??`)
   result = answer; //*****♥
}

rl.on('line', (input => {
   if (input === 'quit') rl.close();
   if (parseInt(input) === result) {
      return dingdong();
   } else {
      return ddaeng()
   }
}))

rl.on('close', () => {
   console.log(force1('게임종료'))
   console.log(force(`점수: ${count}`))
   process.exit()
})

quiz();
