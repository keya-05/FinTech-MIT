import '../style.css';
import Koinzz from '../assets/koinzz.svg';
import homeActive from '../assets/homeActive.svg';
import profile from '../assets/profile.svg';
import bulb from '../assets/bulb.svg';
import glasss from '../assets/glass.svg';

const Home = () => {
  return (
    <div className="grid-container">
      {/* Left column: logo + sidebar */}
      <div>
        <img src={Koinzz} alt="Logo" className="logo" />
        <div className="sidebar">
          <div className="sidebar-item " style={{ marginTop: '50px' }}>
            <img src={homeActive} alt="Logo" className="sidebar-logo" />
          </div>
          <div className="sidebar-item">
            <img src={bulb} alt="bulb" className="sidebar-logo" />
          </div> 
          <div className="sidebar-item">
            <img src={profile} alt="Profile" className="sidebar-logo" />
          </div>
        </div>
      </div>

      {/* Right column: main area */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <div className="search-engine">
            Search for Campaigns
            <div className="search" style={{opacity:'1'}}>
              <img src={glasss} alt='search' className="search-logo" />
            </div>
          </div>
          <div className="connect">Connect</div>
        </div>

        {/* Content */}
        <div>
          <h2>All Campaigns (0)</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
