import { useState, useEffect } from "react";
import Player from "./components/Player/Player";

function App() {
	const [songs] = useState([
		{
			title: "Mario Theme Castle",
			artist: "Koji Kondo",
			src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
		},
		{
			title: "Mario Hurry!",
			artist: "Koji Kondo",
			src: "https://assets.breatheco.de/apis/sound/files//mario/songs/hurry-starman.mp3",
		},
		{
			title: "Mario Beginning Theme",
			artist: "Koji Kondo",
			src: "https://assets.breatheco.de/apis/sound/files//mario/songs/overworld.mp3",
		},
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(0);

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex]);

	return (
		<div className="App">
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

export default App;