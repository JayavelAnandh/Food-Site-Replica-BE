import express from "express";
import cors from "cors";
import menuRoutes from "./routes/menuRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.use("/api/menu", menuRoutes);

export default app; 
