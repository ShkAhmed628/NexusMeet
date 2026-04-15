import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomid } = useParams();

  const myMeeting = async (element) => {
    const appID = Number(import.meta.env.VITE_APPID);
    const serverSecret = import.meta.env.VITE_SERVERSECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), "Ahmed");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [
        {
          name: 'Join Link',
          url: `${window.location.origin}/room/${roomid}`,
        },
      ],
    });
  };

  return (
    <div>
      <div ref={myMeeting} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default Room;