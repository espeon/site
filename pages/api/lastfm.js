export default (req, res) => {
    let url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.fm_user}&api_key=${process.env.fm_key}&length=1&format=json`
    return fetch(url)
      .then(res => res.json())
      .then(json => res.send(json) );
  };