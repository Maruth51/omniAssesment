import React, { Fragment } from "react";
import { Player, BigPlayButton } from "video-react";
import "../styles.css";
import { Alert } from "reactstrap";

const MediaPlayer = () => {
  return (
    <Fragment>
      <div>
        <Player
          className="media-box"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          fluid
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
    </Fragment>
  );
};

export default MediaPlayer;
