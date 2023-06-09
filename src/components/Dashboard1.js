import React, { useState } from 'react';
import user from "../assets/user.jpg"
import { FiSearch, FiBriefcase } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdNotificationsNone } from 'react-icons/md';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiLogout } from 'react-icons/ci';
import { CgGames } from 'react-icons/cg';
import { BiGroup, BiDotsHorizontal } from 'react-icons/bi';
import { LuEdit } from 'react-icons/lu';
import { TiMessages } from 'react-icons/ti';
import { BsBriefcase } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { RiFlag2Line, RiSettingsLine, RiMessage2Line, RiHome5Line } from 'react-icons/ri';
import './Dashboard1.css';
import line from "../assets/Vector 1.svg"
import circle1 from "../assets/Ellipse 1.svg"
import circle2 from "../assets/Ellipse 2.svg"
import circle3 from "../assets/Ellipse 3.svg"

const Dashboard1 = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <img src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg" alt="" />
                        <h1>HARRY</h1>
                    </div>
                    <div className="menu-bar" onClick={toggleSidebar}>
                        <AiOutlineMenu />
                    </div>
                    <div className="search-bar">
                        <i className="search-icon">
                            <FiSearch />
                        </i>
                        <input type="text" className="search-input" placeholder="Search..." />
                        <i className="settings-icon">
                            <GoSettings />
                        </i>
                    </div>
                    <div className="notification-icon">
                        <MdNotificationsNone />
                    </div>
                    <div className="account-icon">
                        <MdOutlineAccountCircle />
                    </div>
                </div>
            </nav>


            <div className="dashboard-container">
                {showSidebar && <div className="sidebar">
                    <div className="section-divider"></div>
                    <div className="profile">
                        <img src={user} className="profile-icon" alt="profile" />
                        <h1 className={`profile-name ${dropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                            Rehan S. {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </h1>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Privacy</li>
                                <li className="dropdown-item">Logout</li>
                            </ul>
                        )}
                    </div>


                    <div className="section-divider"></div>

                    <div className="section">
                        <div className="section-heading">MENU</div>
                        <ul className="menu">
                            <li className="menu-item">
                                <RiHome5Line className="menu-icon" />
                                Home
                            </li>
                            <li className="menu-item">
                                <LuEdit className="menu-icon" />
                                Post
                            </li>
                            <li className="menu-item">
                                <RiMessage2Line className="menu-icon" />
                                Messanger
                            </li>
                            <li className="menu-item">
                                <BiGroup className="menu-icon" />
                                Friends
                            </li>
                            <li className="menu-item">
                                <MdNotificationsNone className="menu-icon" />
                                Notifications
                            </li>
                            <li className="menu-item">
                                <HiOutlineUserGroup className="menu-icon" />
                                Groups
                            </li>

                        </ul>
                    </div>
                    <div className="section-divider"></div>

                    <div className="section">
                        <ul className="menu">
                            <li className="menu-item">
                                <RiFlag2Line className="menu-icon" />
                                Pages
                            </li>
                            <li className="menu-item">
                                <CgGames className="menu-icon" />
                                Games
                            </li>
                            <li className="menu-item">
                                <RiSettingsLine className="menu-icon" />
                                Settings
                            </li>
                        </ul>
                    </div>

                    <div className="section-divider"></div>

                    <div className="section">
                        <ul className="menu">
                            <li className="menu-item">
                                <CiLogout className="menu-icon" />
                                Log Out
                            </li>
                        </ul>
                    </div>
                </div>}



                <div className={`main-content ${showSidebar ? 'expanded' : ''}`}>
                    <div className="big-Cards">




                        <div className="f-card card">
                            <div className="card-icons">
                                <BiDotsHorizontal className="card-icon card-icon-left" />
                                <TiMessages className="card-icon card-icon-right" />
                            </div>
                            <h1 className="card-title">$500.00</h1>
                            <div className="card-body">
                                <p>Total Earning</p>
                            </div>
                            <div className="img">
                                <img src={circle1} />
                                <img src={circle2} />
                                <img src={circle3} />
                            </div>
                        </div>



                        <div className="b-card card">
                            <div className="card-icons">
                                <BiDotsHorizontal className="card-icon card-icon-left" />
                                <BsBriefcase className="card-icon card-icon-right" />
                            </div>
                            <h1 className="card-title">$961</h1>
                            <div className="card-body">
                                <p>Total Order</p>
                            </div>
                            <div className="img">
                                <img src={line} />
                            </div>
                        </div>




                    </div>







                    <div className="small-cards">

                        <div className="s1-card s-card">
                            <div className="exdiv">
                                <FiBriefcase />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">$203k</h1>
                                <p>Total Income</p>
                            </div>
                        </div>
                        <div className="s2-card s-card">
                            <div className="exdiv">
                                <FiBriefcase />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">$203k</h1>
                                <p>Total Income</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Dashboard1;
