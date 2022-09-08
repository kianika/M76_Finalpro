import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="http://localhost:3002/files/c06c31f11fdd44114819d01f87e5cb3e" />
      <BannerContent>
        <Typography variant="h6">Enjoy popular books</Typography>
        <BannerTitle variant="h2">
          New Book of the Week
        </BannerTitle>

        <BannerDescription variant="subtitle">
        Style your Mind and Enjoy your weekend by our new offered book from best authors in the world.
          
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}