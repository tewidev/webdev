import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div id="navbarmain">
        <div id="socialmediawrapper">
            <a href="https://twitter.com/DevTewi">
                <img src="/images/twittericon.svg" class="socialmediaicons"></img>
            </a>
            <a href="https://github.com/tewidev">
                <img src="/images/githubicon.svg" class="socialmediaicons"></img>
            </a>
            <a href="http://tewidev.tumblr.com/">
                <img src="/images/tumblricon.png" class="socialmediaicons"></img>
            </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
