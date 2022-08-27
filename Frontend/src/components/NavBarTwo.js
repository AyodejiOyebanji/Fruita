import React from "react";
import Logo from "../Image/suntwist.png";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IoSearchOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

function NavBarTwo() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <BsPeople /> : <GiSelfLove />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <BsPeople /> : <GiSelfLove />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src={Logo} alt="" srcset="" className="logo" />
          
          <BsPeople size="20px" className="bsPeoplesmall" />
          {/* cart for small phone */}
          <Link to="/cart">
            <FaOpencart size="20px" className="bsPeoplesmall" />
          </Link>
          {/* cart for small phone ends */}

          {/* toogle */}
          <div className="toogle">
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <AiOutlineMenu size="20px" />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          {/* toogle ends */}

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
              <li class="nav-item"></li>
              <li class="nav-item dropdown">
                <FormControl sx={{ m: 1, width: 150 }}>
                  <Select
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>All Category</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>All Category</em>
                    </MenuItem>
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </li>
              <li class="nav-item">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "60ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    className="outlined-basic "
                    label="Search Product"
                    variant="outlined"
                  />
                </Box>
              </li>
              <li class="nav-item">
                <Stack spacing={2} direction="row">
                  <Button variant="outlined" className="search">
                    {" "}
                    <IoSearchOutline />
                  </Button>
                </Stack>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsPeople size="30px" className="bsPeopleBig" />
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                   <Link to="/customeraccount"> <button class="  dropdown-item" type="button">
                        My Account
                      </button></Link>   
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Login
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Signup
                      </button>
                    </li>
                  </ul>
                </div>

                {/* < BsPeople size="30px" xclassName='bsPeopleBig'/>  */}
              </li>
              <li class="nav-item">
                <GiSelfLove size="30px" className="bsPeopleBig" />
              </li>

              {/* cart for big Screen  */}
              <li class="nav-item">
                <Link to="/cart">
                  <FaOpencart size="30px" className="bsPeopleBig" />
                </Link>
                {/* cart for big screen ends */}
              </li>
            </ul>

            <form class="d-flex">
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarTwo;
