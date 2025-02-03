const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body; 
    if (!username) {
        return res.status(400).json({ error: "Username cannot be empty" });
    }
    if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
    }
    if (!password || password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password length should be between 8 and 16 characters" });
    }
    res.status(201).json({ message: "Signup successful", user: { username, email } });
}
);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}
);
