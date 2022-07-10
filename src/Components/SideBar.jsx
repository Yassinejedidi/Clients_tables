import React from 'react'
import '../Styles/SideBar.css';
import Logo from '../assets/up.png';
import { AiOutlineFileText, AiFillSetting, AiFillBank, AiOutlineFileDone, AiOutlineUsergroupAdd } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


function SideBar() {





  const navigate = useNavigate();
  const style = {
    fontSize: "1.2em"
  }
  return (
    <div className='__Side'>
      <div className='Logo'>
        <img src={Logo} alt="" onClick={() => navigate('/')} />

      </div>
      <div className='Option'>
        <button onClick={() => navigate('/client')}>   <AiOutlineUsergroupAdd style={style} /> Clients</button>
      </div>
      <div className='Option'>
        <Dropdown id="drop" className="border border-0">
          <Dropdown.Toggle id="drop1"  >
            <AiFillSetting style={style} /> Settings


          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item  >
              <AiFillBank style={style} /> Organisation
            </Dropdown.Item>
            <Dropdown.Item >  <AiOutlineFileText style={style} />   Invoices</Dropdown.Item>
            <Dropdown.Item ><AiOutlineFileDone /> Task</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>




      </div>




    </div>
  )
}

export default SideBar