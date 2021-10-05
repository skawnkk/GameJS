# GameJS
JS로 만드는 고전게임집

<details>
<summary>끝말잇기: shiritor.js</summary>
<div markdown="1">
      
<H3>🎈끝말잇기 게임</H3> 

- TODO: 입력시간초과 -> 비동기 구현하기
- GOTIT: 배열입력에서 변수 값 변경으로 단계를 줄일 수 있었다.  
```
if(초기입력값의 끝문자 === 새로 입력한 값의 첫글자){  
let 초기입력값 = 새로 입력한 값};
```

</div>
</details>

<details>
<summary>구구단 :gugudan.js & gugudan_node.js</summary>
<div markdown="1">
<H3>🎈구구단 맞추기</H3> 

-. 매우 단한 프로그램같았지만 반복프로세스를 구현하는게 node.js에서 쉽지않았다.  

- #### 자바스크립트(while)  
  -정답: 작은 while문 탈출, 큰 while문 내 반복 진행  
  -오답: 작은 while문 정답이 될때까지 계속 실행  
![gugudan1](https://i.esdrop.com/d/VSXgawjMHP.png)  


- #### node.js  
      - rl.on의 특성상 enter가 발생하면 계속입력을 받게 되었다.  
      그래서 오히려 오답의 경우에는 정답이 될때까지 계속 입력을 받을 수 있도록 자동으로 실행되었다.
      
      - 초기 정답을 구현하는 과정은 위 그림과 같았지만 nodejs에서 입력을 받고 값을 비교하는게 생각보다 까다로웠다.
      - function quiz 에서 구구단의 결과를 가져오기 위해 입력 이벤트(line)와 하나로 합쳐서 구성했었다.
      
      - 1회차의 quiz: answer => input 비교 동작은 정상적으로 작동했지만   
        2회차부터 quiz를 실행하면 input과 quiz함수의 answer의 동작 순서가 바뀌어 버렸다.  
      input => quiz: answer (답을 외친 후에 문제가 나옴)  
      
      - 해결방법: function quiz와 입력 이벤트를 구분하고 새로운 변수 result에 결과값을 넣어 순서도 지키고, 두 함수를 연결 시킬 수 있었다. 
</div>
</details>

<details>
      <summary>myCar </summary>
      : closure, promise 
</details>
