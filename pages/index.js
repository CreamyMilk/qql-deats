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
  return(
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


const RoundButton = () => {
  return(<>🌼</>);
}

const ArtPieceDetails = () => {
  return (
    <div className="art-piece-details">
      <h1 className="piece-id">#887</h1>
      <a href="https://archipelago.art/collections/fidenza" className="collection-creator">Fidenza</a>
      <h3 className="creator-name">Tyler Hobbs</h3>

      <BidInfo/>

      
      <div className="section-title">
        DESCRIPTION
        <RoundButton />
      </div>



      FEATURES

      RARITY

      HISTORY

      OWNER

      0x74F...d97 →
      Generator →



    </div>);
}
