import React, { useState, useEffect } from 'react';
import videojs from 'video.js';

const Video = ({ playerConfig }) => {
    const [video, setVideo] = useState(null);

    let videoNode;
    useEffect(() => {
        setupPlayer();
        return function cleanup() {
            destroyPlayer();
        };
    }, []);
    const setupPlayer = () => {
        videojs(videoNode, playerConfig, function() {
            setVideo(this);
        });
    };
    const destroyPlayer = () => {
        if (video != null) {
            video.dispose();
            setVideo(null);
        }
    };
    return (
        <div>
            <div data-vjs-player>
                <video ref={node => (videoNode = node)} className="video-js" />
            </div>
        </div>
    );
};
export default Video;
