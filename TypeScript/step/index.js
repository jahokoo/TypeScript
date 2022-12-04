/* 변수 문법 */
// 기본 문법
// string
var user = 'kim';
//number
var user = 123;
// 이외에 boolean, undefined, null, bigint, [], {} 등이 있다.
/* array 타입지정 */
// string
var array = ['kim', 'lee'];
// number
var array = [123, 456];
// boolean
var array = [true, false];
// string과 number 두개 대입
var array = ['kim', 123];
// 맞지않는 경우에 에러 발생
// Type 'string' is not assignable to type 'number'.
var array = ['kim', '123'];
/* object 타입지정 */
var object = { name: 'kim' };
// name이라는 속성이 들어오는게 불확실할 때 우측에 '?'를 붙여준다.
var object2 = {};
/* union 타입지정 */
var union = 'kim';
var union = 123;
var union2 = ['kim', 'lee'];
var union3 = 123;
/* 함수에 타입지정 */
// 매개변수에 타입지정
function func(x) {
    return x * 2;
}
// return 값에 타입지정
function func2(x) {
    return x * 2;
}
var world = [123, true];
var world = ['asd', false];
var kim = { age: 123, name: 'john' };
/* class 타입지정 */
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
