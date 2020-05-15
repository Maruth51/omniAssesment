import React, { Fragment } from "react";
import MediaPlayer from "./components/MediaPlayer";
import "video-react/dist/video-react.css";
import "./styles.css";
import CardModule from "./components/Module";
import { Alert } from "reactstrap";

export default function App() {
  return (
    <Fragment>
      <div className="conatiner mr-auto">
        <Alert color="light border border-dark"> Video heading</Alert>
      </div>
      <div className="container row">
        <div className="container col-lg-10">
          <MediaPlayer />
        </div>
        <div className="col-lg-2">
          <CardModule />
        </div>
      </div>
    </Fragment>
  );
}
