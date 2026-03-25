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

# Module 4.0.0.0 – API Development and Database Integration

Module 4 expanded the Travlr Getaways application into a full-stack system by integrating MongoDB and implementing an API layer for data access.

### Work Completed

#### Database Integration
- Created the `app_api` directory
- Added subdirectories:
  - `models`
  - `routes`
  - `controllers`
- Implemented a MongoDB connection using **Mongoose**
- Created `db.js` to establish and manage the database connection
- Verified successful connection through terminal output

#### Data Modeling
- Created a Mongoose schema for trip data
- Defined structure including:
  - name
  - image
  - description
- Ensured consistent data structure across all database entries

#### Data Population
- Used existing `trips.json` data to populate the MongoDB database
- Implemented a seeding process to insert trip data into the Trips collection
- Verified data presence using MongoDB Compass

#### API Implementation
- Created API routing in `app_api/routes/index.js`
- Implemented controller logic in `app_api/controllers/trips.js`
- Built endpoint:

Example:

/api/trips

- Configured the server to use the API route with `/api` prefix
- Verified endpoint returns JSON data in the browser and Postman

#### Server Integration
- Updated `index.js` to:
  - Include API routing
  - Initialize database connection
- Ensured API and frontend routes operate simultaneously without conflict

#### Testing and Validation
- Tested API endpoint using browser and Postman
- Confirmed JSON response format and data accuracy
- Verified database contents match expected structure

#### Routing Enhancement
- Updated internal page links to use route-based navigation instead of static `.html` files
- Ensured all navigation flows through Express controllers and Handlebars views

#### Error Handling Enhancement
- Replaced basic 404 response with a custom Handlebars 404 view
- Maintained application layout and styling for undefined routes

#### Additional Enhancement
- Implemented an interactive element on the 404 page using JavaScript event handling
- Added user interaction feedback and animation to demonstrate front-end scripting capability

 #### Architectural Observation
- Identified and resolved routing conflicts caused by static file serving overriding Express routes, reinforcing the importance of middleware order and separation between static assets and dynamic view rendering

### Result

The Travlr application now includes a fully functional API and database integration. The system supports dynamic data retrieval through MongoDB and exposes structured data through API endpoints. This module completes the transition from a static and template-based application to a full-stack architecture with persistent data storage and service-based communication.

# Author
Robert Lake  
Southern New Hampshire University  
CS-465 Full Stack Development I
