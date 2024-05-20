import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserList = ({ users, onEdit, onDelete, setFilter, setSortField }) => {
    return (
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <input
                type="text"
                placeholder="Filter by name"
                onChange={(e) => setFilter(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="flex justify-between mb-2">
                <button
                    onClick={() => setSortField('name')}
                    className="text-blue-500 hover:text-blue-700"
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortField('email')}
                    className="text-blue-500 hover:text-blue-700"
                >
                    Sort by Email
                </button>
            </div>
            <ul>
                {users.map((user, index) => (
                    <li key={user.id} className="flex justify-between items-center p-4 border-b">
                        <div>
                            <span className="font-bold mr-2">{index + 1}.</span>
                            <h3 className="font-bold">{user.name}</h3>
                            <p>{user.email}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                className="text-blue-500 hover:text-blue-700"
                                onClick={() => onEdit(user)}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => onDelete(user.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
