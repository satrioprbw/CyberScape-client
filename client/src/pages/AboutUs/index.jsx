import styles from "./aboutus.module.css";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function AboutUs() {
  return (
    <>
      <GalaxyBackground>
        <div className={styles.bannerWrapper}>
          <h1 className="text-blue-400">About Us</h1>
          <div className={styles.banner}>
            <div className={styles.container}>
              <div>
                <p className="text-purple-300">
                  Welcome to CyberScape! Our mission is to provide a platform
                  for artists to showcase and sell their non-fungible tokens
                  (NFTs) and for collectors to discover and invest in unique
                  digital assets. Our team is made up of art enthusiasts and
                  tech experts who are passionate about the potential of NFTs to
                  revolutionize the way we create, distribute, and own art. We
                  believe that NFTs represent a powerful new tool for artists to
                  reach a global audience and monetize their work in a way that
                  was not possible before.
                </p>
                <br />
                <p className="text-purple-300">
                  Our NFT gallery features a curated selection of NFTs from some
                  of the most talented and innovative artists working today.
                  Each NFT is unique and one-of-a-kind, stored on a secure
                  blockchain and authenticated by our team of experts. Whether
                  you're an established collector or a newcomer to the world of
                  NFTs, we invite you to explore our gallery and discover the
                  exciting world of NFTs. We offer a range of resources and
                  information for artists and collectors, including tips on how
                  to evaluate and purchase NFTs, and insights on the latest
                  market trends.
                </p>
                <br />
                <p className="text-purple-300">
                  Thank you for visiting CyberScape NFT gallery and supporting
                  the artists who make it possible. We hope our platform will
                  inspire you to explore the possibilities of NFTs and engage
                  with the vibrant NFT community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bannerWrapper}>
          <h1 className="text-blue-400">Price</h1>
          <div className={styles.banner}>
            <div className={styles.container}>
              <div className="text-purple-300">
                Rp. 100.000 / Credit
              </div>
            </div>
          </div>
        </div>
      </GalaxyBackground>
    </>
  );
}
