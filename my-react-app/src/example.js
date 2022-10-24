

class Person {
    constructor (name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}

const personOne = new Person ('rasheedah', 'female', '12')

console.log (personOne)

const numerator = 100, denominator = 'a';

try {
    console.log (numerator/denominator);
    console.log(a)
} catch (error) {
    console.error('an error occur');
    console.log (error);
}