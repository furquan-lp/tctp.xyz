import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const About = () =>
  <div className="about">
    <Header />
    <div className="about-text">
      <h1>About</h1>
      <p>Hi!</p>
      <p>
        I'm Syed Furquan Ahmad, a software engineer passionate about open source
        and web development. The Chip Tinker Project was originally concieved as
        an idea for a blog where I would post ideas and tricks about electronics
        prototyping, IoT, etc. with the main theme revolving around cool ways to
        tinker with technology. But over time it slowly evolved into a more
        general space where I could write about more technology-related things
        that had interested me, including and web development tips and tricks I
        had found.
      </p>
      <p>
        You can learn more about me and my projects on my <a
          href="https://simpledev.site/">website</a>. If you have any feedback,
        you can email me at <a
          href="mailto:simpledev.site@proton.me">SimpleDev</a>.
      </p>
    </div>
    <Footer />
  </div>;

export default About;