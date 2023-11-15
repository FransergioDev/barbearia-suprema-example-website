import "bootstrap/dist/css/bootstrap.min.css"

import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contato() {
    return (
        <>
        <div className="container-fluid page-contato">
            <div className="row align-items-stretch no-gutters contact-wrap">
                <div className="col-md-8">
                    <div className="form h-100">
                        <h3>Envie sua mensagem</h3>
                        <form className="mb-5" method="post" id="contactForm" name="contactForm">
                            <div className="row">
                                <div className="col-md-6 form-group mb-5">
                                    <label htmlFor="" className="col-form-label">Nome *</label>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Seu nome"/>
                                </div>
                                <div className="col-md-6 form-group mb-5">
                                    <label htmlFor="" className="col-form-label">E-mail *</label>
                                    <input type="text" className="form-control" name="email" id="email" placeholder="E-mail"/>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-5">
                                    <label htmlFor="" className="col-form-label">Celular/Whatsapp</label>
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="Celular/Whatsapp"/>
                                </div>
                                <div className="col-md-6 form-group mb-5">
                                    <label htmlFor="" className="col-form-label">Assunto</label>
                                    <input type="text" className="form-control" name="assunto" id="assunto" placeholder="Assunto"/>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group mb-5">
                                        <label htmlFor="message" className="col-form-label">Mensagem *</label>
                                        <textarea 
                                            className="form-control" 
                                            name="message" 
                                            id="message" 
                                            rows={5}
                                            cols={30}
                                            placeholder="Escreva sua mensagem aqui!"></textarea>
                                        </div>
                                    </div>
                                <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="submit" value="Envie sua mensagem" className="btn btn-primary rounded-0 py-2 px-4"/>
                                        <span className="submitting"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info h-100">
                            <h3>Informações de contato</h3>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, magnam!</p>
                            <ul className="list-unstyled">
                                <li className="d-flex">
                                    <span className="wrap-icon icon-room mr-3"></span>
                                    <span className="text">9757 Aspen Lane South Richmond Hill, NY 11419</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    <span className="text">+55 (16) 99393-9321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </span>
                                    <span className="text">+55 (16) 99893-4321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </span>
                                    <span className="text">facebok.com.br/barbeariasupremaw331321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </span>
                                    <span className="text">instagram.com.br/barbeariasupremaw331321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </span>
                                    <span className="text">twitter.com.br/barbeariasupremaw331321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </span>
                                    <span className="text">youtube.com.br/barbeariasupremaw331321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </span>
                                    <span className="text">tiktok.com/barbeariasupremaw331321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-envelope mr-3" style={{paddingRight: '4px'}}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <span className="text">contato@barbeariasuprema.com.br</span>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}