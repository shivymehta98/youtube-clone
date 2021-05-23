import React from 'react'
import "./ChannelRow.css"
import {Avatar} from "@material-ui/core"

function ChannelRow({image, channel , verified, subs, noOfVideos, description}) {
    return (
        <div className = "channelRow">
            <Avatar className = "channelRow_logo"
            alt = {channel} src = {image} />
          <div className="channelRow__text">
              <h4>{channel}</h4>
              <p>{subs} Subscribers • {noOfVideos} videos</p>
              <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
