import { MenuItem, Select, Typography } from "@mui/material";
import { Info } from "./Info";

import Styled from "./Footer.styled";
import { CountryFlagIcon } from "../../assets";

const { Container } = Styled;

export const Footer = () => {
  return (
    <Container>
      <Info />

      <div>
        <Select
          labelId="select-label"
          id="select"
          // value={age}
          // onChange={handleChange}
          sx={{
            background: "#ffffff10",
            minWidth: 289,
            borderRadius: "8px",
            color: "#BABABA",
          }}
        >
          <MenuItem value={10} sx={{ display: "flex", gap: "8px" }}>
            <CountryFlagIcon country="tk" />
            <Typography>Turkish</Typography>
          </MenuItem>
        </Select>
      </div>
    </Container>
  );
};
