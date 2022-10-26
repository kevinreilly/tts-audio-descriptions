const speechSynth = window.speechSynthesis;
const video = document.getElementsByTagName('video')[0];
const track = video.textTracks[0];
track.addEventListener('cuechange', () => {
	if (track.activeCues.length) {
		let text = track.activeCues[0].text;
		let utterance = new SpeechSynthesisUtterance(text);
		speechSynth.speak(utterance);
		utterance.addEventListener('end', () => {
			video.play();
		});
	} else if (speechSynth.speaking) {
		video.pause();
	}
});
