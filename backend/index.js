import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./router/MahasiswaRouter.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

// Variable untuk port
const port = process.env.APP_PORT || 5555;

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

// Buat serve aplikasi
app.listen(port, () => {
    console.log(`Berjalan di http://localhost:${port}/`)
})