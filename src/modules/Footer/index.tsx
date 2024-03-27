import { InstagramIcon, Text, TiktokIcon, YoutubeIcon } from "@/components";
import { Box, Grid } from "@mui/material";

const FooterModule: React.FC = () => {
  return (
    <Box
      sx={{
        bottom: "0",
        mt: 4,
        position: "static",
        width: "100%",
      }}
    >
      <Box
        sx={{ boxShadow: "1px 1px 10px #b8ccfc", textAlign: "center", py: 4 }}
      >
        <Text text="Follow us on our media socials" />

        <InstagramIcon size="24" />

        <TiktokIcon size="24" />

        <YoutubeIcon size="24" />
      </Box>
      <Box
        sx={{
          background: "#b8ccfc",
          textAlign: "center",
          color: "#F0F0F0",
          p: 2,
        }}
      >
        <Text text="Copyright © 2024 Evo Next Enterprise . All rights reserved" />
      </Box>
    </Box>
  );
};

export default FooterModule;
