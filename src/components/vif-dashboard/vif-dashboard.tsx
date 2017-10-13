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
						<stencil-router id='router'>
							<stencil-route url={['/', '/dashboard']} component='vif-player' exact={true}>
							</stencil-route>
							<stencil-route url='/admin' component='vif-admin'>
							</stencil-route>
						</stencil-router>
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
