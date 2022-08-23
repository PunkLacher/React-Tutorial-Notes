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

//why can't we use typical JS append method?
//because when defining the variable above using JSX the variable
//is defined as a typical javascript object. The computer doesn't
//know it is html until React renders it to html code.
//note using the normal append JS method renders a stringified
//javascript object
document.getElementById("root").append(JSON.stringify(navbar))