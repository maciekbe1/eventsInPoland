import React from 'react';
import '../assets/styles/footer.scss'
import ue from '../assets/images/ue.png'
class Footer extends React.Component {

    changeLanguage = (e) => {
        this.props.changeLanguage(e.target.classList[0])
    };

    render() {
        return (
            <div className="footer container-fluid">
                <div className="container text-center">
                    <img className="" src={ue} alt=""/>
                    <p className="footer-notice">Projekt współfinansowany w ramach podziałania 3.3.3: WSPARCIE MŚP W PROMOCJI MAREK PRODUKTOWYCH - GO TO BRAND Programu Operacyjnego Inteligentny Rozwój, 2014-2020 współfinansowanego ze środków Europejskiego Funduszu Rozwoju Regionalnego.
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;