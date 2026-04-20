const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory task storage
let tasks = [
    { id: 1, title: "Prepare Report", description: "Complete weekly project report", priority: "High", status: "Pending" },
    { id: 2, title: "Team Meeting", description: "Discuss quarterly goals", priority: "Medium", status: "In Progress" },
    { id: 3, title: "Code Review", description: "Review PR #123", priority: "Low", status: "Completed" }
];

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// Dashboard
app.get('/', (req, res) => {
    const stats = {
        total: tasks.length,
        pending: tasks.filter(t => t.status === 'Pending').length,
        inProgress: tasks.filter(t => t.status === 'In Progress').length,
        completed: tasks.filter(t => t.status === 'Completed').length
    };
    res.render('dashboard', { tasks, stats });
});

// Add Task Page
app.get('/add', (req, res) => {
    res.render('add-task');
});

// Create Task
app.post('/add', (req, res) => {
    const { title, description, priority } = req.body;
    const newTask = {
        id: Date.now(),
        title,
        description,
        priority,
        status: 'Pending'
    };
    tasks.push(newTask);
    res.redirect('/');
});

// Edit Task Page
app.get('/edit/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        res.render('edit-task', { task });
    } else {
        res.redirect('/');
    }
});

// Update Task
app.post('/edit/:id', (req, res) => {
    const { title, description, priority, status } = req.body;
    const index = tasks.findIndex(t => t.id == req.params.id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], title, description, priority, status };
    }
    res.redirect('/');
});

// Delete Task
app.get('/delete/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.redirect('/');
});

// Update Status Toggle (Pending -> In Progress -> Completed -> Pending)
app.get('/status-cycle/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        if (task.status === 'Pending') task.status = 'In Progress';
        else if (task.status === 'In Progress') task.status = 'Completed';
        else task.status = 'Pending';
    }
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
