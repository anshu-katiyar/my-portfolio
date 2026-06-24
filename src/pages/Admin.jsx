import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Admin() {
  const [contacts, setContacts] = useState([]);

  // Login Check
  if (localStorage.getItem("adminAuth") !== "true") {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(
        "https://anshu-portfolio-backend.onrender.com/api/contact"
      );

      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(
        `https://anshu-portfolio-backend.onrender.com/api/contact/${id}`
      );

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Contacts Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-slate-700">
          <thead>
            <tr className="bg-slate-800">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
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
                    {contact.message}
                  </td>

                  <td className="p-3 border">
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/91${contact.phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
                      >
                        WhatsApp
                      </a>

                      <button
                        onClick={() =>
                          deleteContact(contact._id)
                        }
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-5"
                >
                  No Contacts Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;