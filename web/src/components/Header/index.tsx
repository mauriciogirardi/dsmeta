import { ContainerHeader } from "./styles";
import logoSvg from "../../assets/logo.svg";

const linkedin = "https://www.linkedin.com/in/mauricio-girardi";

export const Header = () => {
  return (
    <ContainerHeader>
      <img src={logoSvg} alt="dsMeta" />
      <h1>DSMeta</h1>
      <span>
        Desenvolvido por{" "}
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          Mauricio Girardi
        </a>
      </span>
    </ContainerHeader>
  );
};
