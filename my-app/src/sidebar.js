import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineGridOn } from "react-icons/md";
import { SiGitextensions } from "react-icons/si";
import { BsFileWord } from "react-icons/bs";


function SidebarMenu() {
	const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
const location = useLocation();
	return (
		<div style={{ position:'absolute',display: "flex", height: "50px"}}>
<Sidebar collapsed='true' onBackdropClick={() => { collapseSidebar();}} backgroundColor="rgb(169,169,169,0.7)">
	<Menu>
	<SubMenu label="Menu" icon={<AiOutlineMenu/>} onClick={() => { collapseSidebar();}}>
	<MenuItem icon={<SiGitextensions/>} disabled={location.pathname.includes("connections")} component={<Link to="/games/connections" />}> Connections</MenuItem>
	<MenuItem icon={<BsFileWord/>} disabled={location.pathname.includes("wordle")} component={<Link to="/games/wordle" />}> Wordle</MenuItem>
	<MenuItem icon={<MdOutlineGridOn/>} disabled={location.pathname.includes("crossword")} component={<Link to="/games/crossword" />}> Crossword</MenuItem>
	</SubMenu>
	</Menu>
	</Sidebar></div>);
}
export default SidebarMenu;
