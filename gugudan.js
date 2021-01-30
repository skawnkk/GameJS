while (true) {
   let random1 = Math.ceil(Math.random() * 9);
   let random2 = Math.ceil(Math.random() * 9);
   let answer = random1 * random2

   let boolean = true;

   while (boolean) {
      let input = prompt(`${parseInt(random1)}*${parseInt(random2)}??`)
      if (parseInt(input) === answer) {
         alert("정답")
         boolean = false;
      } else {
         alert("땡!")
      }
   }
}
