import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

import './footer.css';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <span className="page-footer-info"><b>&copy;</b> 2023 Por Barbearia Suprema criado por 
                            <b><a className="page-footer-info-dev" href="https://fransergiomota.com.br" target='_black'> Fransérgio A. Mota</a></b></span>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="page-footer-social-networks">
                            <a href="#" className="link-social-networks">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="link-social-networks">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="link-social-networks">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="link-social-networks">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="#" className="link-social-networks">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <a href="#" className="link-social-networks">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="#" className="link-social-networks">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}