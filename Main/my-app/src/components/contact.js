import React from 'react';



const Contact = () => {
  return (
    <>
      <header>
        <h1>Developer's Name</h1>
    
      </header>
      <main>
        <section>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      {/* <footer>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Stack Overflow</a>
      </footer> */}
    </>
  );
};

export default Contact;
