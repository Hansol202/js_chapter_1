/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 10; i > 0; i--){
    console.log(i);
}

for(let i = 0; i < 3; i ++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}

// *을 이용해서 6x6 정사각형을 출력해라
let square = '';
let side = 6;

for(let i = 0; i <6; i++){
    for(let j = 0; j < side; j++)
        square += '*';
    square += '\n';
}
    

console.log(square);

/**
 * for...in
 */

const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

for(let key in yuJin){
    console.log(key);
}

console.log('-------------------');

const iveMembersArray = ['안유진', '장원영', '가을', '레이', 'Liz', '이서'];

for(let key in iveMembersArray){
    console.log(key);
    console.log( `${key}:${iveMembersArray[key]}` );
}

console.log('-------------------');

/**
 * for...of
 */

for(let value of iveMembersArray){
    console.log(value);
}

/**
 * while
 */
let number = 0;

while(number < 10){
    number++;
}

console.log(number);

/**
 * do...while
 */
number = 0;

do{
    number++;
}while(number <10);

console.log(number);

/**
 * break
 */

console.log('--------------------');

for(let i = 0; i < 10; i++){
    if(i ===5){
        break; // 루프를 중단
    }
    console.log(i);
}

console.log('--------------------');

number = 0;

while(number <10){
    if(number === 5){
        break;
    }
    number ++;
    console.log(number);
}

/**
 * continue
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('--------------------');

number = 0;

while(number < 10){
    number ++;
    if(number === 6){
        continue;
    }
        console.log(number);
    
}
