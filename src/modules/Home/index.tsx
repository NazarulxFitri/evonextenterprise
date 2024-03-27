import {
  Card,
  CashIcon,
  CodeIcon,
  ComputerIcon,
  SubmitIcon,
  Text,
} from "@/components";
import Title from "@/components/Typography/Title";
import { Box, Button, Grid, TextField } from "@mui/material";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";

const HomeModule: React.FC = () => {
  const list = [
    {
      icon: <CodeIcon size="56px" />,
      title: "Web & Mobile App Development",
    },
    {
      icon: <CashIcon size="56px" />,
      title: "Finance Consultant",
    },
    {
      icon: <ComputerIcon size="56px" />,
      title: "IT Hardware Consultant & Support",
    },
  ];

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {list?.map((i) => (
          <Grid item xs={12} md={4}>
            <Card icon={i.icon} title={i.title} />
          </Grid>
        ))}
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={12} md={6}>
          <Image
            style={{ height: "100%", width: "100%" }}
            src={`/assets/web-dev.png`}
            alt="test"
            width={600}
            height={400}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "block", m: "auto", textAlign: "justify" }}
        >
          <Text text='Established in 2018. Since then, <span style="color: #5b93fb">Evo Next Enterprise</span> have already provide our services to help our clients to achieve their goals. We provides web & mobile application development, finance consultation and IT hardware consultation and support. In 2023, <span style="color: #5b93fb">Evo Next Enterprise</span> agreed to become partner with Pulpen Studio to widen our talent to support web and mobile app development' />
        </Grid>
      </Grid>

      <Grid container mt={4} sx={{ textAlign: "center" }}>
        <Grid item xs={12} md={6} my="auto">
          <Title text="Have any enquiries? Come, talk to us!" />
          <Grid container mt={2} spacing={1}>
            <Grid item xs={12} md={10}>
              <TextField
                placeholder="abc@gmail.com"
                sx={{ width: "100%" }}
                label="email"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={2} my="auto">
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/assets/discussion.gif"
            alt="Evo Next Enterprise"
            width={320}
            height={320}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeModule;
