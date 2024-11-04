import express, { Application, Request, Response } from "express";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import serviceRoutes from "./routes/serviceRoutes";

const app: Application = express();

// Middleware
app.use(express.json()); // รับส่งข้อมูลแบบ JSON
app.use(cors()); // frontend เรียกใช้ API ได้

// Base Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/services", serviceRoutes);

app.get("/api/test", async (req, res) => {
    try {
      // Sample query to MongoDB or any test logic here
      res.status(200).json({ message: "API is working" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
  

export default app;
