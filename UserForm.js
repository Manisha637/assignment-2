
import React, { useState } from "react";
import { addUser } from "../api/userApi";
import "./user.css";


const UserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Active",
    roles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      roles: formData.roles.split(",").map((role) => role.trim()),
    };
    const response = await addUser(newUser);
    if (response.success) {
      onUserAdded(newUser);
      setFormData({ name: "", email: "", status: "Active", roles: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add User</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label>Roles (comma-separated):</label>
        <input
          type="text"
          name="roles"
          value={formData.roles}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
