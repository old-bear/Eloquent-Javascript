/**
 * Date: Sun May 22 17:23:02 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Print numbers from 1 to 100 with Fizz and Buzz
 */

for (var i = 1; i < 100; ++i) {
    var divisible3 = (i % 3 == 0);
    var divisible5 = (i % 5 == 0);
    if (divisible3 && divisible5) {
        console.log('FizzBuzz');
    } else if (divisible3) {
        console.log('Fizz');
    } else if (divisible5) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
