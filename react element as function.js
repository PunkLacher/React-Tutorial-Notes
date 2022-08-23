//Typical practice for writing React components is to put elements in a function.
//Functions variables use Pascal case (compound words both capitalized)
//also by convention you invoke the function in ReactDOM.render using brackets < /> instead of parenthesis ()

function TempPage() {
  return (
    <body>
      <img src="assets/react-logo.png" width="40px"></img>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps</li>
      </ul>
    </body>
  );
}

ReactDOM.render(<TempPage />, document.getElementById("root"));
