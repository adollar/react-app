import React, {Component} from 'react';
import YouTube from 'react-youtube';
import '../../../styles/youtube_player.css';


export class YoutubePlayer extends Component
{
    render() {
        const opts = {
            height: '390',
            width: '640',
            videoId: '98oaRJ6UyTQ',
            playerVars: {
                'autoplay': 0,
                'modestbranding': 1,
            },
        };

        function closePlayer(event) {
            console.log('close');
        }

        function openPlayer() {
            console.log('play');
        }

        return (
            <div id="player_with_subsc">
                <div className="playerWrapper">
                    <div id="control_player">
                        <i id="close_player" className="fa fa-window-close" onClick={closePlayer} aria-hidden="true"/>
                        <i id="open_player" className="fa fa-expand" onClick={openPlayer} aria-hidden="true"/>
                    </div>

                    <div id="player" className="heading-line">
                        <YouTube
                            videoId="2g811Eo7K8U"
                            opts={opts}
                            onReady={YoutubePlayer._onReady}
                        />
                    </div>
                </div>
            </div>
        );
    }

    static _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
