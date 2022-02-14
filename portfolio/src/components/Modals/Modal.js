import { BiX, BiCheck } from 'react-icons/bi'

export default function Modal({ setModal , modals }) {
  return (
    <div>
          <div className="services__modal">
                         
                            <div className="services__modal-content">
                                    <BiX onClick={ () => {
                                       
                                        setModal(!modals)
                                        }} className="services__modal-close" />
                                    <h3 className="services__modal-title">
                                        Product Designer
                                    </h3>
                                    <p className="services__modal-description">
                                        services with more than 3years of experience.
                                        Providing quality work to clients and companies.
                                    </p>
                                    <ul className="services__modal-list">
                                        <li className="services__modal-item">
                                            <BiCheck className="services__modal-icon" />
                                            <p className="services__modal-info">
                                                I develop User Interfaces
                                            </p>
                                        </li>

                                        <li className="services__modal-item">
                                            <BiCheck className="services__modal-icon" />
                                            <p className="services__modal-info">
                                                Web Page development
                                            </p>
                                        </li>

                                        <li className="services__modal-item">
                                            <BiCheck className="services__modal-icon" />
                                            <p className="services__modal-info">
                                                I create ux element interactions
                                            </p>
                                        </li>

                                        <li className="services__modal-item">
                                            <BiCheck className="services__modal-icon" />
                                            <p className="services__modal-info">
                                                I position your company brand.
                                            </p>
                                        </li>

                                        <li className="services__modal-item">
                                            <BiCheck className="services__modal-icon" />
                                            <p className="services__modal-info">
                                                Design and mockups of products for companies
                                            </p>
                                        </li>
                                    </ul>
                            </div>
                        </div>
    </div>
  )
}
