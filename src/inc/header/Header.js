import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TweenLite, TimelineMax, Power2, Back } from "gsap/all";
import ScrollableAnchor from 'react-scrollable-anchor';
import SVG from 'react-inlinesvg';

import './Header.scss';

import IconFace from '../../assets/img/icon/facebook.svg';
import IconInsta from '../../assets/img/icon/instagram.svg';
import IconLinkedin from '../../assets/img/icon/linkedIn.svg';

import LogoHeader from '../../assets/img/hanna-castor.svg';

class Header extends Component {

	constructor() {
		super();
		this.state = {
			hoverFazer: null,
			hoverEnsinar: null,
		}
	}

	componentDidMount(){
		this.hoverFazer = new TimelineMax()
		.fromTo('.fazer', 1, {display: 'none'}, {display: 'block'})
	}

	onOver() {

	}

	render() {
		return (
			<div className="header">

				<div className="social_header">
					{/*<Link className="item_social_header" to="/home">
						<SVG src={IconFace} />
					</Link>
					<Link className="item_social_header" to="/home">
						<SVG src={IconInsta} />
					</Link>
					<Link className="item_social_header" to="/home">
						<SVG src={IconLinkedin} />
					</Link>*/}
				</div>	


				<div className="logo_header">
					<Link to="/home">
						<SVG src={LogoHeader} />
					</Link>
				</div>

				<ul className="fazer_ensinar">
				{/*	<li className="fazer"><div className="fazer_aparecer">Fazer</div>

					</li>
					<li className="ensinar">Ensinar
						
					</li>*/}
				</ul>


			</div>
		);
	}
}

export default Header;