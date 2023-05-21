## [GameToys (Click)](https://video-gaming-toys.web.app/)

## Features

1. **Navbar:**

   - Including a navbar with the website logo, website name, home, all toys, my toys, add a toy, blogs, and user profile picture.
   - The user profile picture, add a toy, and my toys options in the navbar are conditionally displayed based on the user's login status.
   - If the user is logged in, the profile picture is shown; otherwise, the login button is displayed.
   - When hovering over the profile picture, displaying the user's name (if available).

2. **Login & Registration Systems:**

   - Implement login and registration functionality with relevant error messages.
   - The login page includes fields for email/password and a Google sign-in option.
   - Provide a link to the registration page.
   - The registration page includes fields for name, email, password, and photo URL.

3. **Add A Toy Page (Private Route):**

   - Here is a private route for adding a toy to the website.
   - The form includes fields for the picture URL, toy name, seller name (from the logged-in user), seller email (info from the logged-in user), sub-category, price, rating, available quantity, and detail description.

4. **All Toys Page:**

   - Here is a page that displays all the toys added by users in a tabular form.
   - Each row includes information such as the seller (if available), toy name, sub-category, price, available quantity, and a view details button.
   - Also, here is implement a search system based on the toy name.
   - Now, there is a maximum of 20 results by default using pagination or limit.

5. **My Toys Page (Private Route):**

   - Here is a private route for the logged-in users to view and manage their added toys.
   - Displaying all the toys added by the user in a tabular form.
   - Each row includes buttons for updating and deleting the toy.
   - The update button allows the user to modify the toy's price, available quantity, and detail description.
   - The delete button removes the toy from the list, with a confirmation prompt.

6. **Single Toy Details (Private Route):**

   - Creating a private route for viewing the details of a specific toy (/toy/:id).
   - Displaying information such as the picture, toy name, seller name, seller email, price, rating, available quantity, and detail description.

7. **404 Page:**

   - Creating a custom 404 page with an interesting image or GIF.
   - Including a "Back to Home" button that redirects the user to the home page.
   - Excluding the header and footer from this page.

8. **Sorting System on My Toys Page:**
   - Implement a sorting system on the My Toys page to sort the toys in ascending or descending order based on price.
