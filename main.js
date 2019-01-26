//Users name
const userName = '';
//Adds user's name or defaults if blank
userName ? console.log('Hello ' + userName) :
console.log('Hello!');
//User's question goes here
const userQuestion = 'Will I win the lottery?'
console.log('You asked: ' + userQuestion);
//Random number generator
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
   case 2:
    eightBall = 'Reply hazy...try again';
    break;  
       case 3:
    eightBall = 'Out to lunch, please come back later';
    break;  
     	 case 4:
    eightBall = 'Not likely!';
    break;  
       case 5:
    eightBall = 'Outlook not so good';
    break;
       case 6:
    eightBall = 'Signs point to Yes!';
    break;  
       case 7:
    eightBall = 'My sources say no';
    break;  
}
console.log('The Magic Eightball answered: ' + eightBall);