# React routing

Use react router to allow different pages to be navigated to.

## Example

[The example is here](https://jsf-react-routing.now.sh).

# Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.

## Task Steps

### Setup

1. Use NPM to install React Router from `react-router-dom` i.e. run `npm install react-router-dom`
2. Import React Router components into the App component.  This is more complicated than other imports as we need to import multiple things from the same file.  Use the code:
    ```
    import {
        BrowserRouter as Router,
        Switch,
        Route,
        NavLink,
    } from "react-router-dom";
    ```
3. Now we have all the components we need for routing.

### Implement routing

1. Add the `Router` component to be the root component in App.
2. Replace each of the page compoents with a `Route` component, add an attribute to each Route called `component`that points to the imported Component e.g. `<Home />` will be come `<Route component={Home} />`.  Note we put `{Home}` not `"Home"` because `Home` refers to a variable.
3. Add the URL path we want each page component to display for.  On each Route, add a `path` attribute and set it to the URL path we want it to display for.  For home use "/" and for about us use `"/aboutus"`.  Note that we use `"/aboutus"` and not `{/aboutus}` because `/aboutus` doesn't refer to a variable, it is just a string.
4. Add the attribute of `exact` onto the home route.  It doesn't need a value so just put the attribute name without an equals or value after it.  We always need to add this to our Home route.
5. Lastly, wrap the Routes in a `Switch` component.

### Update navigation links

1. We need to update the navigation links to work with routing.
2. Change the Nav.NavLink bootstrap components in the NavBar to use the React Router NavLink component.  This:
    ```
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/aboutus/">About</Nav.Link>
    ```
    Will become this:
    ```
    <NavLink to="/" exact className="nav-link">Home</NavLink>
    <NavLink to="/aboutus" className="nav-link">About</NavLink>
    ```
    Notice the change from `href`to `to`; the `exact` attribute on the home link; and the addition of the class name, attribute.  The class name is needed to pick up the Bootstrap styles.
3. Update the Website Name link by chaning this:
    ```
    <Navbar.Brand href="/">Website Name</Navbar.Brand>
    ```
    To this:
    ```
    <NavLink to="/" exact>
        <Navbar.Brand>Website Name</Navbar.Brand>
    </NavLink>
    ```
    This time we wrap the old component inside the `NavLink` component, and then move the `href` attribute to the `to` attribute.

You should now have a working routable site.