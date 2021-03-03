export default function toBase(num, base = 2) {
  let powArr = [];
  while (num != 0) {  
    powArr.push(num % base);
    num = Math.floor(num / base);
  }
  return parseInt(powArr.reverse().join(''));
}
