const mongoose = require("mongoose");

async function connectDB() {
  try {
    const url = "mongodb://localhost:27017/newnode";
    await mongoose
      .connect(url)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB connection error:", err));
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

const studentsSchema = new mongoose.Schema({
  studentId: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
});

const departmentSchema = new mongoose.Schema({
  departmentId: { type: String, required: true },
  name: { type: String, required: true },
  head: { type: String, required: true },
});

const Students = mongoose.model("Students", studentsSchema);
const Departments = mongoose.model("Departments", departmentSchema);
module.exports = { connectDB, Students, Departments };
