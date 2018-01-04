import { Component } from '@stencil/core';

@Component({
	  tag: 'vif-player',
	  styleUrl: 'vif-player.scss'
})
export class VifPlayer {
	render() {
		return (
			<video autoplay loop>
				<source src="/assets/VIF.mp4" type="video/mp4" />
			</video>
		);
	}
}
