import './components.css';
import timeSvg from './img/schedule_FILL0_wght100_GRAD0_opsz48.png'
import mySvgF from './img/icons8-linkedin.svg'
import mySvgI from './img/icons8-youtube.svg'
import mySvgT from './img/u_twitter-alt.svg'


import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Home(){
    const [cheakClick, setClickCheak] = useState(false);

    const changeClick = () =>{
        setClickCheak(!cheakClick);
    }

    return(
        <>  
             <header className={`header ${ cheakClick ? 'open' : '' } sticky top-1 mb-7 flex flex-wrap
              justify-between items-center max-w-full p-2 bg-slate-50
              rounded-lg shadow-md shadow-slate-400
              ` }>
                <button className="header__burger-btn" onClick={changeClick}>
                    <span></span><span></span>
                </button>
                <div className="">
                    <h4> Open Science </h4>
                </div>
                <nav className=" menu flex flex-wrap justify-between mw-72 
                    rounded-lg bg-gray-200 p-4
                    border-2 border-white-500
                    hover:border-blue-600">
                    <ul className="nav-list  flex flex-wrap justify-between">
                        <li> <h4 className=" ml-2"> Articles </h4> </li>
                        <li> <h4 className=" ml-2"> our project </h4></li>
                        <li> <h4 className=" ml-2"> About </h4></li>
                    </ul>
                </nav>
             </header>

             <main className="flex flex-col flex-wrap max-w-full">
                    <div className=" p-3 mb-5 flex flex-wrap justify-around items-center bg-white">
                        <img src="https://th.bing.com/th/id/OIG.i1PRij0KKcl52TXWZYLR?pid=ImgGn" alt="home" className=" h-96 max-w-sm rounded-xl"></img>
                        <h1> Open Science - <br></br> <h1 className='text-green-600'>it's open Magazin about science and etc.</h1> </h1>
                        <div className=' mb-2 w-5 h-2 bg-green-600'></div>
                    </div>

                    <section id='Cards' className='cards-section mb-5'>
                        <h4 className='mb-5 grid grid-cols-1 text-green-600 text-center'> Most Popular Articles</h4>
                        <div className='cards-container'>
                            <ul className='cards grid grid-cols-2 gap-4'>
                                <li className='card card__type-1 bg-slate-900 '> 
                                    <div className='card-wrap  p-5'>
                                        <div className='about-card mb-2 flex justify-between flex-wrap'>
                                            <p>Autor Test </p>
                                            <h4>time: 5m </h4>   
                                        </div>
                                        <div className=' mb-2 w-5 h-2 bg-green-600'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-4'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <div className='buttnons-cart mb-9'>
                                            <Link to='/titel' className=' bg-blue-500 hover:bg-blue-700
                                            text-white font-bold py-2 px-4 rounded'> 
                                                detailed...
                                            </Link>
                                        </div>
                                        <h4 className='titel-tegs mb-5'> tegs:</h4>
                                        <div className=' tegs-container flex flex-wrap'>
                                            
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                AI...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                git...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                cosmo...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                grid...
                                            </a>

                                        </div>
                                    </div>
                                </li>

                                <li className='card card__type-1 bg-slate-900 '> 
                                    <div className='card-wrap  p-5'>
                                        <div className='about-card mb-2 flex justify-between flex-wrap'>
                                            <p>Autor Test </p>
                                            <h4>time: 5m </h4>   
                                        </div>
                                        <div className=' mb-2 w-5 h-2 bg-green-600'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-4'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <div className='buttnons-cart mb-9'>
                                            <Link to='/titel' className=' bg-blue-500 hover:bg-blue-700
                                            text-white font-bold py-2 px-4 rounded'> 
                                                detailed...
                                            </Link>
                                        </div>
                                        <h4 className='titel-tegs mb-5'> tegs:</h4>
                                        <div className=' tegs-container flex flex-wrap'>
                                            
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                AI...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                git...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                cosmo...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                grid...
                                            </a>

                                        </div>
                                    </div>
                                </li>

                                <li className='card card__type-1 bg-slate-900 '> 
                                    <div className='card-wrap  p-5'>
                                        <div className='about-card mb-2 flex justify-between flex-wrap'>
                                            <p>Autor Test </p>
                                            <h4>time: 5m </h4>   
                                        </div>
                                        <div className=' mb-2 w-5 h-2 bg-green-600'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-4'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <div className='buttnons-cart mb-9'>
                                            <Link to='/titel' className=' bg-blue-500 hover:bg-blue-700
                                            text-white font-bold py-2 px-4 rounded'> 
                                                detailed...
                                            </Link>
                                        </div>
                                        <h4 className='titel-tegs mb-5'> tegs:</h4>
                                        <div className=' tegs-container flex flex-wrap'>
                                            
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                AI...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                git...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                cosmo...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                grid...
                                            </a>

                                        </div>
                                    </div>
                                </li>
                                
                                <li className='card card__type-1 bg-slate-900 '> 
                                    <div className='card-wrap  p-5'>
                                        <div className='about-card mb-2 flex justify-between flex-wrap'>
                                            <p>Autor Test </p>
                                            <h4>time: 5m </h4>   
                                        </div>
                                        <div className=' mb-2 w-5 h-2 bg-green-600'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-4'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <div className='buttnons-cart mb-9'>
                                            <Link to='/titel' className=' bg-blue-500 hover:bg-blue-700
                                            text-white font-bold py-2 px-4 rounded'> 
                                                detailed...
                                            </Link>
                                        </div>
                                        <h4 className='titel-tegs mb-5'> tegs:</h4>
                                        <div className=' tegs-container flex flex-wrap'>
                                            
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                AI...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                git...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                cosmo...
                                            </a>
                                            <a href='#' className=' tegs-link mr-2 mb-2  bg-green-300 bg-opacity-80 hover:bg-green-500
                                            text-white font-bold py-2 px-4 rounded-3xl'> 
                                                grid...
                                            </a>

                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </section>

                    <section id='social' className='social__links-container mb-5 flex flex-col flex-wrap content-center'>
                        <h4 className=' mb-5 text-green-700'> Our Socials </h4>
                        <div className='socials grid grid-cols-3'>
                            <div className='img-container className='flex flex-wrap justify-center>
                                <img src={mySvgF} alt='f' className='flex flex-wrap justify-center'></img>
                            </div>
                            <div className='img-container className='flex flex-wrap justify-center>
                                <img src={mySvgI} alt='f' className='flex flex-wrap justify-center'></img>
                            </div>
                        </div>
                    </section>

             </main>
        </>
    );
}