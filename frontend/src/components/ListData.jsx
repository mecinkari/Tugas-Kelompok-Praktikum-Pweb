import axios from "axios"
import { Link } from "react-router-dom";
import useSWR, { mutate } from "swr"

const ListData = () => {
	const fetcher = async () => {
		const response = await axios.get("http://localhost:8091/mahasiswa");
		return response.data;
	}

	const deleteData = async (id) => {
		await axios.delete(`http://localhost:8091/mahasiswa/${id}`);
		mutate('mahasiswa');
	}

	const { data } = useSWR("mahasiswa", fetcher);
	// const data = null;
	if (!data) return (
		<div className="text-center border p-6 mt-4 rounded">
			<p className="text-2xl italic font-bold text-slate-500">{"Loading..."}</p>
		</div>
	)

	return (
		<div className="mt-4 border rounded-lg shadow overflow-hidden">
			<table className="w-full text-lg">
				<thead className="bg-slate-100 border-b">
					<tr>
						<th className="px-4 py-2 border-r">NPM</th>
						<th className="px-4 py-2 border-r">Nama</th>
						<th className="px-4 py-2 border-r">Umur</th>
						<th className="px-4 py-2 border-r">Jenis Kelamin</th>
						<th className="px-4 py-2 border-r">Fakultas</th>
						<th className="px-4 py-2 border-r">Jurusan</th>
						<th className="px-4 py-2">Opsi</th>
					</tr>
				</thead>
				<tbody>
					{data.map((list, index) => (
						<tr key={list.npm}>
							<td className="px-4 py-2 border-r">{list.npm}</td>
							<td className="px-4 py-2 border-r">{list.nama}</td>
							<td className="px-4 py-2 border-r">{list.umur}</td>
							<td className="px-4 py-2 border-r">{list.jkl === "L" ? "Laki-laki" : "Perempuan"}</td>
							<td className="px-4 py-2 border-r">{list.fakultas}</td>
							<td className="px-4 py-2 border-r">{list.jurusan}</td>
							<td className="px-4 py-2">
								<Link to={`/edit/${list.npm}`} className="inline-block px-4 py-1 rounded text-white font-bold bg-indigo-500 hover:bg-indigo-700 mr-2" tabIndex={index + 2}>Edit</Link>
								<button type="button" onClick={() => deleteData(list.npm)} className="inline-block px-4 py-1 rounded text-white font-bold bg-red-500 hover:bg-red-700" tabIndex={index + 3}>Hapus</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ListData;