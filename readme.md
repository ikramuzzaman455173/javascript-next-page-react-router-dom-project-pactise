<h3 align='center'>React Router Dom Use And Install Very Eassyli 😃</h3>

 - ### 1st Step `npm install react-router-dom`

 ```bash
 npm install react-router-dom
 ```

 **Or Also Use**

 ```bash
 yarn add react-router-dom
 ```

- ### Step 2 Copy The Code And Paste main.jsx File



```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
```

### React Router Nested Routing:)

> Nested Routes are a powerful feature. While most people think React Router only routes a user from page to page, it also allows one to exchange specific fragments of the view based on the current route. For example, on a user page one gets presented multiple tabs (e.g. Profile, Account) to navigate through a user's information. By clicking these tabs, the URL in the browser will change, but instead of replacing the whole page, only the content of the tab gets replaced.


```jsx
import React from 'react'
import { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './Components/About'
import Header from './Components/Header'
import Home from './Components/Home'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:
      [
        {
          path: '/Home',
          element:<Home/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/contact',
          element:<Contact/>
        },
      ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
```

**Home.jsx**

```jsx```
import React from 'react';

const Home = () => {
  return (
    <>
      <h3 align="center">This Is Our Home Page 😃</h3>
    </>
  );
};

export default Home;
```



**About.jsx**

```jsx```
import React from 'react';

const About = () => {
  return (
    <>
      <h3 align="center">This Is Our About Page 😃</h3>
    </>
  );
};

export default About;
```


**Contact.jsx**

```jsx
import React from 'react';

const Contact = () => {
  return (
    <>
      <h3 align="center">This Is Our Contact Page 😃</h3>
    </>
  );
};

export default Contact;
```

### Outlet

> The Outlet component renders the matching child route with its respective component (here either Profile or Account component) from the parent Routes' component collection of Route components.


**App.jsx**

```jsx
import React from 'react';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <div align="center">This Is Our Home Page 😃</div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
```


### React Router Dom `<Link></Link>` Tag:)


> A `<Link>` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `<Link>` renders an accessible `<a>` element with a real href that points to the resource it's linking to. This means that things like right-clicking a `<Link>` work as you'd expect. You can use
`<Link reloadDocument>` to skip client side routing and let the browser handle the transition normally (as if it were an `<a href>`).


**Simple Examples Code Use `<Link>` Tag**


```jsx
import * as React from "react";
import { Link } from "react-router-dom";

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

```


**Note ✍**



> `<Link to>` with a .. behaves differently from a normal `<a href>` when the current URL ends with /. `<Link to>` ignores the trailing slash, and removes one URL segment for each ... But an `<a href="...">` value handles .. differently when the current URL ends with / vs when it does not.


**`<NavLink/>` Active**

> To add an active class, we can use the className attribute and pass in a function:

```jsx
<NavLink
  to="users"
  className={() => console.log('I am called every route change...')}
>
  Users
</NavLink>
```

> This function gets invoked on every route change, which makes it the perfect place to add an active class (or add an `inactive `state).

> When supplying a function, we’re given an object through the function arguments that contains an `isActive` property:


```jsx
<NavLink
  to="users"
  className={(state) => console.log(state)} // { isActive: true }
>
  Users
</NavLink>
```


> With this in mind, we can first destructure the `isActive` value to clean things up and secondly declare the active class for our `<NavLink>` in React Router as a string:


```jsx
<NavLink
  to="users"
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  Users
</NavLink>
```

> What’s more, this approach is also fantastic as it supports multiple classes (I’m looking at you, [Tailwind CSS](https://tailwindcss.com/docs/installation) :)

```jsx
<NavLink
  to="users"
  className={({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
  }
>
  Users
</NavLink>
```

