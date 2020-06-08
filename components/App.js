import React from "react"
import ReactDOM from "react-dom"


import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

// use app.js as a table of contents for the components
function App() {
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App