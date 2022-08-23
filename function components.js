//Composability, put components into seperate functions for use
//throughout, for example a Header component

function Header() {
  return (
    <header>
      <nav>
        <img src="assets/react-logo.png" width="40px"></img>
      </nav>
    </header>
  );
}

//the Header function can be put into the MyPage function
//just like an html element, but its actually a component.

function Body() {
  return (
    <div>
      <h1>Reason I'm excited to learn React:</h1>
      <ol>
        <li>I want to learn Web Dev</li>
        <li>I want to learn programming</li>
        <li>I like Javascript</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
       <small>© 2022 Punklacher Development. All rights reserved.</small>
    </footer>
  );
}

function MyPage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

ReactDOM.render(<MyPage />, document.getElementById("root"));
