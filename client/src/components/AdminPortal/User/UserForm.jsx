import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, editingUser, setEditingUser }) => {
    const [user, setUser] = useState({ id: '', name: '', email: '' });

    useEffect(() => {
        if (editingUser) {
            setUser(editingUser);
        } else {
            setUser({ id: '', name: '', email: '' });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser) {
            updateUser(user);
        } else {
            addUser(user);
        }
        setUser({ id: '', name: '', email: '' });
        setEditingUser(null);
    };

    return (
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{editingUser ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    {editingUser ? 'Update User' : 'Add User'}
                </button>
            </form>
        </div>
    );
};

export default UserForm;
