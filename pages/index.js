import Image from "next/image";

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
  return (
    <div className="section">
      <div className="section-title">
        {title}
        <div className="round-button">
          🌼
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
      <div key={title}>
        <td className="feature-name">{title}</td>
        <td>{value}</td>
      </div>
    );

  });

  return (
    <table>
      <tbody>
        <tr>
          {featureTableRows}
        </tr>
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


      RARITY

      HISTORY

      OWNER

      0x74F...d97 →
      Generator →



    </div>);
}
