import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setContacts(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/contact/${id}`
      );

      fetchContacts();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-slate-700">

          <thead>
            <tr className="bg-slate-800">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>

            {contacts.map((contact) => (
              <tr key={contact._id}>

                <td className="p-3 border">
                  {contact.name}
                </td>

                <td className="p-3 border">
                  {contact.phone}
                </td>

                <td className="p-3 border">
                  {contact.email}
                </td>

                <td className="p-3 border">

                  <button
                    onClick={() =>
                      deleteContact(contact._id)
                    }
                    className="bg-red-500 px-4 py-2 rounded"
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
}

export default Admin;