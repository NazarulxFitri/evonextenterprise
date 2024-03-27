import { Box } from "@mui/material";

interface CardProps {
  icon: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "1px 1px 10px #EFEFEF",
        p: 4,
        textAlign: "center",
        "&:hover": {
          boxShadow: "1px 1px 10px #5b93fb",
          color: "#5b93fb",
        },
      }}
    >
      <Box>{icon}</Box>
      <Box>{title}</Box>
    </Box>
  );
};

export default Card;
