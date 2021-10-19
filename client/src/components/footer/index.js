import "./style.css"
const Footer = () => {
    return <>
    <footer className="flex">
       <div className="flex items-center" style={{"width": "70%","margin":"auto"}}>
       <figure>
            {/* <img src="./assest/images/landing.png" alt="" style={{"width": "200px"}} /> */}
        </figure>
        <ul>
        <ul class="footer--links">
           <li className={`px-4 py-2 link `}>
             <a href="/">Home</a>
           </li>
           <li  className={`px-4 py-2 link`}>
             <a href="/takeyourbike">TakeBike</a>
    
           </li>
           <li  className={`px-4 py-2 link`}>
             <a href="#">PostBike</a>
            

           </li>
           <li  className={`px-4 py-2 link `}>
             <a href="#">About</a>
            

           </li>
           <li className="px-4 py-2 link">
             <a href="#">Profile</a>
            

           </li>
            
          </ul>
            
        </ul>
       </div>
    </footer>
    </>
}

export default Footer;