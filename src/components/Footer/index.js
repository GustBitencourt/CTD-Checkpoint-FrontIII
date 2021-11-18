import './style.scss';

const Footer = ({ autor, children }) => {
    const generateDateString = () => {
        const creatioYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creatioYear === currentYear ? currentYear : `${creatioYear} - ${currentYear}`;
    }

    return(
        <footer id="footer" className={`d-flex flex-wrap justify-content-center align-items-center py-3 border-top text-dark bg-dark`}>
            <h3>{ autor } - Todos os direitos reservado. &copy; Copyright { generateDateString() }  </h3>
        </footer>

    )
}

export default Footer;