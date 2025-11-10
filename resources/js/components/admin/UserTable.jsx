import { Link } from "@inertiajs/react";

const UserTable = ({ users }) => {
  return (
    <div>
      <div className="overflow-x-auto rounded-sm border border-base-content/5 bg-base-100 mt-4 mb-2">
        <div className="p-4 font-medium text-lg">USER TABLE</div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-2">
        <div>Showing {users.from} to {users.to} of {users.total} entries</div>
        <div className="join">
          {users.links.map((user) => (
            <Link
              key={user?.label ?? "#"}
              href={user?.url ?? "#"}
              className={`join-item btn ${user.active == true && "btn-active"}`}
              dangerouslySetInnerHTML={{ __html: user.label }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTable;
