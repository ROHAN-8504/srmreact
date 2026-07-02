
import './App.css'
import Card from './Card'
import Home from './Home'
import Header from './Header'
function App() {
  return (
    <>
    <Header/>
    <Home/>
     <h1>cards</h1>
     <Card img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/26ecae56-6196-4204-a1c0-d7d984208ecf_217542.JPG"  title="Pizza Hut" address='vijaywada'  />
     <Card img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pocpd4knzgptsuguulhv"  title="bbq"  address="srm ap"  />
     
    </>
  )
}

export default App
