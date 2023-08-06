import './components.css';

import logo from './img/deployed_code_FILL0_wght400_GRAD0_opsz48.svg'

export default function Footer(){
    return(
        <>
            <footer className='footer min-w-full p-5 bg-green-900 flex flex-wrap justify-between text-white'>
                <h4>
                    2023
                </h4>
                <img src={logo}alt='logo'></img>
                <h4 className=' underline '>
                    <a href='#'>my github</a>
                </h4>
            </footer>
        </>
    );
} 