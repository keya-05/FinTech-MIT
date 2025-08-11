import '../style.css';
import Koinzz from '../assets/koinzz.svg';

const Home = () => {
  return (
    <div className="grid-container">
      {/* Left column: logo + sidebar */}
      <div>
        <img src={Koinzz} alt="Logo" className="logo" />
        <div className="sidebar"></div>
      </div>

      {/* Right column: main area */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <div className="search-engine">
            <div className="search"></div>
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
