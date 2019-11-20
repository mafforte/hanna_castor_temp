import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg';

import './Home.scss';
import '../header/Header.scss';



import fotoHanna01 from '../../assets/img/foto-proposito.png';
import letteringMetodologias from '../../assets/img/INVESTIGANDO-ANALISANDO-CRIANDO.png';
import caseGustoMio from '../../assets/img/case-gusto-mio.jpg';
import caseOper from '../../assets/img/case-oper.jpg';
import caseMexicalle from '../../assets/img/case-mexicalle.jpg';
import caseHyle from '../../assets/img/case-hyle.jpg';
import alberto from '../../assets/img/foto_persona.png';

import IconFace from '../../assets/img/icon/facebook.png';
import IconInsta from '../../assets/img/icon/instagram.png';
import IconLinkedin from '../../assets/img/icon/linkedin.png';
import IconWtspp from '../../assets/img/icon/whatsapp.png';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="banner01">
					<h1>BRANDING . STRATEGY . DESIGN</h1>

					<Link className="btnDowload01" to="/">BAIXE NOSSA APRESENTAÇÃO</Link>

					<ul className="social_temp">
						<li>
							<a className="item_social_temp" target="_blank" href="https://www.facebook.com/hannacastorbranding/">
								<img src={IconFace} />
							</a>
						</li>
						<li>
							<a className="item_social_temp" target="_blank" href="https://www.instagram.com/hannacastorbranding/">
								<img src={IconInsta} />
							</a>
						</li>
						<li>
							<a className="item_social_temp" target="_blank" href="https://www.linkedin.com/in/hannacastor/">
								<img src={IconLinkedin} />
							</a>
						</li>
						<li>
							<a className="item_social_temp" target="_blank" href="https://api.whatsapp.com/send?phone=5531984096462">
								<img src={IconWtspp} />
							</a>
						</li>
					</ul>


					<div className="feito_com_amor">
						<p>Feito com <i>&#10084;</i> por Hanna Castor Branding & Strategy ©</p>
						<p>The full website is coming...</p>
					</div>

				</div>

				<section>
					<div className="proposito">
						<div className="grid_proposito">
							<div>
								<h1>PROPÓSITO</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
							</div>
							
							<img src={fotoHanna01} alt="Hanna Castor" />
							
						</div>
					</div>
				</section>


				{/*<section>
					<div className="ensinar_fazer">
						<div className="grid_ensinar_fazer">
							<div>
								<h3>ENSINAR</h3>
								<p>• Hanna Castor há 8 anos empreendendo no mundo<br/> das estratégias de marcas, do branding e do design<br/>
								• Gestão inteligente<br/>
								• Centenas de projetos desenvolvidos<br/>
								• Projetos nacionais e internacionais<br/>
								• Dezenas de cursos e treinamentos<br/>
								• Equipes altamente capacitadas treinadas e geridas por demanda<br/>
								• Foco em resultados<br/>
								• Projetos finalizados com resultados dentro e acima das metas estipuladas</p>
							</div>
							
							<div>
								<h3>FAZER</h3>
								<p>• Dezenas de turmas dos cursos de estratégia de marca e vendas<br/> ministrados, todos autorais, escritos e aplicados pela Hanna Castor<br/>
								• Treinamentos e cursos corporativos sob medida, ministrados para equipes de pequeno a médio porte, da direção à equipes operacionais<br/>
								• Centenas de profissionais atendidos <br/>
								• Os perfis dos alunos vão de gestores, empreendedores à executivos e estudantes de diversas áreas<br/>
								• Fundou a ETA BS, escola que leva sua história e metodologias</p>
							</div>
							
						</div>
					</div>
				</section>



				<section>
					<div className="metodologias">
						<h1>METODOLOGIAS</h1>
						<div className="grid_metodologias">
							<img src={letteringMetodologias} />

							<p>No que se refere aos processos dos trabalhos, utilizamos como base a abordagem do <span>Design Thinking</span> e metodologias como <span>PDCA</span>, matriz <span>SWOT</span>, <span>CANVAS</span>, <span>Golden Circle</span>, entre outros, produzindo mapas estratégicos, conceituais, plataformas de marca, livros de estratégia e o que mais for necessário.
								<br/><br/>
								Com base nas abordagens e raciocínio lógico construídos pela Hanna Castor, são desenvolvidas estruturas próprias para desenvolvimento e execução dos projetos. Nosso processo de escuta é apurado e fundamentado para estarmos sempre conectados aos nossos públicos, visando assim um trabalho assertivo.
							</p>
						</div>
					</div>
				</section>




				<section>
					<div className="proposta">
						<div className="container">
							<h1>O QUE LHE PROPOMOS?</h1>
							<span>Entenda melhor sobre nossos serviços</span>
							<div className="grid_proposta">

								<div className="itemProposta">
									<h3>Design de Negócios e alinhamento com a Marca</h3>
									<p>Entender o mercado, os melhores modelos de negócios, mais rentáveis e atualizados, entender os públicos, analisar tendências, recursos financeiros e humanos... alinhar posicionamento de negócio e marca. Afinal, qual caminho pegar? Qual o melhor modelo? E o quê a marca tem a ver com isso?</p>
								</div>

								<div className="itemProposta">
									<h3>Inteligência Competitiva e posicionamento</h3>
									<p>Fazemos pesquisas e análises detalhadas sobre mercados, públicos e comportamentos de um modo direcionado à expectativa de resultados, entendendo como sua marca está inserida em diversos contextos, levantando forças e fraquezas, oportunidades e ameaças, extraindo assim sua melhor versão conforme seus objetivos.</p>
								</div>

								<div className="itemProposta">
									<h3>Estratégia de Marca: do negócio à entrega aos públicos</h3>
									<p>Seja regional, nacional ou internacional, pensar o comportamento de marca como um todo, em todas as profundidades e pontas, indo muito além da estética. É a entrega efetiva por meio de uma arquitetura de marca bem planejada, de todo o sistema de identidade, tom de voz, construção de discurso, pelos processos, pessoas, produto, todos os ambientes, on e off.</p>
								</div>

								<div className="itemProposta">
									<h3>Sistema de Identidade</h3>
									<p>Fazemos pesquisas e análises detalhadas sobre mercados, públicos e comportamentos de um modo direcionado à expectativa de resultados, entendendo como sua marca está inserida em diversos contextos, levantando forças e fraquezas, oportunidades e ameaças, extraindo assim sua melhor versão conforme seus objetivos.</p>
								</div>

							</div>
						</div>
					</div>
				</section>


				<section>
					<div className="entregas">
						<div className="container">
							<h1>ENTREGAS</h1>
							<div className="grid_entregas">
								<div>
									<h4>ESTRATÉGIAS, CONSULTORIA E PROJETOS</h4>
									<p>
									Consultoria de marca<br/>
									Estratégia de marca Posicionamento<br/>
									Posicionamento digital Reposicionamento<br/>
									Propósito de marca<br/>
									Plataforma de marca<br/>
									Inteligência competitiva <br/>
									Comunicação corporativa <br/>
									Estratégia de produtos e serviços Organização de marcas e portifólio <br/>
									Cultura Organizacional
									</p>
								</div>

								<div>
									<h4>SISTEMA DE MARCA E WEB</h4>
									<p>
									Naming<br/>
									Design de marca<br/>
									Design do sistema de identidade <br/>
									Design de ambientes (ambientação) <br/>
									Design de materiais para a marca <br/>
									<br/>
									Desenvolvimento de sites, landing pages<br/>
									Produção de materiais digitais<br/>
									Redação orientada pela estratégia
									</p>

									<div className="info_entrega">
										Todos os materiais são desenvolvidos a partir de uma estratégia prévia de branding
									</div>
								</div>
							</div>
						</div>					
					</div>
				</section>


				<section>

					<div className="cases">
						<h1>CASES</h1>
						<h5>Os resultados que falam</h5>
							<div className="grid_cases">

								<div className="item_cases">
									<Link to="/">
										<img src={caseGustoMio} />
										<div className="txt_item_cases">
											<h4>GUSTO MIO</h4>
											<legend>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</legend>
										</div>
									</Link>	
								</div>	

								<div className="item_cases">
									<Link to="/">
										<img src={caseOper} />
										<div className="txt_item_cases">
											<h4>OPER</h4>
											<legend>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</legend>
										</div>
									</Link>	
								</div>	

								<div className="item_cases">
									<Link to="/">
										<img src={caseMexicalle} />
										<div className="txt_item_cases">
											<h4>MEXICALLE</h4>
											<legend>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</legend>
										</div>
									</Link>	
								</div>	

								<div className="item_cases">
									<Link to="/">
										<img src={caseHyle} />
										<div className="txt_item_cases">
											<h4>HYLE</h4>
											<legend>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</legend>
										</div>
									</Link>	
								</div>

							</div>
							
							<Link className="btnDowload01" to="/">BAIXE NOSSA APRESENTAÇÃO</Link>

					</div>		

				</section>



				<section>
					<div className="container">
						<div className="testimonial">

							<div className="item_testimonial">

								<img src={alberto} />

								<h3>ALBERTO SALES</h3>
								<span>Diretor de negócios na Business Co.</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

							</div>			

						</div>
					</div>
				</section>




				<section>

					<div className="newsletter">

						<div className="grid_newsletter">
							<div>
								<h3>NEWSLETTER</h3>
								<p>RECEBA NOSSOS CONTEÚDOS</p>
							</div>

							<form>
								<input name="email" placeholder="SEU EMAIL"></input>
								<button name="submit">OK</button>
							</form>	
						</div>						

					</div>

				</section>*/}


			</div>	
		);
	}
}

export default Home;