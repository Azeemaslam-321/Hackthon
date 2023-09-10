const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/login', (req, res) => {
   
    const { username, password } = req.body;

   
    if (username === 'user' && password === 'password') {
      
      res.status(200).json({ message: 'Login successful' });
    } else {
     
      res.status(401).json({ message: 'Login failed' });
    }
  });
  
  app.get('/teachers', (req, res) => {
    const teachers = [
        { id: 1, name: 'Teacher 1', expertise: 'Math' },
        { id: 2, name: 'Teacher 2', expertise: 'Science' },
        // Add more teacher data here
      ];
    
      res.status(200).json(teachers);
  });
  
  app.get('/topics', (req, res) => {
    const topics = [
        { id: 1, name: 'Math', description: 'Mathematics topics' },
        { id: 2, name: 'Science', description: 'Science topics' },
        // Add more topic data here
      ];
    
      res.status(200).json(topics);
  });
  
  app.post('/schedule-session', (req, res) => {
    const { teacherId, studentId, date, duration } = req.body;

    // Simulate scheduling a session (replace with actual database storage)
    const sessionId = generateSessionId(); // Replace with a function to generate unique IDs
  
    // You should store this session data in your database
    const sessionData = {
      id: sessionId,
      teacherId,
      studentId,
      date,
      duration,
    };
  
    res.status(201).json({ message: 'Session scheduled successfully', session: sessionData });
  });
  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
