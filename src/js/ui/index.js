'use strict';

// dom
const {
	h1, a, div,
	section, button, span,
	audio, source
} = require('iblokz-snabbdom-helpers');
// components
const counter = require('./counter');

module.exports = ({state, actions}) => section('#ui', [
	h1('Sampler'),
	div('#waveform', {
		style: {
			width: '400px'
		}
	})
	// audio(`[controls="true"]`, [
	// 	source(`[src="/assets/audio/synth-stab-1.wav"][type="audio/wav"]`)
	// ])
]);
