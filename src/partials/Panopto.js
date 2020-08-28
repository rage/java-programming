import React from "react"
import styled from "styled-components"
import ReduxActionAnalytics from "redux-action-analytics"
import * as storejs from "store"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

let analytics = undefined

initAnalytics()

function initAnalytics() {
  if (typeof window === "undefined") {
    return
  }
  analytics = new ReduxActionAnalytics(
    "https://usage.testmycode.io/api/v0/data",
    "youtube-watch-stats",
    "youtube-watch-stats",
    10000,
    () => {
      const user = storejs.get("tmc.user")
      if (user === undefined) {
        return {}
      }
      return {
        username: user.username,
      }
    },
  )
}

function onPlayerStateChange(event) {
  return
}

function onPlaybackRateChange(event) {
  const player = event.target
  logAction("PLAYBACK_SPEED_CHANGED", player)
}

function logAction(action, player) {
  const happenedAt = new Date().getTime()
  const videoTime = player.getCurrentTime()
  const youtubeIdentifier = player.___youtube_identifier
  const playBackRate = player.getPlaybackRate()
  const snapshot = {
    action: action,
    video_time: videoTime,
    youtube_identifier: youtubeIdentifier,
    happened_at_milliseconds: happenedAt,
    playback_speed: playBackRate,
  }
  analytics.saveAction(snapshot)
}

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  margin-bottom: 2rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Panopto = props => {
  return (
    <VideoWrapper>
      <iframe
        src={props.src}
        height="405"
        width="720"
        allowfullscreen
        allow="autoplay"
      ></iframe>
    </VideoWrapper>
  )
}

export default withSimpleErrorBoundary(Panopto)
