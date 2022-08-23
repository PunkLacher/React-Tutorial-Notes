/*
Create a navbar in JSX:
  -USe the semantic 'nav' element as the parent wrapper
  -HAve an h1 element with the brand name of your website
  -Insert an unordered lisr for the other new elements
     -inside the 'ul' have three 'li's for "pricing", About and Contact
  -dont worry about styeling yet, itll just be plain looking html for now
*/

const navbar = (
  <nav>
    <h1>Punklacher Webpage</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))