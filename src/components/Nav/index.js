import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-inverse">
      <a className="navbar-brand" href="/">
        <b>Daily News 5000</b>
      </a>
     <button className = 'sports-scrape'>Food</button>
     <button className = 'sports-scrape'>Sports</button>
     <button className = 'sports-scrape'>Technology</button>
     <button className = 'sports-scrape'>Travel</button>
     <button className = 'sports-scrape'>World News</button>

    </nav>
  );
}

export default Nav;
