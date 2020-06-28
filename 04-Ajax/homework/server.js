const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let amigos = [
  {
    id: 1,
    name: "Toni",
    age: 30,
    email: "toni@henry.com"
  },
  {
    id: 2,
    name: "Emi",
    age: 32,
    email: "emi@henry.com"
  },
  {
    id: 3,
    name: "Martin",
    age: 35,
    email: "martin@henry.com"
  },
  {
    id: 4,
    name: "Jimmy",
    age: 35,
    email: "jimmy@henry.com"
  },
  {
    id: 5,
    name: "Franco",
    age: 67,
    email: "franco@gmail.com"
  },
  {
    id: 6,
    name: "Manu",
    age: 47,
    email: "manu@henry.com"
  }
];

app.use(cors());
app.use(bodyParser.json());

app.get("/amigos", (req, res) => {
  res.status(200).json(amigos);
});

app.get("/amigos/:id", function(req, res)  {
  const {id} = req.params;
  let friendIndex = amigos.findIndex(friend => friend.id == id);
  var friend = amigos[friendIndex]
  console.log(res.status)
  res.status(200).json(friend);
});

app.post("/amigos", (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  amigos = [...amigos, friend];
  res.status(201).json(amigos);
});

app.put("/amigos/:id", (req, res) => {
  const { id } = req.params;
  let friendIndex = amigos.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    amigos[friendIndex] = { ...amigos[friendIndex], ...req.body };
    res.status(200).json(amigos);
  } else {
    res
      .status(404)
      .json({ message: `Este ${id} no existe.` });
  }
});

app.delete("/amigos/:id", (req, res) => {
  amigos = amigos.filter(friend => friend.id != req.params.id);
  res.status(200).json(amigos);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
