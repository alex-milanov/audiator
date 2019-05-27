'use strict';
// lib
const Rx = require('rx');
const $ = Rx.Observable;

const {obj} = require('iblokz-data');
const WaveSurfer = require('wavesurfer.js');
let TimelinePlugin = require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
let MinimapPlugin = require('wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js');

let unhook = () => {};

const hook = ({state$, actions}) => {
	let subs = [];

	subs.push(
		$.interval(500 /* ms */)
			.timeInterval()
			.map(() => document.querySelector('#waveform'))
			.distinctUntilChanged(el => el)
			.filter(el => el)
			.subscribe(el => {
				el.innerHTML = '';
				let wavesurfer = WaveSurfer.create({
					container: '#waveform',
					waveColor: 'lightgreen',
					mediaControls: true,
					backend: 'MediaElement'
				});

				wavesurfer.load('/assets/audio/synth-stab-1.wav');
			})
	);

	unhook = () => subs.forEach(sub => sub.unsubscribe());
};

module.exports = {
	unhook,
	hook
};
		// container: '#waveform',
