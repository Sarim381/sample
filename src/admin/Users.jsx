import React from 'react'

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@gmail.com",
      phone: "03001234567",
    },
    {
      id: 2,
      name: "Ahmed Raza",
      email: "ahmed@gmail.com",
      phone: "03111234567",
    },
    {
      id: 3,
      name: "Usman Khan",
      email: "usman@gmail.com",
      phone: "03221234567",
    },
  ];

  return (
    <div className="page">

      <h1>Users 👥</h1>

      <div className="admin-table">

        {users.map((user) => (
          <div className="table-row" key={user.id}>

            <span>{user.id}</span>

            <span>{user.name}</span>

            <span>{user.email}</span>

            <span>{user.phone}</span>

            <button>
              View
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Users;