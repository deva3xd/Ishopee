const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto rounded-sm border border-base-content/5 bg-base-100 mt-4">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable;