import React from 'react';

const AdminDash = () => {
    const data = [
        {
            id: 1,
            workName: 'Design Homepage',
            user: 'Sajib',
            progress: 80,
        },
        {
            id: 2,
            workName: 'API Integration',
            user: 'Rakib',
            progress: 50,
        },
        {
            id: 3,
            workName: 'Bug Fixing',
            user: 'Nayeem',
            progress: 95,
        },
    ];

    const handleEdit = (id) => {
        console.log(`Edit action triggered for ID: ${id}`);
        // Add edit functionality here
    };

    const handleDelete = (id) => {
        console.log(`Delete action triggered for ID: ${id}`);
        // Add delete functionality here
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-xl font-bold">All Work Report</h2>
            <div className="overflow-x-auto mt-5">
                <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr className="text-left text-sm font-semibold text-gray-700">
                            <th className="py-3 px-5">SL</th>
                            <th className="py-3 px-5">WORK NAME</th>
                            <th className="py-3 px-5">USER</th>
                            <th className="py-3 px-5">PROGRESS</th>
                            <th className="py-3 px-5 text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-800">
                        {data.map((item, index) => (
                            <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-5">{index + 1}</td>
                                <td className="py-3 px-5">{item.workName}</td>
                                <td className="py-3 px-5">{item.user}</td>
                                <td className="py-3 px-5 w-48">
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full transition-all duration-300 ${
                                                item.progress >= 75
                                                    ? 'bg-green-500'
                                                    : item.progress >= 50
                                                    ? 'bg-yellow-500'
                                                    : 'bg-red-500'
                                            }`}
                                            style={{ width: `${item.progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-gray-600">{item.progress}%</span>
                                </td>
                                <td className="py-3 px-5 flex items-center gap-2 justify-center">
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600"
                                        aria-label={`Edit ${item.workName}`}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
                                        aria-label={`Delete ${item.workName}`}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDash;