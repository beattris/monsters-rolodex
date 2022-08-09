// import React, { Component } from "react";

import "./card.styles.css";

// FUNCTIONAL COMPONENT
const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

// CLASS-BASED COMPONENT
// export default class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
