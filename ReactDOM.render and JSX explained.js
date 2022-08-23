//JSX
//Javascript XML

//Can inject class right in html element, except we use 
//className in lieu of class
ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("temp1"))


//can also store html code in a variable

const element = <h1 className="header">This is stored in a variable</h1>
console.log(element)

ReactDOM.render(element, document.getElementById("temp1"))

//React can't render two sibling elements side by side unless
//they are wrapped in a parent element, i.e. <div>

ReactDOM.render(
  <div>
    <h1>child element 1</h1>
    <p>child element 2</p>
  </div>,
  document.getElementById("temp2")
)

//can also save the html elements all togther in a variable

const page = (
  <div>
    <h1>variable child element 1</h1>
    <p>variable child element 2</p>
  </div>
)

ReactDOM.render(page, document.getElementById("temp3"))

//react renders the html in the varible as a javscipt object
//this is demonstarted by console logging the variable

console.log(page)