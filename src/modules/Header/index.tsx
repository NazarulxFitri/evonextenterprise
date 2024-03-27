import { Text } from "@/components";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const HeaderModule: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "unset", md: "flex" },
        textAlign: { xs: "center", md: "unset" },
        px: { xs: 2, md: 8 },
        py: 2,
      }}
    >
      <Box sx={{ m: { xs: "auto", md: "unset" } }}>
        <Image
          alt="Evo Next Enterprise Logo"
          width={100}
          height={120}
          src={`/assets/logo.png`}
        />
      </Box>

      {/* For Mobile */}
      <Grid
        container
        sx={{ display: { xs: "block", md: "none" }, ml: "auto", mt: 2 }}
      >
        <Grid
          item
          sx={{
            py: 1,
            "&:hover": {
              color: "#5b93fb",
              cursor: "pointer",
            },
          }}
        >
          <Text text="About Us" />
        </Grid>
        <Grid
          item
          sx={{
            py: 1,
            "&:hover": {
              color: "#5b93fb",
              cursor: "pointer",
            },
          }}
        >
          <Text text="Our Services" />
        </Grid>
        <Grid
          item
          sx={{
            py: 1,
            "&:hover": {
              color: "#5b93fb",
              cursor: "pointer",
            },
          }}
        >
          <Text text="Contact Us" />
        </Grid>
      </Grid>

      {/* For desktop */}
      <Box
        sx={{ display: { xs: "none", md: "flex" }, ml: "auto", my: "auto" }}
        gap={2}
      >
        <Box
          sx={{
            "&:hover": {
              color: "#5b93fb",
              cursor: "pointer",
            },
          }}
        >
          <Text text="About Us" />
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: "#5b93fb",
              cursor: "pointer",
            },
          }}
        >
          <Text text="Our Services" />
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: "#5b93fb",
              cursor: "pointer",
            },
          }}
        >
          <Text text="Contact Us" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderModule;
