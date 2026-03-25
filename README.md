# CS-465 Full Stack Development I  
Travlr Getaways Web Application

![Node.js](https://img.shields.io/badge/node.js-v18-green)
![Express](https://img.shields.io/badge/express.js-framework-blue)
![Handlebars](https://img.shields.io/badge/hbs-view_engine-orange)
![Course](https://img.shields.io/badge/SNHU-CS--465-purple)

This repository contains the development of the Travlr Getaways web application for CS-465.  
The project evolves through multiple modules, with each branch representing a stage of the application's development as new full-stack features are introduced.

---

# Module 1.0.0.0 – Initial Static Website Setup

Module 1 focused on preparing the base project structure and deploying the provided Travlr website template.

### Work Completed
- Installed and configured **Node.js and npm**
- Installed the **Express Generator**
- Generated the initial **Express application**
- Installed project dependencies using `npm install`
- Configured the application to run locally using Node
- Imported the **Travlr Getaways HTML template**
- Organized the project directory structure
- Verified the application runs on a local development server
- Confirmed the site loads successfully through `localhost`

### Result
The application successfully served the static Travlr website using an Express server environment, establishing the base for later MVC conversion.

---

# Module 2.0.0.0 – MVC Routing Implementation

Module 2 refactored the original static website into a **Model-View-Controller (MVC)** architecture using Express routing and Handlebars templating.

### Work Completed

#### MVC Architecture
- Created the `app_server` directory
- Added MVC subdirectories:
  - `controllers`
  - `routes`
  - `views`

#### Controllers
- Created the **traveller controller**
- Implemented controller methods for:
  - Home
  - Travel
  - Rooms
  - Meals
  - News
  - About
  - Contact

#### Routing
- Implemented centralized routing in `routes/index.js`
- Connected each route to the corresponding controller function
- Verified route functionality through browser navigation

Example routes:
/
/travel
/rooms
/meals
/news
/about
/contact


#### View Engine Conversion
- Installed and configured **Handlebars (hbs)** as the view engine
- Converted HTML pages into `.hbs` templates
- Registered the views directory in the Express server configuration

#### Navigation Refactor
- Updated navigation links to use **Express routes instead of static HTML files**
- Ensured header and footer navigation consistently reference route paths

Example:
href="/travel"
href="/rooms"


#### Static File Handling
- Configured Express to serve static assets from the **public directory**
- Verified images, CSS, and assets load correctly through Express

#### Controller Logging
Added console logging in each controller method to verify execution:
console.log("Home controller triggered")


This allowed route verification directly from the terminal during testing.

#### Error Handling Enhancement
- Implemented a **custom 404 catch-all route**
- Displays a custom `"Page not found"` message for undefined routes

Example test:
localhost:3000/apples


### Result
The Travlr application now runs using a structured MVC architecture with controller-based routing and dynamic Handlebars views, providing a scalable foundation for future full-stack development.

---

## Repository Structure

```text
CS-465-14116-M01-Full-Stack-Development-I-2026
│
├── app_server
│   ├── controllers
│   │   └── traveller.js
│   ├── routes
│   │   └── index.js
│   └── views
│       ├── index.hbs
│       ├── travel.hbs
│       ├── rooms.hbs
│       ├── meals.hbs
│       ├── news.hbs
│       ├── about.hbs
│       └── contact.hbs
│
├── public
│   ├── css
│   └── images
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```


---

# Development Environment
- Node.js
- Express.js
- Handlebars (hbs)
- Git & GitHub
- Visual Studio Code

---

# Module 3.0.0.0 – Dynamic Data Integration and Rendering

Module 3 focused on enhancing the Travlr Getaways application by integrating dynamic data into the Travel page using JSON and Handlebars templating.

### Work Completed

#### Dynamic Data Integration
- Created a `data` directory to store structured application data
- Added `trips.json` to hold travel destination information
- Structured trip data with properties for name, image, and description

#### Controller Enhancement
- Updated the `traveller` controller to read data from `trips.json`
- Passed dynamic trip data to the `travel.hbs` view
- Maintained separation of concerns between data handling and presentation

#### View Refactor
- Modified `travel.hbs` to dynamically render trip data
- Implemented Handlebars iteration using `{{#each trips}}`
- Replaced hardcoded HTML content with dynamic placeholders

#### Routing and MVC Alignment
- Verified `/travel` route correctly connects to the controller
- Ensured controller passes data to the view using Express rendering
- Maintained proper MVC structure across the application

#### Testing and Validation
- Tested the application locally using `localhost:3000`
- Confirmed dynamic content renders correctly on the Travel page
- Verified images, styling, and layout remain consistent with the original design

### Result

The Travlr application now supports dynamic content rendering using JSON data and Handlebars templates. The Travel page successfully transitions from static HTML to a data-driven implementation while maintaining the established MVC architecture. This improvement enhances scalability and prepares the application for future full-stack functionality.
---

# Author
Robert Lake  
Southern New Hampshire University  
CS-465 Full Stack Development I
