import express from "express";
import {getAllMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa} from "../controller/MahasiswaController.js"

const router = express.Router();

router.get("/mahasiswa", getAllMahasiswa);
router.get("/mahasiswa/:id", getMahasiswaById);
router.post("/mahasiswa", createMahasiswa);
router.patch("/mahasiswa/:id", updateMahasiswa);
router.delete("/mahasiswa/:id", deleteMahasiswa);

export default router;