import React, { useState } from 'react';
import useAxiosPublic from '../../../Components/Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const UserRole = () => {
    const [showRoleForm, setShowRoleForm] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    const [roleName, setRoleName] = useState('');
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const from = e.target;
        const role = from.role.value;
        const roleData = {
            name: role,
        }
        try {
            const response = await axiosPublic.post('/api/roles', roleData);
            console.log(response);
            Swal.fire('Role created successfully!');
            setRoleName('');
        } catch (error) {
            console.error(error);
            Swal.fire(`Her is some wrong ${error}`, '', 'error')
        }
    };
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
                    <form onClick={handleSubmit} className="bg-gray-100 p-4 rounded">
                        <div className="mb-4">
                            <label className="block font-medium">Role Name</label>
                            <input
                                name="role"
                                value={roleName}
                                onChange={(e) => setRoleName(e.target.value)}
                                type="text" className="w-full border p-2 rounded" placeholder="Enter role name" />
                        </div>
                        <button type='submit' className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            Submit
                        </button>
                    </form>
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
                        <tr className="text-center">
                            <td className="border p-2">1</td>
                            <td className="border p-2">Admin</td>
                            <td className="border p-2">
                                <button className="text-blue-600 hover:underline">Edit</button>
                            </td>
                        </tr>
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
                                <input type="text" className="w-full border p-2 rounded" placeholder="Enter name" />
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