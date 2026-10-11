# Discover Lesotho – Tourism Web Application

## 1. Project Description

Discover Lesotho is an interactive tourism website developed using React.js. The website helps local and international visitors discover tourist attractions, activities, and cultural experiences in Lesotho, also known as the Mountain Kingdom.

The application provides information about destinations and allows visitors to search for attractions, filter them by category, view additional details, and submit a visitor enquiry form.

## 2. Project Objectives

- Introduce Lesotho as a tourist destination.
- Showcase tourist attractions and cultural experiences.
- Help visitors find destinations using search and category filters.
- Provide additional information about attractions.
- Allow visitors to enter their travel enquiries through a form.
- Provide a responsive and user-friendly interface.

## 3. Main Features

### Home Page
- Welcome section introducing Lesotho.
- Navigation links to different sections of the website.
- Featured tourist destinations.
- Introduction to Basotho culture and outdoor activities.

### Tourist Attractions
The website includes eight attractions and experiences:

1. Maletsunyane Falls
2. Thaba Bosiu
3. Katse Dam
4. Sehlabathebe National Park
5. Afriski Mountain Resort
6. Morija Museum and Archives
7. Pony Trekking in Lesotho
8. Liphofung Cave

Each attraction includes information such as its name, location, category, image, description, activities, and estimated visiting cost.

### Search and Category Filtering
Visitors can search for attractions by name and filter destinations by category, including Nature, Adventure, and Culture and History.

### Attraction Details
Visitors can use the View Details button to reveal additional information about an attraction and hide it when finished.

### Visitor Enquiry Form
The form collects visitor information, including full name, email address, phone number, selected destination, number of visitors, preferred date, and message. It includes input validation, error messages, and a confirmation message.

### Responsive Design
CSS media queries are used to adapt the website layout to desktop, tablet, and mobile screens.

## 4. Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Git
- GitHub

## 5. Project Folder Structure

```text
discover-lesotho/
├── public/
├── src/
│   ├── components/
│   │   ├── AttractionList.js
│   │   └── EnquiryForm.js
│   ├── data/
│   │   └── attractions.js
│   ├── App.js
│   ├── App.css
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## 6. Installation and Setup

### Requirements
- Node.js
- npm
- Visual Studio Code or another code editor

### Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/lahpoet/discover-lesotho-react.git
   ```

2. Enter the project directory:

   ```bash
   cd discover-lesotho-react
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the following address in your browser:

   `http://localhost:3000`

The development server automatically reloads the website when supported code changes are saved.

## 7. Important Notes

- Estimated visiting costs are illustrative and should be verified before travelling.
- The visitor enquiry form currently validates the entered information and displays a confirmation message in the browser. It does not send enquiries to a server or store them in a database.
- Some attraction images may require an internet connection when they are loaded from external image URLs.

## 8. Version Control

Git is used to track project changes, and GitHub is used to host the source code.

GitHub repository: https://github.com/lahpoet/discover-lesotho-react

## 9. Conclusion

Discover Lesotho provides an interactive starting point for exploring the country's natural attractions, cultural heritage, and outdoor activities. The application demonstrates the use of React components, state, events, form validation, and responsive CSS in developing a tourism website.