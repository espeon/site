import Link from "next/link";
import useSWR from "swr";
import NowPlaying from "../components/NowPlaying";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faSpotify,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles(theme => ({
  root: {
    "& hr": {
      margin: theme.spacing(0, 5)
    }
  },
  icon: {
    margin: theme.spacing(2)
  },
  audius: {
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.75)
  }
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      className={classes.root}
    >
      <Grid container justify="center" alignItems="center">
        <Typography variant="h1" color="initial" align="center">
          Emma L.
        </Typography>
        <Divider orientation="vertical" flexItem />
        <div>
          <NowPlaying />
        </div>
      </Grid>
      <Typography
        variant="h5"
        color="initial"
        align="center"
        style={{ paddingTop: "20px" }}
      >
        i do stuff with rust and js and some other things.
      </Typography>
      <Grid container justify="center" alignItems="center">
        <MuiLink color="inherit" href="https://github.com/notkanbaru">
          <FontAwesomeIcon icon={faGithub} size="2x" className={classes.icon} />
        </MuiLink>
        <MuiLink
          color="inherit"
          href="https://open.spotify.com/user/e6u90juw2fdu50glerxrj90j6"
        >
          <FontAwesomeIcon
            icon={faSpotify}
            size="2x"
            className={classes.icon}
          />
        </MuiLink>
        <MuiLink color="inherit" href="https://audius.co/kanbaru">
          <img
            height={25}
            className={classes.audius}
            src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MzEgNDYwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MzEgNDYwIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojMjAyMDIwO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MTguMyA0NjMuOGM5LjcgMCAxNS44LTEwLjUgMTEtMTlsLTEyNi40LTIxOS4yLTEyNi40LTIxOS4zYy00LjktOC40LTE3LTguNC0yMS45IDBsLTEyNi43IDIxOS4xLTUxLjggODkuNWMtNC45IDguNCAxLjIgMTkgMTAuOSAxOWw5Ny44LjFjNC41IDAgOC43LTIuNCAxMS02LjNsNTguNi0xMDEuM2M0LjktOC40IDE3LjEtOC40IDIxLjkgMGw2Mi41IDEwOC40YzQuOSA4LjQtMS4yIDE5LTExIDE5bC0xMTUtLjFjLTQuNSAwLTguNyAyLjQtMTEgNi4zbC00OC45IDg0LjdjLTQuOSA4LjQgMS4yIDE5IDEwLjkgMTlsMTAxLjQuMWgyNTMuMXoiLz48L3N2Zz4="
          />
        </MuiLink>
        <MuiLink color="inherit" href="https://twitter.com/notkanbaru">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className={classes.icon}
          />
        </MuiLink>
        <MuiLink color="inherit" href="https://instagram.com/notkanbaru">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className={classes.icon}
          />
        </MuiLink>
      </Grid>
    </Grid>
  );
}
