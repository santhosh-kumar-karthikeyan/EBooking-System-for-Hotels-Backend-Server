const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config()

const app = require("./src/app");
app.use(cors())
app.use(express.json())

