import "./Clients.css";
import TZcontainer from "../../atoms/TZcontainer/TZcontainer";
import ClientCard from "../../atoms/clientCard/ClientCard";
//Import Client Logos
import tekkzenLogo from "../../../assets/clients/tekkzen.png";
import printpageLogo from "../../../assets/clients/printpageLogo.jpg";
import MotherBabyCareLogo from "../../../assets/clients/Mother&BabyCareLogo.png";
const Clients = (props) => {
  return (
    <TZcontainer>
      <div className="Clients">
        <h3>Our Client Partners</h3>
        <div className="Clients_cards">
          <ClientCard
            name={"Tekkzen"}
            image={tekkzenLogo}
            url={"https://tekkzen.com/"}
          />
          <ClientCard
            name={"Pritn Page"}
            image={printpageLogo}
            url={"https://printpage.lk/"}
          />
          <ClientCard
            name={"Mother & Baby Care"}
            image={MotherBabyCareLogo}
            url={"https://motherandbabycare.lk/"}
          />
          {/* duplicate the client card to add more clients */}
          <ClientCard
            name={"Tekkzen"}
            image={tekkzenLogo}
            url={"https://tekkzen.com/"}
          />
          <ClientCard
            name={"Pritn Page"}
            image={printpageLogo}
            url={"https://printpage.lk/"}
          />
          <ClientCard
            name={"Mother & Baby Care"}
            image={MotherBabyCareLogo}
            url={"https://motherandbabycare.lk/"}
          />
        </div>
      </div>
    </TZcontainer>
  );
};

export default Clients;
