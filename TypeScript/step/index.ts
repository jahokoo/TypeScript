/* 변수 문법 */

// 기본 문법
// string
var user : string = 'kim'

//number
var user : number = 123;

// 이외에 boolean, undefined, null, bigint, [], {} 등이 있다.

/* array 타입지정 */

// string
var array : string[] = ['kim' , 'lee'];

// number
var array : number[] = [123, 456];

// boolean
var array : boolean[] = [true, false];

// string과 number 두개 대입
var array : [string, number] = ['kim' , 123];

// 맞지않는 경우에 에러 발생
// Type 'string' is not assignable to type 'number'.
var array : [string, number] = ['kim' , '123'];



/* object 타입지정 */
var object : {name : string} = {name : 'kim'};

// name이라는 속성이 들어오는게 불확실할 때 우측에 '?'를 붙여준다.
var object2 : {name? : string} = { };


/* union 타입지정 */

var union : string | number = 'kim';

var union : string | number = 123;

var union2 : string[] | number = ['kim', 'lee']


/*  Type alias*/
// 타입을 변수에 담아 사용할 수 있다.
type Types = string | number;

var union3 : Types = 123;


/* 함수에 타입지정 */

// 매개변수에 타입지정
function func(x : number){
    return x * 2;
}


// return 값에 타입지정
function func2(x : number) : number{
    return x * 2;
}


/* tuple */

// 무조건 첫 번째는 number, 두 번째는 boolean 타입이 와야한다.
type Member = [number, boolean];

var world : Member = [123, true];

var world : Member = ['asd',false];


/* object 속성 */

// 프로퍼티가 100개 이상 필요하다면 하나하나 다 작성할 수는 없을 것이다.
// type Dict = {
//     name : string;
// }

// var kim : Dict = {name : 'kim'};

// object속성에 타입을 지정해주자.
type Dict = {
    // key에는 string만 올 수 있고
    // value에는 string 또는 number가 올 수 있게된다.
    [key : string] : string | number;
}

var kim : Dict = {age : 123, name : 'john'};


/* class 타입지정 */

class User {
    name : string
    constructor(name : string){
        this.name= name;
    }
}
