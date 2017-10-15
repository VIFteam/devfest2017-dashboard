import { Component } from '@stencil/core';

const cards: Array<string> = [
	'assets/cards/Avengers/ant_man.jpg',
	'assets/cards/Avengers/black_widow.jpg',
	'assets/cards/Avengers/captain_america.jpg',
	'assets/cards/Avengers/hawkeye.jpg',
	'assets/cards/Avengers/hulk.jpg',
	'assets/cards/Avengers/iron_man.jpg',
	'assets/cards/Avengers/spiderman.jpg',
	'assets/cards/Avengers/thor.jpg',
	'assets/cards/Avengers/vision.jpg',
	'assets/cards/Gardiens_Galaxie/drax.jpg',
	'assets/cards/Gardiens_Galaxie/gamora.jpg',
	'assets/cards/Gardiens_Galaxie/groot.jpg',
	'assets/cards/Gardiens_Galaxie/nebula.jpg',
	'assets/cards/Gardiens_Galaxie/rocket.jpg',
	'assets/cards/Gardiens_Galaxie/ronan.jpg',
	'assets/cards/Gardiens_Galaxie/star_lord.jpg',
	'assets/cards/Gardiens_Galaxie/yondu.jpg',
	'assets/cards/Justice_League/aquaman.jpg',
	'assets/cards/Justice_League/batman.jpg',
	'assets/cards/Justice_League/cyborg.jpg',
	'assets/cards/Justice_League/flash.jpg',
	'assets/cards/Justice_League/green_arrow.jpg',
	'assets/cards/Justice_League/green_lantern.jpg',
	'assets/cards/Justice_League/superman.jpg',
	'assets/cards/Justice_League/wonder_woman.jpg',
	'assets/cards/Suicid_Squad/boomerang.jpg',
	'assets/cards/Suicid_Squad/deadshot.jpg',
	'assets/cards/Suicid_Squad/diablo.jpg',
	'assets/cards/Suicid_Squad/enchantress.jpg',
	'assets/cards/Suicid_Squad/harley_quinn.jpg',
	'assets/cards/Suicid_Squad/joker.jpg',
	'assets/cards/Suicid_Squad/katana.jpg',
	'assets/cards/Suicid_Squad/killer_croc.jpg',
	'assets/cards/Suicid_Squad/rickflag.jpg',
	'assets/cards/Suicid_Squad/slipknot.jpg',
	'assets/cards/Tortues_Ninja/beebop.jpg',
	'assets/cards/Tortues_Ninja/donatello.jpg',
	'assets/cards/Tortues_Ninja/leonardo.jpg',
	'assets/cards/Tortues_Ninja/michaelangelo.jpg',
	'assets/cards/Tortues_Ninja/raphael.jpg',
	'assets/cards/Tortues_Ninja/rocksteady.jpg',
	'assets/cards/Tortues_Ninja/shredder.jpg',
	'assets/cards/X_men/archangel.jpg',
	'assets/cards/X_men/beast.jpg',
	'assets/cards/X_men/deadpool.jpg',
	'assets/cards/X_men/magneto.jpg',
	'assets/cards/X_men/mystique.jpg',
	'assets/cards/X_men/quiksilver.jpg',
	'assets/cards/X_men/scarlet_witch.jpg',
	'assets/cards/X_men/wolverine.jpg',
];

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

@Component({
	tag: 'vif-cards',
	styleUrl: 'vif-cards.scss'
})
export class VifCards {


	componentDidLoad(){
		window['jQuery'](document).ready(function(){
			console.log('ready');
			console.log(window['jQuery']('.slick'));
			window['jQuery']('.slick').slick({
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 5,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				prevArrow:'',
				nextArrow:'',
			});
		})
	}

	render() {
		return (
				<div class="slick">
					{shuffleArray(cards).map(image => <div class="img"><img src={image} width="220" height="220"/></div>)}
				</div>
		);
	}
}
