
import './App.css'

function MovieSite() {

  return (
    <>
    <div className="header">
      <div className="logo">
        Chris Movies
      </div>
      <div className="chooseLinks">
        <a href="">Browse</a>
        <a href="">series</a>
        <a href="">Movies</a>
      </div>
      <div className='headerLinks'>
        <button>
          <i className='fa-solid fa-search'></i>
        </button>
        <a  className='log' href="">Log in</a>
        <a className='sub' href="">Subscribe</a>
      </div>
    </div>
       <div className="container">
          <h1 className='tagline'>Your Gateway to the world of Movies.</h1>
          <a className="watch-btn" href="">watch more</a>
       </div>

       <div className="footer">
        <p> &copy; Chris movie 2025</p>
       </div>
    </>
  )
}

export default MovieSite
