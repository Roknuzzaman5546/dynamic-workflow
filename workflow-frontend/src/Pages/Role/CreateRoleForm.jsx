import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';

const CreateRoleForm = () => {
  const axiosPublic = useAxiosPublic();
  const [roleName, setRoleName] = useState('');

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
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Create New Role</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Role Name
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter role name"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateRoleForm;
