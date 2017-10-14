import { Component, State } from '@stencil/core';


@Component({
	  tag: 'vif-score',
	  styleUrl: 'vif-score.scss'
})
export class VifScore {

	@State() scores: Array<any> = [];
	db: any;
	constructor(){
		// Using firebase as global on window because : https://github.com/ionic-team/stencil/issues/98
		this.db = window['firebase'].firestore();
	}

	componentWillLoad(){
		console.log('componentWillLoad');
		this.db
			.collection('scores')
			.orderBy('score', 'desc')
			.limit(3)
			.onSnapshot((snapshot) => {
				this.scores = snapshot.docs.map(doc => doc.data())
			});
	}

	render() {
		return [
			<div class="aside">
				<div class="separator"></div>
				<div class="scores">
					{this.scores.map(s => 
						<div class="bubble">
							<div>
								{s.player}
							</div>
							<div class="score">{s.score}</div>
						</div>)}
				</div>
			</div>,
			<img src="/assets/read_the_rules.png" width="450" height="450" alt=""/>
		];
	}
}
