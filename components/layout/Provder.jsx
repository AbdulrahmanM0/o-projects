import Footer from "./footer/Footer"
import Header from "./header/Desktop/Header"


function Provder({ children }) {
    return (
        <div className='max-layout'>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Provder