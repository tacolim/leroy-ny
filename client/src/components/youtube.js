import React from 'react';
import YouTube from 'react-youtube';
 
class Youtube extends React.Component {
  render() {
    const opts = {
      height: '200',
      width: '400',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="8Qmz-HfdeG0"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;