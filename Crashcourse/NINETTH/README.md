Sure! Here is a more concise and professionally formatted version of the README file:

---

# Web Application Assignment

This project involves building a web application using React (`useState`, `useContext`, `useEffect`, `useRef`), Chakra UI, React Router, and Axios. The backend server will be simulated using `json-server`.

## Features

The web application will have multiple pages:
- Home
- About
- Contact
- Tickets
- Ticket View
- Ticket Create
- Ticket Edit
- Login

## Navbar

- Visible on all pages.
- Includes links to Home, About, Contact, Tickets, and Login.
- Includes a LOGOUT button visible only when the user is logged in, which logs out the user and redirects to the login page.

## Routing

- Only the Login Page is a public route.
- All other pages are private routes, accessible only to logged-in users.
- Redirect non-logged-in users to the login page.

## Page Details

### Home Page
Create a visually appealing UI similar to the provided example.

### About Page
Create a visually appealing UI similar to the provided example.

### Contact Us Page
Use the provided reference to build the Contact Us page.

### Tickets Page
- Create Ticket button at the top right, redirecting to the Ticket Create page.
- Display a list of tickets as cards in a grid layout:
  - 3 cards per row for large screens
  - 2 cards per row for medium screens
  - 1 card per row for small screens
- Each ticket card displays Title, Status, and Priority, and includes a View button redirecting to the Ticket View page.
- Include sorting and filtering options:
  - Sort by Priority: "Low to High" and "High to Low"
  - Filter by Status: "Pending", "Progress", "Completed"

### Ticket View Page
Display all details of a ticket (Title, Description, Assignee, Status, Priority) with Edit and Delete buttons:
- Edit button redirects to the Ticket Edit page.
- Delete button deletes the ticket and redirects to the Tickets page.

### Ticket Create Page
Include elements to create a new ticket:
- Input box for Title
- TextArea for Description
- Select boxes for Assignee, Status, and Priority (0 to 9)
- Create Ticket button to submit the form, making a POST request to update the ticket on both server and client, then redirect to the Tickets page.

### Ticket Edit Page
Include pre-filled elements for the ticket being edited:
- Input box for Title
- TextArea for Description
- Select boxes for Assignee, Status, and Priority (0 to 9)
- Edit Ticket button to submit the form, making a PUT request to update the ticket on both server and client, then redirect to the Tickets page.

### Login Page
Contains:
- Input box for email
- Input box for password
- Login button making a POST request to `https://reqres.in/api/login`. On success, redirects to the Home page and saves the token in AuthContext. On failure, displays an error message.

## Submission

Submit the project using the provided submission link.

