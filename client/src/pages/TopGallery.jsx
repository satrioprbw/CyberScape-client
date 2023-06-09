import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTopNFTs from "../actions/nftsCreators";
import { fetchUserAfterQuotaReduce } from "../actions/usersCreators";
const gateway_url = "http://localhost:8080/";
import GalaxyBackground from "../components/GalaxyBackground";

export default function TopGallery({}) {
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nfts);

  useEffect(() => {
    dispatch(getTopNFTs());
    dispatch(fetchUserAfterQuotaReduce());
  }, []);
  const top_positions = [
    "0 1.5 -4.9",
    "3 1.5 -4.9",
    "-3 1.5 -4.9",
    " -4.9 1.5 0",
    " -4.9 1.5 3",
    " -4.9 1.5 -3",
    " 4.9 1.5 0",
    "4.9 1.5 3",
    " 4.9 1.5 -3",
  ];
  const top_rotations = [
    "0 0 0",
    "0 0 0",
    "0 0 0",
    "0 90 0",
    "0 90 0",
    "0 90 0",
    "0 -90 0",
    "0 -90 0",
    "0 -90 0",
  ];
  return (
    <>
      <GalaxyBackground>
        <div
          style={{
            fontSize: "50px",
            paddingTop: "50px",
            textAlign: "center",
            fontFamily: "Orbitron",
            color: "rgb(96 165 250)",
          }}
        >
          Top Collection
        </div>
        <div
          style={{
            width: "fit",
            height: "480px",
            marginTop: "50px",
            marginBottom: "50px",
            marginRight: "200px",
            marginLeft: "200px",
          }}
        >
          <a-scene embedded>
            <a-assets>
              <a-asset-item
                id="my-model"
                src="/assets/3D-assets/gallery_minimalis/scene.gltf"
              ></a-asset-item>
              <img id="star1" src="/assets/pngwing.com (2).png" />
              <img id="heart1" src="/assets/heart-png-38780.png" />
            </a-assets>
            <a-camera
              position={`0 1.7 0`}
              rotation="0 -90 0"
              wasd-controls-enabled="true"
            >
              <a-entity
                position="0 0 -1"
                geometry="primitive: sphere; radius: 0.01"
                material="color: #000000; shader: flat; opacity: 0.5"
              ></a-entity>
            </a-camera>
            <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
            <a-light
              type="ambient"
              color="white"
              position="0 0 0"
              intensity="0.3"
            ></a-light>

            <a-gltf-model src="#my-model" position="0 0.2 0" scale="1 1 1">
              {nfts.map((el, i) => {
                if (i === 9) {
                  return null;
                }
                return (
                  <a-box
                    position={top_positions[i]}
                    rotation={top_rotations[i]}
                    color="black"
                    width="1.55"
                    height="2.05"
                    depth="0.05"
                    animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                    animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
                  >
                    <a-plane
                      id={`nft${i}`}
                      position="0 0 0.03"
                      src={gateway_url + nfts[i]?.imageUrl}
                      width="1.5"
                      height="2"
                      event-set__show={`_event: mouseenter; _target: #nft${i}_info; visible: true`}
                      event-set__hide={`_event: mouseleave; _target: #nft${i}_info; visible: false`}
                    ></a-plane>
                    <a-plane
                      id={`nft${i}_info`}
                      width="1.5"
                      height="2"
                      opacity="0.5"
                      color="black"
                      position="0 0 0.03"
                      visible="false"
                    >
                      <a-text
                        value={
                          nfts[i]?.title
                            ? nfts[i]?.title
                            : nfts[i].RoomNFTs[0].Room.Artist.name
                        }
                        color="white"
                        position="-0.7 0.9 0"
                        scale="0.5 0.5 0.5"
                      ></a-text>
                      <a-text
                        value={
                          nfts[i]?.title
                            ? "by " + nfts[i].RoomNFTs[0].Room.Artist.name
                            : null
                        }
                        color="white"
                        position="-0.7 0.7 0"
                        scale="0.5 0.5 0.5"
                      ></a-text>
                      <a-text
                        value={nfts[i]?.description?.slice(0, 70)}
                        color="white"
                        position="-0.7 0.5 0"
                        scale="0.3 0.3 0.3"
                      ></a-text>
                      <a-text
                        value={nfts[i]?.averageRating + "/5"}
                        color="white"
                        position="-0.45 -0.8 0"
                        scale="0.6 0.6 0.6"
                      ></a-text>
                      {/* <a-plane
                                            src="#heart1"
                                            onClick={() => favoriteNFT ? handleUnfavorite(currentNFT) : handleFavorite(currentNFT)}
                                            position="0.6 -0.8 0.02"
                                            width="0.2"
                                            height="0.2"
                                        /> */}
                      <a-plane
                        src="#star1"
                        onClick={() =>
                          favoriteNFT
                            ? handleUnfavorite(currentNFT)
                            : handleFavorite(currentNFT)
                        }
                        position="-0.6 -0.8 0.02"
                        width="0.2"
                        height="0.2"
                      />
                    </a-plane>
                  </a-box>
                );
              })}
            </a-gltf-model>
            <a-sky color="#222"></a-sky>
            <a-entity environment="preset: forest; dressingAmount: 0; seed: 300; playArea: 5"></a-entity>
          </a-scene>
        </div>
      </GalaxyBackground>
    </>
  );
}
