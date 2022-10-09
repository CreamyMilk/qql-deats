import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="art-section">
        <ArtPieceDetails />
        <ArtPieceShowcase />
      </div>
    </div>
  )
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
      <Image src="https://static.archipelago.art/tokens/orig/artblocks/78/000887" alt="some cool dopamine trip" height={"1100"} width={"1000"} />
    </div>)
}

const ArtPieceDetails = () => {
  return (
  <div className="art-piece-details">
    <ul>
      <li>Hello world</li>
    </ul>
  </div>);
}
