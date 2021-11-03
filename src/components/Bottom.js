import React from 'react'

export const Bottom = () => {
    return (
        <div>
            <div className="after-form">
      <div className="advanced">
        <h2>Advanced Statistics</h2>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </div>
      <div className="grid">
        <div className="first-grid">
          <div>
            <img src="images/icon-brand-recognition.svg" alt="" className="icon" />
          </div>
          <div><h3>Brand Recognition</h3></div>
          <div>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="second-grid">
          <img src="images/icon-detailed-records.svg" alt="" className="icon" />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="third-grid">
          <img src="images/icon-fully-customizable.svg" alt="" className="icon" />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
    <div className="cta">
      <div>
        <h2>Boost your links today</h2>
      </div>
      <div><button href="#" className="btn-2">Get Started</button></div>
    </div>
    <footer className="footer">
      <div>
        <img src="images/logo - Copy.svg" alt="" className="logo" id="logo" />
      </div>
      <div>
        <ul>
          <li><strong>Features</strong></li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><strong>Resources</strong></li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><strong>Company</strong></li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="social-icons">
        <img src="images/icon-facebook.svg" alt="" />
        <img src="images/icon-twitter.svg" alt="" />
        <img src="images/icon-pinterest.svg" alt="" />
        <img src="images/icon-instagram.svg" alt="" />
      </div>
    </footer>
    <div className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"
        >Frontend Mentor</a
      >. Coded by <a href="twitter.com/sonofpharoh">Your Name Here</a>.
    </div>
        </div>
    )
}
