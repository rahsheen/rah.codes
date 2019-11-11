import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import Typography from 'typography';

const { rhythm } = new Typography();

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={`R. Anthony Porter`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://mobile.twitter.com/rahsheen">R. Anthony Porter</a>.{' '}
          I&nbsp;make this look easy.
        </p>
      </div>
    );
  }
}

export default Bio;