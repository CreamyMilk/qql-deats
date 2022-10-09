export default function Home() {
  return (
    <div>
      <NavBar />
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