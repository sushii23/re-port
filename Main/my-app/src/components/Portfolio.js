import React from 'react';
import Project from '../components/Project';
const Portfolio = () => {
  return (
    <>
      <header>
        <h1>Developer's Name</h1>
        
      </header>
      <main>
        <section>
          <img src="avatar.jpg" alt="Avatar" />
          <p>Short bio about the developer</p>
        </section>
        <div style = {
            {
                display: 'flex',
                alignItems: 'center',
                padding: '9px'
            }
        }>
        <Project />
        <Project />
        <Project />
      </div>
      </main>
      {/* <footer>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Stack Overflow</a>
      </footer> */}
    </>
  );
};

export default Portfolio;
