const express = require("express");
const mongoose = require("mongoose");
console.log("server file started");
const path = require("path");
const cors=require('cors');
const app = express();
app.use(cors());
const PORT = 3000;
const MONGO_URI = "mongodb+srv://sdivyasdivya1234_db_user:5QvhKVdYvbAdAMrO@cluster0.dddlf1j.mongodb.net/";
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(err => console.log("MongoDB Error:", err.message));
// Read JSON data sent to the server
app.use(express.json());

// Display the frontend website
app.use(express.static(__dirname));

// Test backend route
app.get("/api", (req, res) => {
    res.json({
        message: "Online Book Store Backend is working!"
    });
});
// Books API
app.get("/api/books", (req, res) => {
    const books = [
        {
            id: 1,
            title: "Wings of Fire",
            author: "A.P.J. Abdul Kalam",
            price: 250
        },
        {
            id: 2,
            title: "Ponniyin Selvan",
            author: "Kalki",
            price: 350
        },
        {
            id: 3,
            title: "The Alchemist",
            author: "Paulo Coelho",
            price: 300
        }
    ];

    res.json(books);
});