// 商品クラスの生成
class Item {
    // コンストラクタ
    constructor(id, name, stock) {
        //　引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }

    // メソッド
    // Idの値を返す
    getId() {
        return this.id;
    }

    // nameの値を返す
    getName() {
        return this.name;
    }

    // stockの値を返す
    getStock() {
        return this.stock;
    }

    // 商品の追加
    addStock(num) {
        this.stock += num;
    }

    // 商品の販売
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

class Bed extends Item {
    constructor(id, name, stock, size) {
        //　引数の値を使ってプロパティの初期化を行う
        super(id, name, stock);
        this.size = size;           //　ベッドのサイズ
    }

    getSize() {
        return this.size;
    }
}

/* Added from here */
class Chair extends Item {
    constructor(id, name, stock, used) {
        super(id, name, stock);
        this.used = used;
    }
}
/* Added by here */

// インスタンスの生成
let bed1 = new Bed('0001', 'ソファベッド', 100, 'M');
let bed2 = new Bed('0002', 'シングルベッド', 100, 'S');
let bed3 = new Bed('0003', '子ども用ベッド', 10, 'S');
let item4 = new Item('0004', '鍋', 100);
let chair5 = new Chair('0005', '丸椅子', 1, true);  // Added
let chair6 = new Chair('0006', '肘掛け椅子', 10, false);  // Added
let chair7 = new Chair('0007', 'ロッキングチェア', 10, false);  // Added


let itemList = [bed1, bed2, bed3, item4, chair5, chair6, chair7]

itemList.forEach((e) => console.log(e));

chair5.addStock(5);
chair6.sale(3);
chair5.sale(3);

itemList.forEach((e) => console.log(e));

//　全体の在庫数を確認
let totalStock = 0;
itemList.forEach(e => totalStock += e.stock);

console.log('全体の在庫数:' + totalStock);