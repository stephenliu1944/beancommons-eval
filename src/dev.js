/** 
 * 该类用于开发调试, 打包时会忽略此文件.
 */
import { module1, module2 } from './index';

var person = module1();
var age = module2(person.age);
function a() { 
    var a = { t1: 1, t2: 2 };
    // console.log('aaaaa', a);
}
document.querySelector('#app').innerHTML = `<h1>hello ${person.name}, ${age}!</h1><h2>DEV: ${__DEV__}</h2>`;