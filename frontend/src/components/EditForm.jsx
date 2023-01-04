import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();

  const [npm, setNPM] = useState(0);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [jkl, setJkl] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [jurusan, setJurusan] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(`http://localhost:8091/mahasiswa/${id}`);
      const { npm, nama, umur, jkl, fakultas, jurusan } = response.data;
      setNPM(npm);
      setNama(nama);
      setUmur(Number(umur));
      setJkl(jkl);
      setFakultas(fakultas);
      setJurusan(jurusan);
    }

    fetcher();
  }, [id]);

  const formSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8091/mahasiswa/${id}`, {
      nama: nama,
      umur: Number(umur),
      jkl: jkl,
      fakultas: fakultas,
      jurusan: jurusan
    });
    navigate("/");
  }

  return (
    <div className="grid grid-cols-4 w-full">
      <div className="rounded border px-4 py-2 mt-6 col-start-2 col-end-4 shadow flex flex-col">
        <div>
          <Link to={"/"} className="inline-block px-2 py-1 border text-blue-500 underline rounded">Kembali</Link>
        </div>
        <p className="text-center text-2xl font-bold text-slate-900">Edit Data Mahasiswa</p>
        <form action="" onSubmit={formSubmit}>
          <div className="mb-4 flex flex-col group">
            <label htmlFor="Npm" className="text-sm text-slate-500">NPM</label>
            <input type="number" name="npm" id="Npm" disabled className="border px-4 py-2 rounded disabled:text-gray-400 focus:border-blue-500 outline-none" onChange={(e) => setNPM(e.target.value)} value={npm} />
          </div>
          <div className="mb-4 flex flex-col group">
            <label htmlFor="Nama" className="text-sm text-slate-500">Nama</label>
            <input type="text" name="nama" id="nama" className="border px-4 py-2 rounded focus:border-blue-500 outline-none" onChange={(e) => setNama(e.target.value)} value={nama} />
          </div>
          <div className="mb-4 flex flex-col group">
            <label htmlFor="Umur" className="text-sm text-slate-500">Umur</label>
            <input type="number" name="umur" id="umur" className="border px-4 py-2 rounded focus:border-blue-500 outline-none" onChange={(e) => setUmur(e.target.value)} value={umur} />
          </div>
          <div className="mb-4 flex flex-col group">
            <label htmlFor="Jkl" className="text-sm text-slate-500">Jenis Kelamin</label>
            <select name="jkl" id="jkl" className="border px-4 py-2 rounded focus:border-blue-500 outline-none" onChange={(e) => setJkl(e.target.value)} value={jkl}>
              <option value="">== Pilih ==</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div className="mb-4 flex flex-col group">
            <label htmlFor="Fakultas" className="text-sm text-slate-500">Fakultas</label>
            <input type="text" name="fakultas" id="Fakultas" className="border px-4 py-2 rounded focus:border-blue-500 outline-none" onChange={(e) => setFakultas(e.target.value)} value={fakultas} />
          </div>
          <div className="mb-4 flex flex-col group">
            <label htmlFor="jurusan" className="text-sm text-slate-500">Jurusan</label>
            <input type="text" name="jurusan" id="jurusan" className="border px-4 py-2 rounded focus:border-blue-500 outline-none" onChange={(e) => setJurusan(e.target.value)} value={jurusan} />
          </div>
          <button type="submit" className="px-4 py-2 rounded text-white font-bold bg-green-500 hover:bg-green-700 inline-block">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditForm;