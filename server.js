const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");

// Middleware
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to Database
connectDB();

// Routes End Points
app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

// Run / Listen the server
app.listen(PORT, () => {
    console.log("listening at http://localhost:" + PORT);
});
