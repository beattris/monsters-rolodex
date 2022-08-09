// import React, { Component } from "react";
import Card from "./card.component";

import "./card-list.styles.css";

// FUNCTIONAL COMPONENT
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;

// CLASS-BASED COMPONENT

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return (
//             <Card monster={monster} key={monster.id}/>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
