import { Component, State } from '@stencil/core';

@Component({
	tag: 'vif-admin',
	styleUrl: 'vif-admin.scss'
})
export class VifAdmin {

	@State() mail: string = '';
	@State() player: string = '';
	@State() score: number = 0;
	db: any;

	constructor(){
		// Using firebase as global on window because : https://github.com/ionic-team/stencil/issues/98
		this.db = window['firebase'].firestore();
	}

	handleMail(e){
		this.mail = e.target.value;
	}

	handlePlayer(e){
		this.player = e.target.value;
	}

	handleScore(e){
		this.score = Number(e.target.value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.db.collection('scores-vif')
			.add({
				mail:this.mail,
				player: this.player,
				score: this.score
			})
			.then(()=> {
				console.log('saved');
				this.mail = '';
				this.score = 0;
				this.player = '';
			})
			.catch(()=>console.log('error'))
	}

	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<div class="form-group">
					<label htmlFor="mail">mail</label>
					<input type="email" name="mail" value={this.mail} onInput={(e) => this.handleMail(e)} />
				</div>
				<div class="form-group">
					<label htmlFor="player">pseudo/twitter</label>
					<input type="text" name="player" value={this.player} onInput={(e) => this.handlePlayer(e)} />
				</div>
				<div class="form-group">
					<label htmlFor="score">score</label>
					<input type="number" name="score" value={this.score} onInput={(e) => this.handleScore(e)} />
				</div>
				<input type="submit" value="save"></input>
			</form>
		);
	}
}
