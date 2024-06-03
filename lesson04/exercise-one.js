let fruit = ['watermelon', 'raspberry', 'kiwi', 'mango', 'peach'];
console.log(fruit);

fruit.push('honeydew');
console.log(fruit);

fruit.splice(2,1);
console.log(fruit);

const fruitList = fruit.join( ', ');
console.log(fruitList);
