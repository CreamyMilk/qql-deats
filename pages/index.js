import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fidenza #887 by Tyler Hobbs | Archipelago</title>
        <meta property="og:title" content="Fidenza #887 by 🍦 Creamy Milk"/>
        <meta property="og:image" content="/000887.png"/>
        <meta property="og:description" content="Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of scale, organization, texture, and color usage it can employ create a wide array of generative possibilities."/>
        <meta name="description" content="Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of scale, organization, texture, and color usage it can employ create a wide array of generative possibilities."/>
      </Head>
      <NavBar />
      <ArtSection />
    </div>
  )
}

const ArtSection = () => {
  const isDesktopResolution = useMatchMedia('(min-width:992px)', true)
  return (
    <div className="art-section">
      <ArtPieceDetails />
      {isDesktopResolution ? <ArtPieceShowcase toggleClassName="mobile-image" /> : null}
    </div>
  );
}

const NavBar = () => {
  const isDesktopResolution = useMatchMedia('(min-width:992px)', true)
  return (
    <div className="nav-bar">
      {isDesktopResolution ?
        <div>
          ARCHIPELAGO
        </div> : undefined}
      <input
        className="search"
        placeholder="🔍 Collection, artist, item, address..."
      />

      {isDesktopResolution ?
        <div>
          🍔 =</div> : undefined}
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
  const [show, setShow] = useState(true)
  return (
    <div className={show ? "section" : "section-hidden"}>
      <div className="section-title">
        {title}
        <div className="round-button" onClick={() => { setShow(!show) }}>
          <div className="icon">{show ? "🌼" : "🌸"} </div>
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

const PieceHistory = () => {
  const defaultHistory = [
    { type: "🚀 Sent to", address: "0xf88b90afFD941829f2B55F4A5cF02d2C2B2c96B2", date: "2022-02-20" },
    { type: "🚀 Sent to", address: "metamix.eth", date: "2021-06-13" },
    { type: "🍃 Minted by", address: "0x8FaB48C8D864bFA82B042A3936BF14D460Db8be6", date: "2021-06-11" },
  ]

  const addDotsForLongAddr = (longAddr) => {
    let len = longAddr.length
    if (len < 20) {
      return longAddr;
    }
    return longAddr.slice(0, 6) + "..." + longAddr.slice(len - 4, len)
  }


  let historyTableRows = defaultHistory.map(({ type, address, date }) => {
    return (
      <tr key={date}>
        <td className="history-type">{type}</td>
        <td className="history-address">{addDotsForLongAddr(address)}</td>
        <td className="history-date">{date}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
        {historyTableRows}
      </tbody>
    </table>
  );
}

const ArtPieceDetails = () => {
  const isDesktopResolution = useMatchMedia('(min-width:992px)', true)

  return (
    <div className="art-piece-details">
      <h1 className="piece-id">#887</h1>
      <a href="https://archipelago.art/collections/fidenza" className="collection-creator">Fidenza</a>
      <h3 className="creator-name">Tyler Hobbs</h3>



      {!isDesktopResolution ? <ArtPieceShowcase toggleClassName="mobile-image" /> : null}

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
          <a href="https://artacle.io/project/fidenza/token/78000887">Tied for #771 of 999</a>
        } />

      <ExpandableTitle title={"History"}
        contentComponent={
          <PieceHistory />
        } />



      <ExpandableTitle title={"OWNER"}
        contentComponent={
          <a href="">
            0x74F...d97 →
          </a>
        } />


      <div className="extra-info-buttons">
        <button>
          Generator →
        </button>


        <button>
          OpenSea →
        </button>
      </div>

      <p>
          Made by <a href="https://github.com/CreamyMilk/qql-deats">@CreamyMilk 🍦 here</a>
      </p>


    </div>);
}


// some random way to know if the site is on desktop
// https://stackoverflow.com/questions/67266495/how-can-i-hide-a-component-in-react-depending-on-the-screen-size

const useMatchMedia = (mediaQuery, initialValue) => {
  const [isMatching, setIsMatching] = useState(initialValue)
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery)
    setIsMatching(watcher.matches)
    const listener = (matches) => {
      setIsMatching(matches.matches)
    }
    
    if (watcher.addEventListener) {
      watcher.addEventListener('change', listener)
    }

    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener('change', listener)
      }
    }
  }, [mediaQuery])

  return isMatching
}
