'use strict';

var name = prompt('What is your name?');
while(name.length < 1){
  name = prompt('Please enter a valid name.');
}

var conf = confirm(name + ', would you like to play a guessing game?');

var question = ['Does Logan Like cats?', 'Do you think Logan is over 19 years old?', 'Does Logan enjoy long walks on the beach?', 'Is Logan a very cool person?', 'Does Logan like the water?', 'Is Logan a psycopathic murderer?'];

var responseOne = ['#catmasterrace', 'Yes, Logan is 20 years old.', 'No Logan hates the beach, it\'s so cold why would you ever go to the beach here!', 'Yes thank you I am great', 'Yes, Logan has swam for 15 years and loves the water.', 'Maybe.'];

var responseTwo = ['#catsarebetter', 'Do I really look that young?', 'You were right the beach sucks', 'Wow really?', 'I\'m a fish', 'Maybe.'];

if(conf === true){
  var x = 0;
  var total = 0;
  for(var index = 6; index > 0; index--){
    var answer = prompt(question[x]).toLowerCase();
    if(answer === 'yes' || answer === 'yeah' || answer === 'ya' || answer === 'y' || answer === 'sure' || answer === 'confirm'){
      alert(responseOne[x]);
      console.log('Question ' + (x + 1) + ':' + responseOne[x]);
      document.write('<p class="document">' + (x + 1) + ') ' + question[x] + ': ' + responseOne[x]);
      if(x != 3){
        total++;
      }
    }
    else{
      alert(responseTwo[x]);
      console.log('Question ' + (x + 1) + ':' + responseTwo[x]);
      document.write('<p class="document">' + (x + 1) + ') ' + question[x] + ': ' + responseTwo[x]);
      if (x === 3 || x === 6){
        total++;
      }
    }
    x++;
  }
  var r = Math.round((Math.random() * 5 + 1));
  console.log(r);
  for(var i = 6; i > 0; i --){
    var guess = prompt('1)red, 2)blue, 3)green, 4)orange, 5)turquoise, 6)rainbow');
    if(guess == r){
      alert('YOU WIN!');
      total++;
      break;
    }
    else{
      alert('wrong');
    }
  }
  if (total < 7){
    document.write('<p class=".document">You got ' + total + ' out of 7 correct, ' + name + '! Better luck next time! <br><img src="giphy.gif">');
  }
  else{
    document.write('<p class=".document">GOOD JOB ' + name + '! <br><img src="giphy(4).gif">');
  }
}
