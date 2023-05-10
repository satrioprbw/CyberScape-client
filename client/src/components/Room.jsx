
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Room({ position, nfts }) {
  console.log(nfts);

  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms);
  const profile = useSelector(state => state.user);

  const frame_positions = [{ pos: "0 2.5 -7.5", rot: "0 0 0" }
    , { pos: "0 2.5 7.5", rot: "0 180 0" }
    , { pos: "5 2.5 0", rot: "0 -135 0" }
    , { pos: "-5 2.5 0", rot: "0 -135 0" }]


  return (
    <>
      <a-entity position={position}>
        <a-box src="#wallTexture" position="0 3.5 -8" width="22" height="7" depth="0.3"></a-box>
        <a-box src="#wallTexture" position="0 3.5 8" width="22" height="7" depth="0.3"></a-box>
        <a-box material="opacity: 0.5" rotation="0 90 0" position="-11 3.5 0" width="16" height="7" depth="0.1"></a-box>

        <a-box color="black" rotation="0 90 0" position="11 2.5 0" width="4" height="5" depth="0.3">
          <a-box src={nfts?.Artist.avatarUrl} position="-1 1 0.2" width="1" height="1" depth="0.1">
          </a-box>
          <a-text
            value={nfts?.Artist.name}
            color="white"
            position="-1.6 0 0.2"
            scale="1 1 1"
          ></a-text>
        </a-box>
        <a-box src="#wallTexture" position="0 7 0" width="22" height="16" depth="0.1" rotation="90 0 0">
        </a-box>
        <a-box position="0 2.5 -7.5" width="13" height="4" depth="0.1">
          <a-box position="0 0 0.1" rotation="0 0 0" color='black' width='2.4' height='3' depth='0.05'
            animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
            <a-plane position="0 0 0.04" src={`http://localhost:8080/${nfts.RoomNFTs[0].NFT.imageUrl}`}
              event-set__show={`_event: mouseenter; _target: #nft${nfts.RoomNFTs[0].id}_info; visible: true`}
              event-set__hide={`_event: mouseleave; _target: #nft${nfts.RoomNFTs[0].id}_info; visible: false`}
              width="2.4" height="3"></a-plane>
            <a-plane id={`nft${nfts.RoomNFTs[0].id}_info`} width="2.4" height="3" opacity='0.5' color='black'
              position="0 0 0.04" visible='false' >
              <a-text
                value="test"
                color="black"
                position="-0.7 0.9 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.title ? 'by ' + nfts[0]?.RoomNFTs[0].Room.Artist.name : null}
                color="white"
                position="-0.7 0.7 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.description?.slice(0, 70)}
                color="white"
                position="-0.7 0.5 0.1"
                scale="0.3 0.3 0.3"
              ></a-text>
            </a-plane>

          </a-box>

          <a-box position="-4 0 0.1" rotation="0 0 0" color='black' width='2.4' height='3' depth='0.05'
            animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
            <a-plane position="0 0 0.04" src={`http://localhost:8080/${nfts.RoomNFTs[1].NFT.imageUrl}`} width="2.4" height="3" event-set__show={`_event: mouseenter; _target: #nft${nfts.RoomNFTs[1].id}_info; visible: true`}
              event-set__hide={`_event: mouseleave; _target: #nft${nfts.RoomNFTs[1].id}_info; visible: false`}></a-plane>
            <a-plane id={`nft${nfts.RoomNFTs[1].id}_info`} width="2.4" height="3" opacity='0.5' color='black'
              position="0 0 0.04" visible='false' >
              <a-text
                value="test"
                color="black"
                position="-0.7 0.9 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.title ? 'by ' + nfts[0]?.RoomNFTs[0].Room.Artist.name : null}
                color="white"
                position="-0.7 0.7 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.description?.slice(0, 70)}
                color="white"
                position="-0.7 0.5 0.1"
                scale="0.3 0.3 0.3"
              ></a-text>
            </a-plane>

          </a-box>

          <a-box position="4 0 0.1" rotation="0 0 0" color='black' width='2.4' height='3' depth='0.05'
            animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">

            <a-plane position="0 0 0.04" src={`http://localhost:8080/${nfts?.RoomNFTs[2].NFT.imageUrl}`} width="2.4" height="3" event-set__show={`_event: mouseenter; _target: #nft${nfts.RoomNFTs[2].id}_info; visible: true`}
              event-set__hide={`_event: mouseleave; _target: #nft${nfts.RoomNFTs[2].id}_info; visible: false`}></a-plane>
            <a-plane id={`nft${nfts.RoomNFTs[2].id}_info`} width="2.4" height="3" opacity='0.5' color='black'
              position="0 0 0.04" visible='false' >
              <a-text
                value="test"
                color="black"
                position="-0.7 0.9 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.title ? 'by ' + nfts[0]?.RoomNFTs[0].Room.Artist.name : null}
                color="white"
                position="-0.7 0.7 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.description?.slice(0, 70)}
                color="white"
                position="-0.7 0.5 0.1"
                scale="0.3 0.3 0.3"
              ></a-text>
            </a-plane>
          </a-box>

          <a-light type="directional" color="purple" position="0 0.5 1" intensity="0.04">
          </a-light>
          <a-light type="directional" color="red" position="3 0.5 1" intensity="0.02"></a-light>
          <a-light type="directional" color="blue" position="-3 0.5 1" intensity="0.02"></a-light>
          <a-cylinder position="6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>

        <a-box src="" position="0 2.5 7.5" width="13" height="4" depth="0.1" rotation="0 180 0">
          <a-box position="0 0 0.08" rotation="0 180 0" color='black' width='2.4' height='3' depth='0.05'
            animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave">
            <a-plane position="0 0 -0.04" rotation="0 180 0" src={`http://localhost:8080/${nfts?.RoomNFTs[3].NFT.imageUrl}`} width="2.4" height="3" event-set__show={`_event: mouseenter; _target: #nft${nfts.RoomNFTs[3].id}_info; visible: true`}
              event-set__hide={`_event: mouseleave; _target: #nft${nfts.RoomNFTs[3].id}_info; visible: false`}></a-plane>
            <a-plane id={`nft${nfts.RoomNFTs[3].id}_info`} width="2.4" height="3" opacity='0.5' color='black'
              position="0 0 -0.04" rotation="0 180 0" visible='true' >
              <a-text
                value="test"
                color="black"
                position="-0.7 0.9 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.title ? 'by ' + nfts[0]?.RoomNFTs[0].Room.Artist.name : null}
                color="white"
                position="-0.7 0.7 0.1"
                scale="0.5 0.5 0.5"
              ></a-text>
              <a-text
                value={nfts[0]?.description?.slice(0, 70)}
                color="white"
                position="-0.7 0.5 0.1"
                scale="0.3 0.3 0.3"
              ></a-text>
            </a-plane>
          </a-box>
          <a-plane position="-4 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[4].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="4 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[5].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-cylinder position="6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-6 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-light type="ambient" color="white" position="0 1 1" intensity="0.08"></a-light>
        </a-box>

        <a-box position="5 2.5 0" width="5" height="4" depth="0.1" rotation="0 -135 0">
          <a-plane position="0 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[6].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="0 0 -0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[7].NFT.imageUrl}`} rotation="0 180 0" width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>

        <a-box src="" position="-5 2.5 0" width="5" height="4" depth="0.1" rotation="0 -135 0">
          <a-plane position="0 0 0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[8].NFT.imageUrl}`} width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-plane position="0 0 -0.1" src={`http://localhost:8080/${nfts?.RoomNFTs[9].NFT.imageUrl}`} rotation="0 180 0" width="2.4" height="3" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
            animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"></a-plane>
          <a-cylinder position="2 -2 0" color="black" radius="0.04"></a-cylinder>
          <a-cylinder position="-2 -2 0" color="black" radius="0.04"></a-cylinder>
        </a-box>


      </a-entity>


    </>
  )
}