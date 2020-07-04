import React from "react";

/*class ShopList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const MarketShop = [
      {
        name: "tomato",
        quantity: 56,
        type: "Kilo",
      },
      {
        name: "pepsi",
        quantity: 8,
        type: "Unit",
      },
      { name: "milk", quantity: 60, type: "kilo" },
      {
        name: "indomine noodles",
        quantity: 100,
        type: "Unit",
      },
      {
        name: "luxe biscuit",
        quantity: 40,
        type: "Unit",
      },
      {
        name: "egg",
        quantity: 30,
        type: "Unit",
      },
      {
        name: "Ahmad tea",
        quantity: 20,
        type: "Unit",
      },
      {
        name: "rice",
        quantity: 8,
        type: "Kilo",
      },
      {
        name: "Twinkie cake",
        quantity: 35,
        type: "Unit",
      },
      {
        name: "Lay's chips",
        quantity: 40,
        type: "Unit",
      },
    ];

    const listItems = MarketShop.map(function (d, idx) {
      return (
          
        <React.Fragment>
          <div>
            <li key={idx}>
              {d.name} {` `} {` `}: {d.quantity} {` `} {d.type}
            </li>
          </div>
        </React.Fragment>
      );
    });

    return <div className="item">{listItems}</div>;
  }
}
/*console.log(listItems); return <div>{listItems}</div>;*/

//export default ShopList;
