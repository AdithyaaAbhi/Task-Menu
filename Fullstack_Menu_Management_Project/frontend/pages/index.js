
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [menus, setMenus] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    axios.get('/api/menus').then(res => setMenus(res.data));
  }, []);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="container mx-auto p-6 bg-background">
      <h1 className="text-3xl font-bold mb-6 text-secondary">Menu Management</h1>
      <ul className="bg-white shadow-md rounded-lg p-6">
        {menus.map(menu => (
          <li key={menu.id} className="mb-4 border-b border-border">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleExpand(menu.id)}
            >
              <span className="text-lg font-semibold text-secondary">{menu.name}</span>
            </div>
            {expanded === menu.id && menu.children && menu.children.length > 0 && (
              <ul className="ml-6 mt-2">
                {menu.children.map(child => (
                  <li key={child.id} className="text-gray-600">{child.name}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <form className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Add/Edit Menu</h2>
        <div className="mb-4">
          <label className="block text-secondary text-sm font-bold mb-2">Menu Name</label>
          <input
            type="text"
            className="w-full p-2 border border-border rounded-md"
            placeholder="Enter menu name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-secondary text-sm font-bold mb-2">Parent Menu</label>
          <select className="w-full p-2 border border-border rounded-md">
            <option value="">Select Parent</option>
            {menus.map(menu => (
              <option key={menu.id} value={menu.id}>{menu.name}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-600">Save</button>
        </div>
      </form>
    </div>
  );
}
