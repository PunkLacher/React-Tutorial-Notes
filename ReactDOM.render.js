//ReactDOM.render
//allows you to specify HTML within your JS script
//so you can render specific HTML to an element by ID.
//first argument is html tags and content,
//2nd argument is where you want to inject it in the html file using
//either getElement or querySelector methods of the document object


ReactDOM.render(<ul><li>List Item 1</li><li>List Item 2</li></ul>, document.getElementById("root"))


//React is Declarative (tell program what to do)
ReactDOM.render(<h1>React is Declarative!</h1>, document.getElementById("temp1"))

//Vanilla JS is imperative (tell program exactly how to do)
const h1 = document.createElement("h1")
h1.textContent = "Vanills JS is imperative!"
h1.className = "header"
document.getElementById("temp2").append(h1)
