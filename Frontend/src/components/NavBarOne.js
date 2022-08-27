import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function NavBarOne() {
  const [language, setLanguage] = React.useState("");
  const [currency, setcurrency] = React.useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleCurrency = (event) => {
    setcurrency(event.target.value);
  };

  return (
    <div>
      <nav class="navBarOne navbar  ">
        <div class="container">
          <div className="language">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={language}
                onChange={handleChange}
                label="Language"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"French"}>French</MenuItem>
                <MenuItem value={"Spanish"}>Spanish</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div class="vertical"></div>

          <div className="currencyName">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Currency
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currency}
                onChange={handleCurrency}
                label="Currency"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"GBP"}>GBP</MenuItem>
                <MenuItem value={"ISO"}>ISO</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="verticalCur"></div>

          <span className="call text-muted">Call Us 3965410</span>
          <span>
            Free delivery on order over <span className="orderPrice">$200</span>{" "}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBarOne;
