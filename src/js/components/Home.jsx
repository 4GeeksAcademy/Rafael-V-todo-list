import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lista, setLista] = useState(["aprender react", "aprender js", "aprender dom"])
	const [tarea, setTarea] = useState("")

	const agregarTarea = (e) => {
		e.preventDefault()
		// console.log(tarea)
		setLista([...lista,tarea])
		setTarea("")
	}

	const borrarTarea = (index) => {
		let newList = lista.filter((item, i) => i !== index);
		setLista (newList)
	}

	return (
		<div className="text-center container">
			<h2>to do list</h2>
			{/* grega tareas a nuestra lista */}
			<input className="form-control"
				value={tarea}
				onChange={(e) => setTarea(e.target.value)}
				onKeyDownCapture={(e) => e.key === "Enter" ? agregarTarea(e) : null}
			/>

			{/* muestra la lista de tareas */}
			<ul className="list-group mt-3">
				{lista.map((tarea, index) => ( //map recorre mi array uno x uno que recorra la lista
					<li className="list-group-item" key={index}>          {/* // colocamos key por el map  */}
						{tarea}
					{/* borrar tareas */}
					<button className="btn btn-outline-danger float-end icono" onClick={()=>borrarTarea(index)}>X</button>
					</li>

				))}


			</ul>

				<p>tareas pendientes: {lista.length}</p>

		</div>
	);
};

export default Home;