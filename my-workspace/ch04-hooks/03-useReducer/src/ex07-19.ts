// 내장 객체 Array - reduce(callback, initialValue) 메서드

(() => {
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce((acc, num, index) => {
    console.log(`${index} => ${acc} + ${num} = ${acc + num}`);
    return acc + num;
  }, 0);
  console.log(sum);
})();
