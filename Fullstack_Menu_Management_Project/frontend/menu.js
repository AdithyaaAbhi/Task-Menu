
import { useState } from 'react';

const Menu = () => {
    const [menus, setMenus] = useState([
        { id: 1, name: 'System Management', children: [
            { id: 2, name: 'Systems', children: [] },
            { id: 3, name: 'Code Registration', children: [] }
        ]}
    ]);
    const [expandedMenu, setExpandedMenu] = useState(null);

    const toggleExpand = (id) => {
        setExpandedMenu(expandedMenu === id ? null : id);
    }

    return (
        <div className="menu">
            <h2>Menus</h2>
            <ul>
                {menus.map(menu => (
                    <li key={menu.id}>
                        <div onClick={() => toggleExpand(menu.id)}>
                            {menu.name}
                        </div>
                        {expandedMenu === menu.id && menu.children.length > 0 && (
                            <ul>
                                {menu.children.map(subMenu => (
                                    <li key={subMenu.id}>
                                        {subMenu.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;
