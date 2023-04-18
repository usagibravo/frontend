let apple = {
    name: 'りんご',
    size: 'big',
    color: 'red',
    weight: 200
};
let orange = {
    name: 'みかん',
    size: 'small',
    color: 'orange',
    weight: 100
};
let grape = {
    name: 'ぶどう',
    size: 'medium',
    color: 'violetto',
    weight: 300
};

let fruit = [apple, orange, grape];
// console.log(fruit)

let totalWeight = 0

fruit.forEach(e => 
  {
    totalWeight += e.weight; 
//    console.log(e); 
//    console.log(totalWeight);
  });

console.log('fruitの総重量は：' + totalWeight + '　グラムです。');