README
💻 Real-Time Todo Management System
📌 Project Overview
The Real-Time Todo Management System is a web-based application developed using Node.js, Express.js, and EJS.
It allows users to efficiently manage their daily tasks through a clean, responsive, and professional dashboard interface.

This project simulates a real-world productivity system where users can:

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/540ea598-750c-45f8-8720-fede73133653" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/14181541-e394-425f-878e-98628f084d4d" />



Add tasks
Track task progress
Edit task details
Delete tasks
🎯 Objective
The main objective of this project is to:

Understand backend development using Express.js
Implement CRUD operations (Create, Read, Update, Delete)
Use EJS templating for dynamic UI rendering
Manage application data using local array/object storage
🧩 Core Features
✅ Task Management
Create new tasks with title, description, and priority
Edit existing tasks
Delete tasks from the system
📊 Dashboard
Displays total number of tasks
Shows count of pending and completed tasks
Provides a quick overview of all activities
🔄 Task Status Flow
Each task follows a structured workflow:

Pending → In Progress → Completed
🎨 UI Features
Responsive design using Bootstrap
Clean dashboard cards
Status badges for better visibility
Smooth hover effects and modern UI styling
🖥️ Tech Stack
Technology	Purpose
Node.js	Backend runtime environment
Express.js	Web framework
EJS	Templating engine
Bootstrap	Responsive UI design
CSS	Custom styling
📁 Project Structure
TodoApp
│── views
│   ├── partials
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │
│   ├── dashboard.ejs
│   ├── add-task.ejs
│   ├── edit-task.ejs
│
│── public
│   ├── css
│   │   └── style.css
│
│── app.js
│── package.json
⚙️ Installation & Setup
🔹 Step 1: Open Project Folder
cd TodoApp
🔹 Step 2: Install Dependencies
npm install
🔹 Step 3: Run the Application
node app.js
🔹 Step 4: Open in Browser
http://localhost:3000
🧠 How It Works
🔸 Data Storage
Tasks are stored in a local array
Each task has a unique ID
🔸 Task Object Example
{
  "id": 1,
  "title": "Prepare Report",
  "description": "Complete weekly report",
  "priority": "High",
  "status": "Pending"
}
🔸 Backend Flow
Express handles routing and server logic
EJS renders dynamic UI pages
Form data is processed using middleware
🧪 Modules Implemented
Module	Description
Dashboard	Displays task summary
Add Task	Create new tasks
Edit Task	Update task details
Delete Task	Remove tasks
Status System	Manage task progress
🎯 Marking Criteria Covered
Component	Status
Dashboard UI	✅
Add Task	✅
Edit & Update	✅
Delete	✅
Status System	✅
Project Structure	✅
UI Design	✅
🚀 Future Enhancements
Database integration (MongoDB)
User authentication system
Task search and filtering
Real-time updates using WebSockets
👨‍💻 Author
Mann Patel
📄 License
This project is open-source and available under the MIT License.

