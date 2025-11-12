import dotenv from "dotenv";
dotenv.config();

// Load remaining modules after dotenv so process.env is available to them during initialization
const express = (await import("express")).default;
const cors = (await import("cors")).default;
const contactRouter = (await import("./routes/contactRoute.js")).default;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Server is Live!"));

app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running in port", PORT);
});
