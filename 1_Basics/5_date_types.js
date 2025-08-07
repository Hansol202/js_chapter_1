const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-------------------');

const coding = '코딩';
console.log(typeof coding);

const ive = " '아이브' 안유진";
console.log(ive);

/**
 * Template Literals
 * 
 * \t
 * \n
 */
const iveYuJin = '아이브\n안유진'
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\안유진';
console.log(backSlash);
const smallQutoation = '아이브\'코딩';

const iveWonYoung2 = `아이브i '"
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + '안유진');
console.log(`${groupName} 안유진`);

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

let noInit;
console.log(noInit);
console.log(typeof noInit);

let init = null;
console.log(init);
console.log(typeof init);
console.log('-------------------');

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const stmboll1 = Symbol('1');
const stmboll2 = Symbol('1');

console.log(stmboll1 === stmboll2);

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('-------------------');

const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '리세',
    '원영',
    '이서',
];
console.log(iveMembersArray);

console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);



 