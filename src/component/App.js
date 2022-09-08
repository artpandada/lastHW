import Header from "./Header";
import {MainPage} from "./pages/MainPage";
import Modal from "./Modal/Modal";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";


import { useSelector } from 'react-redux'



function App() {
    const modal = useSelector((state)=> state.modal.window);
    let modalClass = '';
    if(modal){
        modalClass = 'is-modal-open';
    }


    return (

       <Router>
           <div className={modalClass} >
               <Header/>
               <main>
                   <Routes>
                       <Route  path='/' element ={<MainPage t={1} />}/>
                       <Route  path='/:filter' element ={<MainPage  t={2}/>}/>
                   </Routes>
               </main>
               {modal ? <Modal/> : null}
           </div>
       </Router>

    )
        ;
}

export default App;
