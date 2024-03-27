import { Typography } from "@mui/material";
import { Montserrat } from "next/font/google";

interface TitleProps {
  text: string;
  weight?: "300" | "500" | "700";
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const Title: React.FC<TitleProps> = ({ text, weight }) => {
  return (
    <Typography
      sx={{
        fontSize: "24px",
        fontFamily: `${montserrat.style.fontFamily} !important`,
        fontWeight: weight
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Title;
