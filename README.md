# Tammy's Shopping Cart App

# 1
**Scenario:** A user can visit the shopping cart website <br/>
**Given** a user visits the site by previewing the `index.html` in the `shopping_cart` folder <br />
**And** the website will have a title `Tammy's Shopping Cart App` <br />
**And** the website will have a header with the text `Tammy's Shopping Cart App` <br />
**And** the website will have a `shopping-cart` element <br />
**And** the website will include the custom style library `the_cart.css` <br />
**And** the website will include the custom library `the_cart.js` <br />

# 2
**Scenario:** A user can see a list of items to add to their shopping cart <br/>
**Given** a developer defined a list of items called `shoppingCartItems` in `the_cart.js`
**And** a developer defined a function that creates an element for each item in `shoppingCartItems`

# 3
**Scenario:** A user can add an item to their shopping cart <br/>
**Given** a user can see shopping elements in `Tammy's Shopping Cart`</br>
**And** a developer defined a `shopping-cart` </br>
**And** a developer assigned a function to button for on-click adding name and total to `final-purchases` </br>
**And** a developer tells the function to display each name and the total </br>

### Roles
- The website
- A user
- A developer

-----

# Objective
## Write a program that prints an item on a shopping lists total
- Must have a list of items to select from
- The add button should add the item to the shopping list
- Create an array for the items and an array for the prices
- Loop through the arrays printing the name and price of the item on a new line
- Total up the combined cost of the amount of items with the amount labeled total   