import './components.css';
import vision from './img/visibility_FILL1_wght400_GRAD0_opsz48.svg'
import mySvgF from './img/icons8-linkedin.svg'
import mySvgI from './img/icons8-youtube.svg'
import home from './img/home_app_logo_FILL0_wght400_GRAD0_opsz48.svg'
import { Link } from 'react-router-dom';

export default function Article() {
    return (
        <>
            <div className=' p-5 grid grid-cols-1'>
                <h1 className='text-center mb-5'> Computer science </h1>
                <div className=' fixed socials-container mb-5 grid grid-cols-1 left-0'>
                    <Link to="/"><img src={home} alt='home' className=' w-7 h-7'></img></Link>  
                    <img src={mySvgF} alt='Linked' className='w-7 h-7'></img>
                    <img src={mySvgI} alt='youtube' className='w-7 h-7'></img>
                </div>
                <div className=' mb-2 w-5 h-2 bg-green-600'></div>
                <p className='text-titel mb-5 p-7'>
                    What you need to know about translation and localization:
                    Translation and localization are different processes. Translation is the transfer of a text written in one language using the tools of another language while preserving the meaning of the original text. Localization, in turn, also involves adapting the source material to the cultural and linguistic specifics of the target market.
                    <br></br>
                    <br></br>
                    During localization, changes can affect many different aspects of the text: from date and time format to jokes and wordplay.

                    With quality localization, you can increase customer satisfaction and loyalty around the world, as well as increase your company's revenue.

                    AI translation is an invaluable tool that can help you optimize your product and content localization processes.

                    React Server Components
                    React Server Components (or RSC) is a new application architecture designed by the React team.
                    <br></br>
                    <br></br>
                    We’ve first shared our research on RSC in an introductory talk and an RFC. To recap them, we are introducing a new kind of component—Server Components—that run ahead of time and are excluded from your JavaScript bundle. Server Components can run during the build, letting you read from the filesystem or fetch static content. They can also run on the server, letting you access your data layer without having to build an API. You can pass data by props from Server Components to the interactive Client Components in the browser.

                    RSC combines the simple “request/response” mental model of server-centric Multi-Page Apps with the seamless interactivity of client-centric Single-Page Apps, giving you the best of both worlds.

                    Since our last update, we have merged the React Server Components RFC to ratify the proposal. We resolved outstanding issues with the React Server Module Conventions proposal, and reached consensus with our partners to go with the "use client" convention. These documents also act as specification for what an RSC-compatible implementation should support.

                    The biggest change is that we introduced async / await as the primary way to do data fetching from Server Components. We also plan to support data loading from the client by introducing a new hook called use that unwraps Promises. Although we can’t support async / await in arbitrary components in client-only apps, we plan to add support for it when you structure your client-only app similar to how RSC apps are structured.

                    Now that we have data fetching pretty well sorted, we’re exploring the other direction: sending data from the client to the server, so that you can execute database mutations and implement forms. We’re doing this by letting you pass Server Action functions across the server/client boundary, which the client can then call, providing seamless RPC. Server Actions also give you progressively enhanced forms before JavaScript loads.

                    React Server Components has shipped in Next.js App Router. This showcases a deep integration of a router that really buys into RSC as a primitive, but it’s not the only way to build a RSC-compatible router and framework. There’s a clear separation for features provided by the RSC spec and implementation. React Server Components is meant as a spec for components that work across compatible React frameworks.

                    We generally recommend using an existing framework, but if you need to build your own custom framework, it is possible. Building your own RSC-compatible framework is not as easy as we’d like it to be, mainly due to the deep bundler integration needed. The current generation of bundlers are great for use on the client, but they weren’t designed with first-class support for splitting a single module graph between the server and the client. This is why we’re now partnering directly with bundler developers to get the primitives for RSC built-in.
                    <br></br>
                    <br></br>
                    Asset Loading
                    Suspense lets you specify what to display on the screen while the data or code for your components is still being loaded. This lets your users progressively see more content while the page is loading as well as during the router navigations that load more data and code. However, from the user’s perspective, data loading and rendering do not tell the whole story when considering whether new content is ready. By default, browsers load stylesheets, fonts, and images independently, which can lead to UI jumps and consecutive layout shifts.

                    We’re working to fully integrate Suspense with the loading lifecycle of stylesheets, fonts, and images, so that React takes them into account to determine whether the content is ready to be displayed. Without any change to the way you author your React components, updates will behave in a more coherent and pleasing manner. As an optimization, we will also provide a manual way to preload assets like fonts directly from components.

                    We are currently implementing these features and will have more to share soon. fi
                </p>
                <div className=' mb-2 w-5 h-2 bg-green-600'></div>

                <div className='about__Autor-container mb-5 grid grid-cols-1'>
                    <h4>by Sten lee</h4>
                </div>

                <div className='visibal-container mb-5 flex flex-row flex-wrap items-center'>
                    <img src={vision} alt='vision' className='mr-2'></img>
                    <h4>  01 </h4>
                </div>
            </div>
        </>
    );
}