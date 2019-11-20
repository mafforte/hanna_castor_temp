import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';


import './Footer.scss';

import IconFace from '../../assets/img/icon/facebook.svg';
import IconInsta from '../../assets/img/icon/instagram.svg';
import IconLinkedin from '../../assets/img/icon/linkedIn.svg';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container grid_footer">


					<div className="footer_left">
						<div className="social_footer">
							<Link className="item_social_footer" to="/home">
								<SVG src={IconFace} />
							</Link>
							<Link className="item_social_footer" to="/home">
								<SVG src={IconInsta} />
							</Link>
							<Link className="item_social_footer" to="/home">
								<SVG src={IconLinkedin} />
							</Link>
						</div>

						<ul className="links_footer">
							<li><Link to="/">SOBRE NÓS</Link></li>
							<li><Link to="/">CONTATO</Link></li>
						</ul>

						<span>Copyright © 2019 Hanna Castor Branding & Strategy</span>
					</div>	



					<div className="footer_right">
						<div className="endereco">
							<li>RUA MAJOR LOPES, 7</li>
							<li>SALA 01 - SÃO PEDRO</li>
							<li className="destaque">BELO HORIZONTE | MG</li>
							<li>30330-050</li>
							<li className="destaque">031 99999 9999</li>
						</div>

						<ul className="eta_footer">
							<li className="destaque">ETA BRAND SCHOOL</li>
							<li><Link to="/">A ETA</Link></li>
							<li><Link to="/">CURSOS E PALESTRAS</Link></li>
							<li><Link to="/">HANNA CASTOR</Link></li>
						</ul>

						<ul className="hanna_footer">
							<li className="destaque">HANNA CASTOR</li>
							<li><Link to="/">PRÓPOSITO</Link></li>
							<li><Link to="/">METODOLOGIA</Link></li>
							<li><Link to="/">SERVIÇOS</Link></li>
							<li><Link to="/">PROJETOS</Link></li>
							<li><Link to="/">RESULTADOS</Link></li>
						</ul>
					</div>


				</div>
			</div>	
		);
	}
}

export default Footer;