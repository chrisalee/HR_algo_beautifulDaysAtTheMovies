/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

const beautifulDays = (i, j, k) => {
    // Write your code here
    let daysArr = [];
    let reverseDaysArr = [];
    let numberBeautifulDays = 0;
    let totalDays = j - i + 1;
    
    for(let days = i; days <= j; days++) {
      daysArr.push(days);
    }
    // console.log(daysArr);
    
    for(let reverseDay = i; reverseDay <= j; reverseDay++) {
      reverseDaysArr.push(parseInt(reverseDay.toString().split('').reverse().join('')));
    }
    // console.log(reverseDaysArr);
    
    for(let checkDay = 0; checkDay < totalDays; checkDay++) {
      let absDay = Math.abs(daysArr[checkDay] - reverseDaysArr[checkDay]);
      if(absDay % k === 0){
          numberBeautifulDays++;
      }
    }
    
    return numberBeautifulDays;

}
