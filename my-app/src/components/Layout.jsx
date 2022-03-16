import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Layout.css';
import { Button } from '@mui/material';



const Layout = () => {
  const headerStyle = {
    padding: "24px",
    fontWeight: "bold",
    letterSpacing: "1px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap"
  };
  const linkStyle={
    padding: "10px",
    fontWeight: "bold",
    underline:'none',
    color: '#FAEEE7'
  }
    return (
      // Sidebar structure with links to pages and styling in it
      
      <>
            <ProSidebar>
                <SidebarHeader style={headerStyle}> {
                    <p>briefstory</p>
                }
                </SidebarHeader>
                <SidebarContent>
                  <Menu>
                    {
                        <nav>
                          <li>
                            <MenuItem> <Link to="/" style={linkStyle}>Home</Link></MenuItem>
                          </li>
                          <li>
                             <MenuItem><Link to="/listofarticles" style={linkStyle}>List of Articles</Link></MenuItem>
                          </li>
                      </nav>
                    }
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    {
                        <Button>Se déconnecter</Button>
                    }
                </SidebarFooter>
                </ProSidebar>
        <Outlet />
        
      </>
    )
  };
  
  export default Layout;