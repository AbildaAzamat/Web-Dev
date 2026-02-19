//1
console.log('Hello word');
//2
let message;
message="Hello";
console.log(message);
//3
const myBith="11.1.1222";
//myBith = "12.12.1111";
console.log(myBith);
//4
let age = prompt('How old are you?', 100);
console.leg(`You are ${age} years old!`);
let isBoss = confirm("Are you the boss?");
alert( isBoss );//true or false
//5
let komp=true;
console.log(typeof komp);//true
komp=String(komp);
console.log(typeof komp);//'true'

alert( "6" / "2" );//3

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
//6
let x = 1;
x = -x;
alert( x ); // -1, unary negation was applied

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2

alert( 2 ** 2 ); // 2² = 4

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)

alert( '1' + 2 );//'12'
//7
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

alert( '2' > 1 ); // true, string '2' becomes a number 2 
//8
if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }
//9
// ||=OR
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
// &&=AND
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
// !=NOT
alert( !true ); // false
alert( !0 ); // true
//10
let user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)
//11
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }
//12
let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
  case 5:
        alert( 'Too big' );
        break;
    default:
        alert( "I don't know such values" );
}
//13
function showMessage() {
    alert( 'Hello everyone!' );
  }
