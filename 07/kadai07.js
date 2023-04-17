let fruit = {apple: 'りんご', strawberry: 'いちご', grape: 'ぶどう', lemon: 'れもん'};
console.log('grapeの値は：' + fruit.grape);
console.log('fruitのkeyの一覧は：')
for(key in fruit) {
    console.log(key);
}
console.log('fruitの全ての値は：' + Object.values(fruit));