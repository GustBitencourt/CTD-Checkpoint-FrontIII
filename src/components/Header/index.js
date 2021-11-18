import './style.scss';

const Header = ({ marca }) => {

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#about">{marca}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                        <ul className="navbar-nav mb-2 mb-sm-0">
                          <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#projetos">Projetos</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#footer">Footer</a>
                          </li>          
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header;