import useSWR from "swr";

import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function NowPlaying() {
  const { data, error } = useSWR("/api/lastfm", fetcher, {
    refreshInterval: 60000
  });

  const artist = data && data.recenttracks.track[0].artist["#text"];
  let musictitle = data && data.recenttracks.track[0].name;

  if (!data) musictitle = "Loading...";
  if (error) musictitle = "";

  return (
    <div>
      <Typography variant="h5" color="textSecondary" align="left">
        {data && data.recenttracks.track[0]["@attr"]
          ? "what i'm listening to:"
          : "my last played song:"}
      </Typography>
      <div className="title">
        <MuiLink color="inherit" href={data && data.recenttracks.track[0].url}>
          {musictitle.toLowerCase()}
        </MuiLink>
      </div>
      {artist && (
        <Typography variant="h5" color="textSecondary" align="left">
          by <MuiLink color="inherit" href={data && data.recenttracks.track[0].url.split("_")[0]}>{artist.toLowerCase()}</MuiLink>
        </Typography>
      )}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;600&display=swap");
        .title {
          color: #000;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
}
