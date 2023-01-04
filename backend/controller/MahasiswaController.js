import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllMahasiswa = async (req, res) => {
    try {
        const response = await prisma.mahasiswa.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getMahasiswaById = async (req, res) => {
    const npm = req.params.id;

    try {
        const response = await prisma.mahasiswa.findUnique({
            where: {
                npm: npm
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const createMahasiswa = async (req, res) => {
    try {
        const {npm, nama, umur, jkl, fakultas, jurusan} = req.body;
        const response = await prisma.mahasiswa.create({
            data: {
                npm: npm,
                nama: nama, 
                umur: umur,
                jkl: jkl,
                fakultas: fakultas,
                jurusan: jurusan
            }
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateMahasiswa = async (req, res) => {
    try {
        const npm = req.params.id;
        const {nama, umur, jkl, fakultas, jurusan} = req.body;
        const response = await prisma.mahasiswa.update({
            where: {
                npm: npm
            },
            data: {
                nama: nama, 
                umur: umur,
                jkl: jkl,
                fakultas: fakultas,
                jurusan: jurusan
            }
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteMahasiswa = async (req, res) => {
    const npm = req.params.id;

    try {
        const response = await prisma.mahasiswa.delete({
            where: {
                npm: npm
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}