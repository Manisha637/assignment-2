
export const getUsers = async () => [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", roles: ["Admin"] },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", roles: ["User"] },
  ];
  
  export const addUser = async (user) => {
    console.log("User added:", user);
    return { success: true };
  };
  
  export const deleteUser = async (userId) => {
    console.log("User deleted:", userId);
    return { success: true };
  };
  