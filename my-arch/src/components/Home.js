import './components.css';
import { useState } from 'react';



export default function Home(){
    const [cheakClick, setClickCheak] = useState(false);

    const changeClick = () =>{
        setClickCheak(!cheakClick);
    }

    return(
        <>  
             <header className={`header ${ cheakClick ? 'open' : '' } sticky top-1 mb-7 flex flex-wrap
              justify-between items-center max-w-full p-2 bg-stone-400
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
                        <h1> Open Science - <br></br> <h1 className='text-blue-700'>it's open Magazin about science and etc.</h1> </h1>
                    </div>

                    <section id='Cards' className='cards-section mb-5'>
                        <div className='cards-container'>
                            <ul className='cards grid grid-cols-2 gap-4'>
                                <li className='card card__type-1 bg-slate-900 '> 
                                    <div className='card-wrap  p-5'>
                                        <div className='about-card mb-2 flex justify-between flex-wrap'>
                                            <p>Autor Test </p>
                                            <h4>time: 5m </h4>   
                                        </div>
                                        <div className=' mb-2 w-5 h-2 bg-blue-400'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-4'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <a href='#' className=' mb-4 bg-blue-500 hover:bg-blue-700
                                         text-white font-bold py-2 px-4 rounded'> 
                                            detailed...
                                        </a>
                                        <div className=' tegs-container'>
                                            <a href='#' className='bg-blue-500 hover:bg-blue-700
                                            text-white font-bold py-2 px-4 rounded'> 
                                                detailed...
                                            </a>
                                            <a href='#' className='bg-blue-500 hover:bg-blue-700
                                            text-white font-bold py-2 px-4 rounded'> 
                                                detailed...
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
                                        <div className=' mb-2 w-5 h-2 bg-blue-400'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-2'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <a href='#' className='bg-blue-500 hover:bg-blue-700
                                         text-white font-bold py-2 px-4 rounded'> 
                                            detailed...
                                        </a>
                                    </div>
                                </li>

                                <li className='card card__type-1 bg-slate-900 '> 
                                    <div className='card-wrap  p-5'>
                                        <div className='about-card mb-2 flex justify-between flex-wrap'>
                                            <p>Autor Test </p>
                                            <h4>time: 5m </h4>   
                                        </div>
                                        <div className=' mb-2 w-5 h-2 bg-blue-400'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-2'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <a href='#' className='bg-blue-500 hover:bg-blue-700
                                         text-white font-bold py-2 px-4 rounded'> 
                                            detailed...
                                        </a>
                                    </div>
                                </li>
                                
                                <li className='card card__type-1 bg-slate-900 '> 
                                    <div className='card-wrap  p-5'>
                                        <div className='about-card mb-2 flex justify-between flex-wrap'>
                                            <p>Autor Test </p>
                                            <h4>time: 5m </h4>   
                                        </div>
                                        <div className=' mb-2 w-5 h-2 bg-blue-400'></div>
                                        <h4> titel </h4>
                                        <p className=' mb-2'>lorem12 I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                                        <a href='#' className='bg-blue-500 hover:bg-blue-700
                                         text-white font-bold py-2 px-4 rounded'> 
                                            detailed...
                                        </a>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </section>



                    <p>aiiwajfpafaf  sfjsd pasddjpa  hafawihdfa wa nd</p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <br></br>
                    <p>aiiwajfpafaf  sfjsd pasddjpa fajwadofa s</p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpafw  wfaw fewer saf </p>
                    <br></br>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa  dasfwe wf aws</p>
                    <br></br>
                    <p>aiiwajfpafaf  sfjsd pasddjpa jekkiloj</p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpaawe wefas </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa fsfsa</p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa aegrhjs</p>
                    <br></br>
                    <p>aiiwajfpafaf  sfjsd pasddjpasdfawew </p>
                    <p>aiiwajfpafaf  sfjsd pasddjpa </p>
             </main>
        </>
    );
}