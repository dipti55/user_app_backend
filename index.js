const express = require("express");
const app = express();
const cors = require("cors");
// console.log("hi")
const PORT = 5000;
const conn = require("./db");

// -----------db connectiontion-----------
conn.on("connected", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MongoDb connected");
  }
});

// -----------Middleware----------------------------
app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/users"));

// ----------------------------------------------------------
app.listen(PORT, () => {
  console.log("Server started on port no :" + PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

// app.get("/users",(req, res)=>{
// res.json({name1:"sameer",
//          course:"MERN"})
//         })

// app.post("/users", (req, res)=>{
// res.send("Server Startded 5000")
// })

// app.delete("/users",(req,res)=>{
//     res.send("Delete data")
// })
