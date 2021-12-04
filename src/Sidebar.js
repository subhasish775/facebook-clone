// import userEvent from '@testing-library/user-event';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
import profile from './profilebg.png';
import PeopleIcon from '@material-ui/icons/People';

function Sidebar() {
    return  (
    <div className="sidebar">
     <SidebarRow src={profile} title="Subhasish Ghosh"
     />
     <SidebarRow 
     Icon={LocalHospitalIcon}
     title="Covid-19 Information Center"
     />
     <SidebarRow 
     Icon={EmojiFlagsIcon} title="Pages" />
     <SidebarRow 
     Icon={PeopleIcon} title="Friends" />
     <SidebarRow 
     Icon={ChatIcon} title="Messenger" />
     <SidebarRow 
     Icon={StorefrontIcon} title="Marketpalce" />
     <SidebarRow 
     Icon={VideoLibraryIcon} title="Videos" />
     <SidebarRow 
     Icon={ExpandMoreOutlined} title="Marketplace" />

            
        </div>
    );
    
}

export default Sidebar;
