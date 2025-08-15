import '../style.css';
import Koinzz from '../assets/koinzz.svg';
import homeActive from '../assets/homeActive.svg';
import profile from '../assets/profile.svg';
import bulb from '../assets/bulb.svg';

function Profile(){
    return(
        <div className="grid-container">
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
        </div>
    )
}

export default Profile;