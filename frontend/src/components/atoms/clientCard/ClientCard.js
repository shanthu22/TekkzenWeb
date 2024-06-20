import "./ClientCard.css";
// import logo from "../../../assets/clients/xxxlogo.png";

const ClientCard = ({ name, image, url }) => {
  return (
    <a
      className="ClientCard"
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      <img className="ClientCard_img" src={image} alt={name}></img>
    </a>
  );
};

export default ClientCard;
