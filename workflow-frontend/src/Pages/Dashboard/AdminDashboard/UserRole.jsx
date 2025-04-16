import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Components/Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const UserRole = () => {
    const [showRoleForm, setShowRoleForm] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    const [roles, setRoles] = useState([]);
    const axiosPublic = useAxiosPublic();

    const handleRoleSubmit = async (e) => {
        e.preventDefault();
        const from = e.target;
        const role = from.role.value;
        const roleData = {
            name: role,
        }
        console.log('this is log data', roleData);
        try {
            const response = await axiosPublic.post('/api/roles', roleData);
            console.log(response);
            setShowRoleForm(false);
            Swal.fire('Role created successfully!');
        } catch (error) {
            console.error(error);
            Swal.fire(`Her is some wrong ${error}`, '', 'error')
        }
    };

    const handleRoleDelete = (id) => {
        console.log('delete id', id)
        axiosPublic.delete(`/api/roles/delete/${id}`)
                .then(res => {
                    console.log(res)
                Swal.fire(res.data.message)
            })
            .catch((error) => {
                console.log(error);
                Swal.fire(`here is some problem ${error}`, '', 'error')
            })
    }

    useEffect(() => {
        axiosPublic.get('/api/roles')
            .then(res => setRoles(res.data.data))
            .catch((error) => {
                Swal.fire(`${error}`, '', 'error')
            })
    }, [])
    // console.log(roles);

    return (
        <div className="p-6 space-y-10">
            {/* Create Role Section */}
            <div className="space-y-4 w-9/12 mx-auto mt-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Roles</h2>
                    <button
                        onClick={() => setShowRoleForm(!showRoleForm)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Create Role
                    </button>
                </div>

                {showRoleForm && (
                    <div className="bg-gray-100 p-4 rounded">
                        <label className="block font-medium">Role Name</label>
                        <form onSubmit={handleRoleSubmit}>
                            <div className="mb-4">
                                <input
                                    name="role"
                                    type="text" className="w-full border p-2 rounded" placeholder="Enter role name" />
                            </div>
                            <button type='submit' className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                                Submit
                            </button>
                        </form>
                    </div>
                )}

                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">SL</th>
                            <th className="border p-2">Role</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles ?
                            roles.map((role, index) => (
                                <tr className="text-center" key={role?.id}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{role?.role}</td>
                                    <td className="border p-2 flex items-center gap-2 justify-center">
                                        <a href={`/dashboard/createrole/${role?.id}`}>
                                            <button className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600">
                                                Edit
                                            </button>
                                        </a>
                                        <button onClick={() => handleRoleDelete(role?.id)} className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )) :
                            <h2 className=' text-center text-2xl mt-5'>No more role right now</h2>
                        }
                    </tbody>
                </table>
            </div>

            {/* Add User Section */}
            <div className="space-y-4 w-9/12 mx-auto mt-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Users</h2>
                    <button
                        onClick={() => setShowUserModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Add User
                    </button>
                </div>

                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">SL</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Role</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="border p-2">1</td>
                            <td className="border p-2">John Doe</td>
                            <td className="border p-2">Admin</td>
                            <td className="border p-2">
                                <button className="text-blue-600 hover:underline">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal for Add User */}
            {showUserModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Add User</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block font-medium">Name</label>
                                <input type="text" name='name' className="w-full border p-2 rounded" placeholder="Enter name" />
                            </div>
                            <div>
                                <label className="block font-medium">email</label>
                                <input type="text" name='email' className="w-full border p-2 rounded" placeholder="Enter name" />
                            </div>
                            <div>
                                <label className="block font-medium">Password</label>
                                <input type="text" name='password' className="w-full border p-2 rounded" placeholder="Enter name" />
                            </div>
                            <div>
                                <label className="block font-medium">Confirm Password</label>
                                <input type="text" name='confirmPassword' className="w-full border p-2 rounded" placeholder="Enter name" />
                            </div>
                            <div>
                                <label className="block font-medium">Role</label>
                                <select className="w-full border p-2 rounded">
                                    <option>Admin</option>
                                    <option>Editor</option>
                                    <option>Viewer</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setShowUserModal(false)}
                                    className="px-4 py-2 rounded border"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserRole;