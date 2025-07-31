const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Welcome to Our Platform',
        tagline: 'Build Amazing Things With Us',
        features: [
            '🚀 Fast & Reliable',
            '🎨 Beautiful Design',
            '🔒 Secure & Private',
            '📱 Responsive Layout'
        ]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
