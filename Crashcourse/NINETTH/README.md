
# Ticket Management System

## Overview
This is a web application for managing tickets, built using React, Chakra UI, React Router, and Axios. The application allows users to log in, view, create, edit, and delete tickets. It also includes features such as sorting and filtering tickets based on priority and status.

## Features
- **Login Page**: Users can log in with their email and password. Upon successful login, they are redirected to the Home page.
- **Home Page**: Displays a visually appealing UI with information about the application.
- **About Page**: Provides information about the project and its purpose.
- **Contact Us Page**: Allows users to contact the support team for assistance.
- **Tickets Page**: Lists all tickets as cards in a grid layout. Users can view individual ticket details and create new tickets.
- **Ticket View Page**: Displays detailed information about a specific ticket, including title, description, assignee, status, and priority. Users can edit or delete the ticket from this page.
- **Ticket Create Page**: Allows users to create a new ticket by providing title, description, assignee, status, and priority.
- **Ticket Edit Page**: Enables users to edit existing ticket details such as title, description, assignee, status, and priority.
- **Sorting and Filtering**: Users can sort and filter tickets based on priority and status.
- **Navbar**: Provides navigation links to different pages and includes a Logout button for authenticated users.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ticket-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Technologies Used
- React
- Chakra UI
- React Router
- Axios
- JSON Server (for mock backend)

## Folder Structure
```
ticket-management-system/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── TicketCreate.js
│   │   ├── TicketEdit.js
│   │   ├── TicketList.js
│   │   └── ...
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── TicketView.js
│   │   ├── Tickets.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── AuthContext.js
│   ├── PrivateRoute.js
│   └── ...
│
├── package.json
└── ...
```

## Usage
- The application provides an intuitive interface for managing tickets.
- Users can navigate between different pages using the Navbar.
- Only authenticated users can access private routes (except the Login page).
- Users can perform CRUD operations on tickets.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any feature requests, bug fixes, or suggestions
