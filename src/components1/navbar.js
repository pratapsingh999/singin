import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MenuIcon from "@mui/icons-material/Menu";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
// import { NavLink} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import Image1 from "../Assets/image/image1.png";
import Image2 from "../Assets/image/image2.png";
import Image3 from "../Assets/image/image3.png";
import Image4 from "../Assets/image/image4.png";
// import Image5 from "../Assets/image/image5.png";
import "./navbar.css";
import { useState } from "react";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  //   const navigate = useNavigate();

  const[Value , setvalue] = useState();
  console.log(Value);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        {/* <Toolbar> */}
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                  <Typography variant="h6" noWrap component="div">
                    Miton.
                  </Typography>
                </IconButton>

                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }} 
                    Onchange={(e)=>setvalue(e.target.Value)}
                    value={Value}
                    />
                    
                </Search>
        

                <Tooltip title="Open settings" >
                    <IconButton>
                    <h6 className="names"> pratap singh</h6>
                    <Avatar
                        textAlign="center"
                        alt="Remy Sharp"
                        // image={Image5}
                        src="../Assets/image/image5.png"
                    />
                    </IconButton>
                </Tooltip>
              </Toolbar>
            </AppBar>
          </Box>

          
        {/* </Toolbar> */}
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <H1>Miton</H1> */}
        <Typography variant="h6" className="text" noWrap component="div">
          <h1> Miton.</h1>
        </Typography>
        <Toolbar />

        <Divider />
        <List>
          {["Dashbord"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        {/* <List>
          {['History', 'Schedule', 'Explore'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              <NavLink className="navbarlink"  to="/history">History</NavLink>
            </ListItem>
          ))}
        </List> */}

        {/* <List>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => navigate('/message')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                  }}
                >
                  <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary="dashbord"/>
              </ListItemButton>
            </ListItem>
          </List>  */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <h1>Analytics Overview</h1>
        {/* <Typography paragraph> */}
        <Stack direction="row" spacing={7}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                alt="green iguana"
                image={Image1}
                //   width={2000 + "px"}
                // width={"50"}
                // image={require('Assets/image/image1.png')}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  textAlign="center"
                  component="div"
                >
                  <h1> 28.7k </h1>
                </Typography>
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  <h3>Total followers</h3>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                //   width={2000 + "px"}
                image={Image2}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  <h1> 8.1k </h1>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  <h3>impressions</h3>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* </Typography> */}

          {/* <Typography paragraph> */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                //   width={200 + "px"}
                image={Image3}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  textAlign="center"
                  component="div"
                >
                  <h1> 1.7k </h1>
                </Typography>
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  <h3>Total Engagement</h3>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                //   width={200 + "px"}
                image={Image4}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  <h1> 1k </h1>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  <h3>Conversion Rata</h3>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        {/* </Typography>  */}
      </Box>
    </Box>
  );
}
