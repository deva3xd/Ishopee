import { useState } from "react";
import { User, Database } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import UserTable from "../../components/admin/UserTable";
import ProductTable from "../../components/admin/ProductTable";

const Index = ({ product, user, products, users }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="grid grid-cols-2 gap-4 justify-between">
        <button onClick={() => setIsActive(false)} className="rounded-sm bg-red-600 flex items-center justify-center gap-2 text-white px-8 py-12 text-3xl">
          <User size={40} />
          {user} User
        </button>
        <button onClick={() => setIsActive(true)} className="rounded-sm bg-primary flex items-center justify-center gap-2 text-white px-8 py-12 text-3xl">
          <Database size={40} />
          {product} Product
        </button>
      </div>

      {/* table */}
      {isActive == false ? <UserTable users={users} /> : <ProductTable products={products} />}
    </AdminLayout>
  )
}

export default Index;