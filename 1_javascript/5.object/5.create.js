// const apple = {
//   name: 'apple',
//   display: function(){
//     console.log(`${this.name}: π`);
//   }
// }

// const orange = {
//   name: 'apple',
//   display: function(){
//     console.log(`${this.name}: π`);
//   }
// }

//μμ±μ ν¨μ(ν¨μμ΄λ¦ λλ¬Έμ!)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const apple = new Fruit('apple','π');
const orange = new Fruit('orange','π');

console.log(apple);
console.log(apple.name);
console.log(orange);
apple.display();
