import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ArtSection />
    </div>
  )
}

const ArtSection = () => {
  return (
    <div className="art-section">
      <ArtPieceDetails />
      <ArtPieceShowcase />
    </div>
  );
}

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        ARCHIPELAGO
      </div>
      <label></label>
      <input
        className="search"
        placeholder="🔍 Collection, artist, item, address..."
      />
      <div>🍔 =</div>
    </div>
  );
}

const ArtPieceShowcase = () => {
  return (
    <div className="art-piece-showcase">
      <Image src="/000887.png" alt="some cool dopamine trip" height={"1100"} width={"900"} />
    </div>)
}

const BidInfo = () => {
  return (
    <div className="bid-info">
      <div className="price-info">
        <small>
          PRICE
        </small>
        <h1>Ξ 95</h1>
        <p>
          Expires in 4d
        </p>
        <button>
          Purchase
        </button>
      </div>

      <div className="highest-bid-info">
        <small>
          HIGH BID
        </small>
        <h1>Ξ 0.003</h1>
        <p>
          Expires in 4d
        </p>
        <button>
          Place bid
        </button>
      </div>
    </div>
  );
}


const ExpandableTitle = ({ title, contentComponent }) => {
  const [show,setShow] = useState(true)
  return (
    <div className={show ? "section":"section-hidden"}>
      <div className="section-title">
        {title}
        <div className="round-button" onClick={()=>{setShow(!show)}}>
          { show ? "🌼": "🌸" }
        </div>
      </div>
      {contentComponent}
    </div>
  );
}

const FeaturesTable = () => {
  const defaultFeatures = {
    "Collision Check": "No Overlap",
    "Colors": "Golf Socks",
    "Density": "High",
    "Have Margin": "No",
    "Outlined": "No",
    "Scale": "Jumbo",
    "Shape Angles": "Curved",
    "Soft Shapes": "No",
    "Spiral": "No",
    "Super Blocks": "No",
    "Turbulence": "High",
  }

  let featureTableRows = Object.entries(defaultFeatures).map(([title, value]) => {
    return (
      <tr key={title}>
        <td className="feature-name">{title}</td>
        <td>{value}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
          {featureTableRows}
      </tbody>
    </table>
  );
}
const ArtPieceDetails = () => {
  return (
    <div className="art-piece-details">
      <h1 className="piece-id">#887</h1>
      <a href="https://archipelago.art/collections/fidenza" className="collection-creator">Fidenza</a>
      <h3 className="creator-name">Tyler Hobbs</h3>

      <BidInfo />

      <ExpandableTitle title={"DESCRIPTION"}
        contentComponent={
          <p className="description">
            Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of scale, organization, texture, and color usage it can employ create a wide array of generative possibilities.
          </p>
        } />

      <ExpandableTitle title={"FEATURES"}
        contentComponent={
          <FeaturesTable />
        } />


      <ExpandableTitle title={"RARITY"}
        contentComponent={
          <a href="https://artacle.io/project/fidenza/token/78000887">Artacle LogoTied for #771 of 999</a>
        } />

      

      HISTORY

      OWNER

      0x74F...d97 →
      Generator →



    </div>);
}
