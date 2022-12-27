import React from 'react';

// Icons
import {
  cssIcon,
  figmaIcon,
  gitIcon,
  jestIcon,
  jsIcon,
  railsIcon,
  reactIcon,
  rubyIcon,
  man,
  woman,
} from '../languages';

const Profile = () => (
  <>
    <main className="main-div">
      <div className="orbit">
        <div className="center-image">
          <img src={man} alt="temp logo" />
          <img src={woman} alt="temp logo" />
        </div>
        <ul className="ul-test">
          <li>
            <div><img src={cssIcon} alt="temp logo" /></div>
            <p>CSS</p>
          </li>
          <li>
            <div><img src={figmaIcon} alt="temp logo" /></div>
            <p>FIGMA</p>
          </li>
          <li>
            <div><img src={gitIcon} alt="temp logo" /></div>
            <p>GIT</p>
          </li>
          <li>
            <div><img src={jestIcon} alt="temp logo" /></div>
            <p>JEST</p>
          </li>
          <li>
            <div><img src={jsIcon} alt="temp logo" /></div>
            <p>JAVASCRIPT</p>
          </li>
          <li>
            <div><img src={railsIcon} alt="temp logo" /></div>
            <p>RAILS</p>
          </li>
          <li>
            <div><img src={reactIcon} alt="temp logo" /></div>
            <p>REACT</p>
          </li>
          <li>
            <div><img src={rubyIcon} alt="temp logo" /></div>
            <p>RUBY</p>
          </li>
        </ul>
      </div>
    </main>
  </>
);

export default Profile;
