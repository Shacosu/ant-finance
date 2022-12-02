import React, { useState, useEffect } from "react";
import { addUsers, getUsers } from '../../services/apiRequests';

export default function create() {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

	const handleSubmit = async (e) => {
		e.preventDefault();
        if (username === "" || password === "") return alert("Rellene todos los campos!")
		await addUsers(user)
	};


    useEffect(() => {
        const response = async () => {
            const res = await getUsers()
            console.log(res)
        }
        response()
    }, [])

	return (
		<div className="grid grid-cols-12 place-items-center">
			<div className="col-span-12">
				<form className="grid" onSubmit={handleSubmit}>
					<input type="text" className="border" id="username" name="username" onChange={handleChange}  required />
					<input type="password" className="border" id="password" name="password" onChange={handleChange} required/>
					<button className="bg-sky-700 text-white p-2 rounded">Enviar</button>
				</form>
			</div>
		</div>
	);
}
