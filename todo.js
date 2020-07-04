import React from "react";

class TodoList extends React.Component {
  state = {
    Name: " ",
    quantity: " ",
    type: " ",
  };

  handlechange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    //console.log(this.state);
    this.setState({
      Name: "",
      quantity: "",
      type: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handlesubmit}>
            <div className="div1">
              <label>
                <strong>Add new product:</strong>
                <input
                  type="text"
                  id="Name"
                  placeholder="Add new product"
                  onChange={this.handlechange}
                  value={this.state.Name}
                />
              </label>
              <label>
                <strong> product quantity:</strong>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Add quantity"
                  onChange={this.handlechange}
                  value={this.state.quantity}
                />
              </label>
              <label>
                <strong> product type:</strong>
                <input
                  type="text"
                  id="type"
                  placeholder="Add type"
                  onChange={this.handlechange}
                  value={this.state.type}
                />
              </label>
              <input className="addbutton" type="submit" value="Add" />
              {/* <button className="addbutton">Add</button>*/}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default TodoList;
