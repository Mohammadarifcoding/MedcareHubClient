import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';

const MeetingRoom = () => {
    const {code} = useParams()
    console.log(code)
    let myMeeting = async (element) => {
        const userID = Math.floor(Math.random() * 10000) + "";
        const appID = 753523643;
     const serverSecret = "8e634de66dccfa86a3178974853e8160";
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, code,  userID , new Date().toString());
    
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     console.log(kitToken)
     zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              code,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
    });
    }
 
    return (
        <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: '100%', height: '100vh' }}
      ></div>
    );
};

export default MeetingRoom;