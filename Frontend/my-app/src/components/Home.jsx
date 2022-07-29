import landingpage from '../landingpage.jpg'

const Home = () => {

    return (
      <div className="home">
        <div>
        </div>
        <div>
          <h1>Cabana Day</h1>
          <h2>
            Rent a local mini vacay with daily cabanas of all types!
            {/* <button onClick="booking">Book Today!</button> */}
          </h2>
        </div>
        <div>
        <img
          className="center"
          style={{
            display: 'block',
            maxWidth: '100%'
          }}
          src={landingpage}
          alt="logo"
        />
      </div>
      </div>
    )
  }
  
  export default Home
  