import React, {  } from 'react';
import './Register.css';

import NavbarComp from '../compenet/NavbarComp';



const Register = () =>{

    return(
        <>
            
            <NavbarComp/>
            <div className='body-register'>
            <div className='contanet'>
                
            <div className='titel-register-2'>Registration</div>
            <form action='#'>
                <div className='user-details'>
                    {/* <div className='input-box'>
                        <span className='details'>full name</span>
                        <input type='text' placeholder='enter your name ' required />
                    </div> */}
                    <div className='input-box'>
                        <span className='details'>username</span>
                        <input type='text' placeholder='enter your username ' required />
                    </div>
                    <div className='input-box'>
                        <span className='details'> Email</span>
                        <input type='text' placeholder='enter your Email ' required />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Phone number</span>
                        <input type='text' placeholder='enter your Number' required/>
                    </div> 
                    <div className='input-box'>
                        <span className='details'>Password</span>
                        <input type='text' placeholder='enter your password ' required />
                    </div>
                    {/* <div className='input-box'>
                        <span className='details'>Confirme Password</span>
                        <input type='text' placeholder='Confirme Password ' required />
                    </div> */}

                </div>
                <div className='button'>
                    <input type='submit' value="Register"/>
                </div>

            </form>
            </div>
            
            
            
            </div>

        </>
    );
};
export default Register;