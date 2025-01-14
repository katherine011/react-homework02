import './App.css'
import img1 from './assets/images/mainPicture.png'
import img2 from './assets/icons/icon1.png'
import img3 from './assets/icons/Clock.png'
import img4 from './assets/images/Oval.png'

function App() {

  return (
     <div className='container'>
      <div className='img1'>
        <img src={img1} alt="" className='kath'/>
      </div>
      <div className='card'>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className='block card2'>
          <div className='block card3'>
            <img src={img2} alt="diamons" />
            <p>0.041 ETH</p>
          </div>
          <div className='block card4'>
            <img src={img3} alt="clock" />
            <p>3 days left</p>
          </div>
        </div>
        <div className='line'></div>
        <div className='lastDiv'>
          <img src={img4} alt="mans pfp" />
          <p>Creation of<span>Jules Wyvern</span></p>
        </div>
      </div>
     </div>
  )
}

export default App
