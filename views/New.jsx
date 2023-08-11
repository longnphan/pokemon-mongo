import React from "react";

function New() {
  return (
    <div>
      <h1>Add Pokemon</h1>
      <form action="/new" method="POST">
        <label htmlFor="name">Pokemon Name:</label>
        <br />
        <input type="text" id="name" name="name"></input>
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default New;
