/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
'use strict';

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`${data1[0]}ºC ${data1[1]}ºC ${data1[2]}ºC`);

const printForecast1 = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days, `;
  }
  console.log('...' + str);
};
printForecast1(data1);

console.log(
  `${data2[0]}ºC ${data2[1]}ºC ${data2[2]}ºC ${data2[3]}ºC ${data2[4]}ºC`
);

const printForecast2 = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days, `;
  }
  console.log('...' + str);
};
printForecast2(data2);
