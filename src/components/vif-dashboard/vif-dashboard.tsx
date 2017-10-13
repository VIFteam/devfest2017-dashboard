import { Component } from '@stencil/core';

@Component({
	tag: 'vif-dashboard',
	styleUrl: 'vif-dashboard.scss'
})
export class VifDashboard {
	render() {
		return (
			<div class="wrapper">
				<section class="container">
					<article>
						<vif-player></vif-player>
					</article>
					<aside>
						<vif-score></vif-score>
					</aside>
				</section>
				<footer>
					<vif-cards></vif-cards>
				</footer>
			</div>
		);
	}
}
