import { Link } from "react-router-dom";
import ListData from "./ListData";

const Home = () => {
	return (
		<>
			<div className="flex flex-col bg-white">
				<h1 className="text-4xl font-bold text-slate-900 mt-6">{"CRUD dengan React.JS, Express, Prisma.io"}</h1>
				<h2 className="text-2xl text-slate-500 mt-2">{"Dibuat oleh Muhammad Anugrah Pratama - 50420791"}</h2>

				<div className="mt-8">
					<Link to={"/tambahdata"} className="px-4 py-2 rounded text-white font-bold bg-green-500 hover:bg-green-700 inline-block" tabIndex={1}>Tambah Data</Link>

					<ListData />
				</div>
			</div>
		</>
	)
}

export default Home;