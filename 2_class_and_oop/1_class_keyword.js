/**
 * Class Keyword
 */
class Idolmodel {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

// constructer = 생성자

const yuJin = new Idolmodel('안유진', 2003);
console.log(yuJin);
const gaeul = new Idolmodel('가을', 2002);
console.log(gaeul);
const ray = new Idolmodel('레이', 2004);
console.log(ray);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(gaeul.sayName());

console.log(typeof Idolmodel);
console.log(typeof yuJin);

