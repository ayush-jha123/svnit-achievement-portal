import React, { useState } from 'react';
import UserList from './User/UserList';
import UserForm from './User/UserForm';

const User = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now().toString() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (!sortField) return 0;
      if (a[sortField] < b[sortField]) return -1;
      if (a[sortField] > b[sortField]) return 1;
      return 0;
    });

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8 w-4/5">
        <h1 className="heading text-3xl font-bold text-center mb-8">Admin User Management</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <UserList
            users={filteredUsers}
            onEdit={setEditingUser}
            onDelete={deleteUser}
            setFilter={setFilter}
            setSortField={setSortField}
            className="w-full md:w-1/2"
          />
          <UserForm
            addUser={addUser}
            updateUser={updateUser}
            editingUser={editingUser}
            setEditingUser={setEditingUser}
            className="w-full md:w-1/2"
          />
        </div>
      </div>
    </>
  );
}

export default User;
