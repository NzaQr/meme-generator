import React from "react";

function App() {
  return (
    <div>{this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}</div>
  );
}
export default App;
