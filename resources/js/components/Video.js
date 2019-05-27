import React, { useState, useEffect } from 'react';
const Video = () => {
    const [video, setVideo] = useState(null);

    const playerConfig = {
        key: 'fa0daac8-a7c6-40b2-8abb-012ddbd1b2a3'
    };
    const playerSource = {
        // dash: 'https://s3.amazonaws.com/tcm-stream-out/Afgrunden_1910.mp4',
        // hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        progressive: 'https://s3.amazonaws.com/tcm-stream-out/Afgrunden_1910.mp4'
        // poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    };
    useEffect(() => {
        setupPlayer();
        return function cleanup() {
            destroyPlayer();
        };
    }, []);
    const setupPlayer = () => {
        const player = new bitmovin.player.Player(document.getElementById('video-player'), playerConfig);
        player.load(playerSource).then(
            () => {
                setVideo(player);
                console.log('Successfully loaded source');
            },
            () => {
                console.log('Error while loading source');
            }
        );
    };
    const destroyPlayer = () => {
        if (video != null) {
            video.destroy();
            setVideo(null);
        }
    };
    return <div id="video-player" />;
};
export default Video;
