import React from 'react';
import useSWR from "swr";

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Music() {
    const { data, error } = useSWR("/api/lastfm", fetcher, {
        refreshInterval: 30000
    });
    if (error) return null

    const artist = data && data.recenttracks.track[0].artist["#text"];
    const album = data && data.recenttracks.track[0].album["#text"];
    let musictitle = data && data.recenttracks.track[0].name;
    let cover = data && data.recenttracks.track[0].image[3]

    if (!data) { musictitle = null; }
    if (error) return (<></>);

    return (
        <>
            {musictitle == null ? <div className="h-24 align-text-bottom"></div> :
                <div className="bg-gray-300 dark:bg-gray-900 hover:bg-blue-200 dark-hover:bg-blue-900 shadow-2xl group rounded-lg p-2 w-auto fade-in relative transition duration-300 ease-in-out">
                    <div className="flex content-center">
                        <div className="absolute pl-1 pt-1 fade-in text-black dark:text-gray-100 transition duration-75 ease-in-out">
                            {data && data.recenttracks.track[0]["@attr"]
                                ? <ion-icon name="play-outline"></ion-icon>
                                : <ion-icon name="stop-outline"></ion-icon>}</div>
                        <img className="w-20 h-20 object-cover object-center rounded" src={cover["#text"]} height="10" alt="Album Pic" />
                        <div className="flex flex-col justify-center w-56 transition duration-75 ease-in-out">
                            <a href={data && data.recenttracks.track[0].url} className="pl-3 truncate transition duration-75 ease-in-out hover:text-blue-800 dark-hover:text-gray-500">{musictitle}</a>
                            <a href={data && data.recenttracks.track[0].url.split("_")[0]} className="pl-3 truncate transition duration-75 ease-in-out hover:text-blue-800 dark-hover:text-gray-500">by {artist ? artist : ""}</a>
                            <a href={data && data.recenttracks.track[0].url.split("_")[0] + album.replace(/\s/g, "+")} className="pl-3 truncate transition duration-75 ease-in-out hover:text-blue-800 dark-hover:text-gray-500">on {album ? album : ""}</a>
                        </div>
                    </div>

                </div>
            }
        </>
    );
}