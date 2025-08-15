import '../style.css';
import Koinzz from '../assets/koinzz.svg';
import home from '../assets/home.svg';
import profile from '../assets/profile.svg';
import bulbActive from '../assets/bulbActive.svg';

function CreateCampaign(){
    return(
        <div>
            <div className="grid-container">
                <div>
                    <img src={Koinzz} alt="Logo" className="logo" />
                    <div className="sidebar">
                    <div className="sidebar-item " style={{ marginTop: '50px' }}>
                        <img src={home} alt="Logo" className="sidebar-logo" />
                    </div>
                    <div className="sidebar-item">
                        <img src={bulbActive} alt="bulb" className="sidebar-logo" />
                    </div> 
                    <div className="sidebar-item">
                        <img src={profile} alt="Profile" className="sidebar-logo" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCampaign;