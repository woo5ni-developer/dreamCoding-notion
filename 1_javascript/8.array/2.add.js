const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); //λ°°μ΄μ μμ΄νμ κ°―μ


// const fruits = ['π', 'π', 'π', 'π'];
// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ π© - μΈλ±μΈλ₯Ό μ§μ ν΄μ μ¬μ©νλ λ°©λ²
fruits[4] = 'π';
console.log(fruits);

delete fruits[1];
console.log(fruits); //λ°°μ΄μμ΄νμ΄ μ¬λΌμ§μ§ μκ³  λΉμΉΈμΌλ‘ λ¨μμμ.