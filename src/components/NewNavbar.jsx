import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';

import { CircleMenu, CircleMenuItem } from "react-circular-menu";

function NewNavbar(){

    return(

        <div className='newnavbar'>
      <CircleMenu
        startAngle={90}
        rotationAngle={240}
        itemSize={2}
        radius={3.5}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          tooltip="About"
          tooltipPlacement="bottom"
        >
          <a href='#about'><InfoIcon /></a>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Services" tooltipPlacement="left">
          <a href='#services'><MiscellaneousServicesIcon /></a>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Works" tooltipPlacement="left">
          <a href="#work"><WorkIcon /></a>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Home" >
          <a href='#root'><HomeIcon /></a>
        </CircleMenuItem>
      </CircleMenu>
    </div>

    );

}

export default NewNavbar;