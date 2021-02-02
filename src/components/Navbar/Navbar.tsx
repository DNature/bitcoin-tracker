import React, { useState } from "react";
// import GitHubButton from "react-github-btn";
import Dropdown, {
  DropdownContent, DropdownTrigger
} from "react-simple-dropdown";
import "./Navbar.scss";
import SearchBar from "./SearchBar";


export default function Navbar() {
  const [isActive, setActive] = useState(false);

  return (
    <header className="navbar">
      <section className="navbar-section">
        <SearchBar />
      </section>
      <section className="navbar-section nav-center">
       
        <a
          rel="noopener noreferrer"
          className="navbar-icons"
          target="_blank"
          href="https://github.com/dnature"
        >
          <i className="fa fa-github"></i>
        </a>
        <Dropdown active={isActive} onClick={() => setActive(!isActive)}>
          <DropdownTrigger>
            <figure className="avatar avatar-lg">
              <i className="avatar-presence online"></i>
            </figure>
          </DropdownTrigger>
          <DropdownContent>
            <p>Login</p>
            <p>Profile</p>
            <p>Settings</p>
          </DropdownContent>
        </Dropdown>
      </section>
    </header>
  );
}
