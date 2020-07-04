import React from "react";

import TodoList from "./components/todo/todo.js";
//import TodoListSec from "./components/todo/todo1.js";
//import ShopList from "./components/todo/Arrayitem";

class App extends React.Component {
  state = {
    items: [
      {
        Name: "tomato",
        quantity: 56,
        type: "Kilo",
      },
      {
        Name: "pepsi",
        quantity: 8,
        type: "Unit",
      },
      { Name: "milk", quantity: 60, type: "kilo" },
      {
        Name: "indomine noodles",
        quantity: 100,
        type: "Unit",
      },
      {
        Name: "luxe biscuit",
        quantity: 40,
        type: "Unit",
      },
    ],
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;

    items.push(item);
    this.setState({ items: items });
    console.log(items);
  };

  render() {
    return (
      <React.Fragment>
        <h1>my marketing list</h1>
        <TodoList addItem={this.addItem} />
        {/*<TodoListSec />*/}
      </React.Fragment>
    );
  }
}
export default App;
