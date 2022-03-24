import React from 'react'
import "./Contact.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <div className='contact' id="Contact">
        <h1 className='contact_head'>My Contact</h1>
            <p className='p_color'>__get in touch__</p>

                <div className='logo'>
               
                <AccountCircleIcon />  <p className='Name'>Namitha Adiga</p><br />
               
                <PhoneIcon />  <p className='phone'>8762097449</p><br />
               
                <EmailIcon />  <p className='email'>namithaadiga123@gmail.com</p><br />

               
                </div>
                
        </div>
  )
}

export default Contact