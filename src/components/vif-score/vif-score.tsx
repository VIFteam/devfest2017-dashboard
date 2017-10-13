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
			.limit(10)
			.onSnapshot((snapshot) => {
				this.scores = snapshot.docs.map(doc => doc.data())
			});
	}

	renderData(){
		return this.scores.map(s => <tr><td>{s.mail}</td><td>{s.score}</td></tr>);
	}

	render() {
		return (
			<table>
				{this.renderData()}
			</table>
		);
	}
}
