import './Index.css'

const Header = () => {
    return (
      <nav>

        <div className="HeatMap_Container">
          <h1 className="HeatMap_Title">HeatMap</h1>
        </div>

        <ul class="navigation-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">SOS</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Nidea</a>
          </li>
        </ul>

      </nav>
    );
}

export default Header