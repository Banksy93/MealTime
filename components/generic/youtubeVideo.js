import { useEffect, useState } from "react";
import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import SubHeading from "./subHeading";

const YoutubeVideo = ({videoUrl}) => {
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        function getVideoIdFromUrl() {
            const regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = videoUrl.match(regex);

            if (match && match[2].length == 11) {
                setVideoId(match[2]);
            }
        }

        getVideoIdFromUrl();
    }, []);

    return (
        <View>
            <SubHeading title="Watch"/>
            { videoId.length > 0 ?
                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={videoId} />
                : null }
        </View>
    )
}

export default YoutubeVideo;