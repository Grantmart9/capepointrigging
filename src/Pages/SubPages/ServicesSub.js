import { Size } from "../../components/Display/media-query";
import { Fade } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { AppFont, layoutbgcolor } from "components/Display/feutures";
// Images //
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I7.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";

export const ServicesSub = () => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD","L"].includes(size);

  const ServiceList = [
    {
      service: "Stepping and unstepping of rigs",
      image: I1,
      text: "Trust Cape Point Rigging for a seamless and stress-free stepping and unstepping of rigs. Our team of experts has the experience and knowledge to safely remove or install the mast…",
    },
    {
      service: "Installing and uninstalling furling systems",
      image: I2,
      text: "At Cape Point Rigging, we offer professional installation and uninstallation of furling systems for your sailboat. Our team is equipped with the necessary tools and expertise to ensure that your…",
    },
    {
      service: "Custom rope work",
      image: I3,
      text: "Cape Point Rigging is your go-to for custom rope work solutions. Our skilled team can create custom rope products to meet your specific needs, from spliced dock lines to halyards…",
    },
    {
      service: "Rig Checking",
      image: I4,
      text: "Ensure your vessel's safety with a thorough rig check by Cape Point Rigging. Our experts will carefully inspect all the components of your rig, identify potential issues, and provide recommendations…",
    },
    {
      service: "Standing and Running Rigging",
      image: I5,
      text: "Keep your sailboat in top condition with Cape Point Rigging's standing and running rigging services. From repair to replacement, our experienced team can handle all your rigging needs.",
    },
    {
      service: "Rig Tuning",
      image: I6,
      text: "Wire rigging stretches and boats age and relax with time! If you have not tuned your rig in the last five years, chances are that there has been some stretch…",
    },
    {
      service: "Rig and furler services",
      image: I7,
      text: "Cape Point Rigging offers comprehensive rig and furler services to keep your vessel operating smoothly. From routine maintenance to complex repairs, our team has the skills and expertise to handle…",
    },
    {
      service: "Rig and furler repairs",
      image: I8,
      text: "At Cape Point Rigging, we understand the importance of a well-maintained rig and furler system. Our team can quickly diagnose and repair any issues, ensuring your vessel is ready for…",
    },
  ];
  return (
    <Fade in={true} timeout={1800}>
      <div style={{ backgroundColor: "black",paddingLeft:"15pt",paddingRight:"15pt"}}>
        <div
          style={{ color: "white" }}
          className="text-2xl font-bold text-center justify-center pt-5 pb-5"
        >
          Services
        </div>
        <div
          className={`grid grid-${
            isResponsiveSize ? "rows-1" : "cols-3"
          } gap-2`}
        >
          {ServiceList.map((service, i) => (
            <Card key={i}>
              <img src={service.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.service}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {service.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Fade>
  );
};
