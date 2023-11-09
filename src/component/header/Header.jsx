import ProfilMenu from "../../ProfilMenu";
import "./Header.scss"

function Header() {
    return (
      <main className="button_header">
        <h1>La piscine</h1>
        <ul className="iteam_header">
            <li>web developer</li>
            <li>software desiger</li>
            <ProfilMenu />
        </ul>
      </main>
    );
  }
  
  export default Header;