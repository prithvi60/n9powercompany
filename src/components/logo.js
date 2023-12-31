import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo.png";
import logoWhite from "assets/images/logo-white.png";

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      {/* <Image src={white ? logoWhite.src : logo.src} alt="startup landing logo" /> */}
      <div>N9 Power Services</div>
    </Link>
  );
}
