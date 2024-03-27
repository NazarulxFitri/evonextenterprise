import { Typography } from "@mui/material";
import { Montserrat } from "next/font/google";

interface TextProps {
  text: string;
  weight?: "300" | "500" | "700";
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const Text: React.FC<TextProps> = ({ text, weight }) => {
  return (
    <Typography
      sx={{
        fontSize: "16px",
        fontFamily: `${montserrat.style.fontFamily} !important`,
        fontWeight: weight
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Text;
