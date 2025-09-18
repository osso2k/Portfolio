import dotenv from 'dotenv';
dotenv.config()
export async function getAccessToken() {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
    });

    const data = await response.json();
    return data.access_token;
}

export async function getPlaylistTracks(token, playlistId) {
    const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();
    return data.items;
}
export function playRandomSong(tracks) {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const track = tracks[randomIndex].track;
    window.open(track.external_urls.spotify, "_blank");
}
