import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import classNames from "classnames";

import chock from "../../../assets/chocobo.gif";
import { paths } from "../../../router";
import "./navbar.scss";

function Navbar() {
  const history = useHistory();
  const lastActiveTab = parseInt(localStorage.getItem("lastActive"));
  const [activeTab, setActiveTab] = useState(lastActiveTab || 0);

  console.log(history.location.pathname);
  useEffect(() => {
    setActiveTab(
      paths.findIndex((path) => path.path === history.location.pathname)
    );
  }, [history.location]);

  return (
    <div className="navbar">
      <div className="top">
        <img src={chock} alt="chocobo running" />
        <div className="name">Kenneth L.</div>
        <img src={chock} alt="chocobo running" />
      </div>
      <div className="bottom">
        {paths.map((path, index) => {
          return (
            <Link to={path.path} key={`tab-${index}`}>
              <div
                className={classNames("tabs", { active: activeTab === index })}
                onClick={() => setActiveTab(index)}
              >
                {path.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       projects: true,
//       about: false,
//       contact: false,
//     };
//   }

//   handleClick(tab) {
//     this.props.handleClick(tab);

//     if (tab === "projects") {
//       this.setState({
//         projects: true,
//         about: false,
//         contact: false,
//       });
//     } else if (tab === "about") {
//       this.setState({
//         projects: false,
//         about: true,
//         contact: false,
//       });
//     } else {
//       this.setState({
//         projects: false,
//         about: false,
//         contact: true,
//       });
//     }
//   }

//   render() {
//     let text;
//     if (this.state.projects === true) {
//       text = "My Projects";
//     } else if (this.state.about === true) {
//       text = "About Me";
//     } else {
//       text = "Contact Me";
//     }

//     return (
//       <navbar className="navbar">
//         <div className="navbar-items">
//           <div
//             className={
//               "navbar-tabs" + (this.state.projects ? " active-tab" : "")
//             }
//             onClick={() => this.handleClick("projects")}
//           >
//             Projects
//           </div>
//           <div
//             className={"navbar-tabs" + (this.state.about ? " active-tab" : "")}
//             onClick={() => this.handleClick("about")}
//           >
//             About Me
//           </div>
//           <div
//             className={
//               "navbar-tabs" + (this.state.contact ? " active-tab" : "")
//             }
//             onClick={() => this.handleClick("contact")}
//           >
//             Contact
//           </div>
//         </div>
//       </navbar>
//       // <div className={classes.root}>
//       //     <AppBar
//       //         color="inherit"
//       //         position="fixed"
//       //         className={clsx(classes.appBar, {
//       //             [classes.appBarShift]: this.state.drawer
//       //         })}>
//       //         <Toolbar>
//       //             <IconButton
//       //                 className={clsx(classes.menuButton, {
//       //                     [classes.hide]: this.state.drawer
//       //                 })}
//       //                 color="inherit"
//       //                 aria-label="open drawer"
//       //                 onClick={() => this.handleDrawerOpen()}
//       //                 edge="start">
//       //                     <MenuIcon />
//       //             </IconButton>
//       //             <Typography variant="h6" noWrap>
//       //                 {text}
//       //             </Typography>
//       //         </Toolbar>
//       //     </AppBar>
//       //     <Drawer
//       //         className={classes.drawer}
//       //         variant="persistent"
//       //         anchor="left"
//       //         open={this.state.drawer}
//       //         classes={{
//       //             paper: classes.drawerPaper
//       //         }}>
//       //         <div className={classes.drawerHeader}>
//       //             <IconButton onClick={() => this.handleDrawerClose()}>
//       //                 <ChevronLeftIcon/>
//       //             </IconButton>
//       //         </div>
//       //         <Divider />
//       //         <List>
//       //             {["projects", "about", "contact"].map((tabs, index) => (
//       //                 <ListItem button key={tabs} onClick={() => this.handleClick(tabs)}>
//       //                     <ListItemText primary={tabs.charAt(0).toUpperCase() + tabs.slice(1)}/>
//       //                 </ListItem>
//       //             ))}
//       //         </List>
//       //     </Drawer>
//       // </div>
//     );
//   }
// }

export default Navbar;
