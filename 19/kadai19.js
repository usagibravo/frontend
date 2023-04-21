  // Reactコンポーネントを継承して新たなコンポーネントを作成
  class CountButton extends React.Component {
    // コンストラクター
    constructor(props) {
      super(props);
      // 状態を保持するプロパティstate
      this.state = { count : 100 };
    }

    //　出力処理
    render() {
      return React.createElement(
        "button",
        { onClick:() => {
          if (this.state.count != 0) {
            this.setState({ count : this.state.count - 1 });
          } else {
            this.setState({ count : 100 });
          }
        }},
        "カウント数：" + this.state.count
      );
    }
  }

  // 表示される場所の要素とコンポーネントを結び付けて表示させる
  const domContainer = document.querySelector("#app");

  // ReactDOMに出力処理を行う
  ReactDOM.render(
    // ReactオブジェクトでCountButtonから新たな要素を作成
    React.createElement(CountButton),
    // 出力させたい場所のコンテナ（HTML側の要素）
    domContainer
  );