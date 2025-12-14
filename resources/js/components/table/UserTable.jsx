import { Link } from "@inertiajs/react";
import { SquarePen, Trash2 } from "lucide-react";
import { router } from "@inertiajs/react";
import useModal from "../../stores/useModal";
import Modal from "../Modal";
import useToggleModal from "../../stores/useModal";

const UserTable = ({ users }) => {
  const { modalOpen, openModal } = useModal();
  const { selectedItem, closeModal } = useToggleModal();

  const handleDelete = () => {
    router.delete(route("admin.user.destroy", selectedItem.id), {
      onSuccess: () => closeModal(),
    });
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-md border border-base-content/5 bg-base-100 my-2">
        <div className="flex justify-end p-2">
          <input placeholder="Search" type="text" id="search" name="search" className="input rounded-md focus-within:outline-none focus-within:border-primary" />
        </div>
        <table className="table">
          <thead className="bg-background">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>aktif</td>
                <td>
                  <div className="flex gap-1">
                    <button type="submit" onClick={() => openModal(user)} className="text-primary hover:text-primary/85">
                      <SquarePen size={20} />
                    </button>
                    <button type="submit" onClick={() => openModal(user)} className="text-red-600 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-2">
        <div>Showing {users.meta.from} to {users.meta.to} of {users.meta.total} entries</div>
        <div className="join">
          {users.meta.links.map((user) => (
            <Link
              key={user?.label ?? "#"}
              href={user?.url ?? "#"}
              className={`join-item btn btn-sm border border-rrimary hover:bg-gray-200 text-primary ${user.active === true && "bg-primary text-white pointer-events-none"}`}
              dangerouslySetInnerHTML={{ __html: user.label }}
            />
          ))}
        </div>
      </div>

      {modalOpen && <Modal confirmDelete={handleDelete} />}
    </div>
  )
}

export default UserTable;
