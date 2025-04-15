import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';

const CreateRoleForm = () => {
  const axiosPublic = useAxiosPublic();
  const [roleName, setRoleName] = useState('');
  const [roles, setRoles] = useState([]);

  let { id } = useParams();
  const thisRole = roles.find(item => item.id == id);
  // console.log('this is id', thisRole);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const role = from.role.value;
    const roleData = {
      name: role,
    }
    try {
      console.log('this is update');
      const response = await axiosPublic.put(`/api/roles/update/${id}`, roleData);
      console.log(response);
      Swal.fire(response.data.message);
      setRoleName('');
    } catch (error) {
      console.error(error);
      Swal.fire(`Her is some wrong ${error}`, '', 'error')
    }
  };

  useEffect(() => {
    axiosPublic.get('/api/roles')
      .then(res => setRoles(res.data.data))
      .catch((error) => {
        Swal.fire(`${error}`, '', 'error')
      })
  }, [])


  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Update New Role</h2>
      <div className=' flex justify-between items-center px-1 mb-4 text-lg font-semibold'>
        <h3>id : {thisRole?.id}</h3>
        <h3>Role name: {thisRole?.name}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Type new role Name
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
          Update
        </button>
      </form>
    </div>
  );
};

export default CreateRoleForm;
