import React from 'react';

const Header = () => {
  return (
    <>
      <section className="section-center main-center">
        <header className="header">
          <div className="user-container">
            <img src="profile.png" alt="profile-pic" />
            <div className="user-details">
              <h4>CHENNA SREENU</h4>
              <h5>
                <span className="key">Education:</span> Agriculture & Food
                Engineering,
                <span className="key"> IIT Kharagpur (2018-22)</span>
              </h5>
              <h5>
                <span className="key">Email:</span> csrinu236@gmail.com
              </h5>
              <h5>
                <span className="key">Location:</span> Hyderabad, India
              </h5>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
