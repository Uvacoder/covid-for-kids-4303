import PropTypes from 'prop-types';
import React from 'react';

class YouTubeVideo extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };
    special = this.props.s
    componentDidMount = () => {
        if (typeof window === 'undefined') return
        // On mount, check to see if the API script is already loaded
        if (!window.YT && window.onYouTubeIframeAPIReady) {
            window.data.push(this.loadVideo)
        } else if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            window.data = [this.loadVideo]
            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = () => {
                window.data.map(v => v())
            };

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        } else { // If script is already there, load the video directly
            this.loadVideo();
        }
    };

    loadVideo = () => {
        const { id } = this.props;
        console.log(id)
        // the Player object is created uniquely based on the id in props
        this.player = new window.YT.Player(`youtube-player-${id}-${this.special}`, {
            videoId: id,
            events: {
                onReady: this.onPlayerReady,
                onStateChange: this.end
            },
        });
    };
    end = s => {
        if (s.data == 0 && this.props.onEnd) {
            this.props.onEnd(this.player)
        }
    }
    onPlayerReady = event => {
        //event.target.playVideo();
    };

    render = () => {
        const { id } = this.props;
        return (
            <div style={{
                width: "100%",
                height: "100%"
            }} id={`youtube-player-${id}-${this.special}`} />
        );
    };
}

export default YouTubeVideo;