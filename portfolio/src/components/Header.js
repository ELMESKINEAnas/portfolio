import {Link} from 'react-router-dom'
import {useState} from 'react'
import '../assets/css/styles.css'
import * as React from 'react'
import {BiHomeAlt, BiUser, BiBook,BiBriefcaseAlt2,BiMoon, BiMessageSquareDetail, BiLink, BiGitBranch, BiCloudDrizzle, BiMouse,BiAward,BiBriefcaseAlt, BiSupport, BiBadgeCheck,BiRightArrowAlt, BiX, BiCheck,BiMessage,BiArrowToRight, BiPhoneCall, BiVoicemail} from "react-icons/bi";
import A from '../assets/img/perfil.png'
import WorkA from '../assets/img/work1.jpg'
import WorkB from '../assets/img/work2.jpg'
import WorkC from '../assets/img/work3.jpg'
import WorkD from '../assets/img/work4.jpg'
import WorkE from '../assets/img/work5.jpg'
import About from '../assets/img/about.jpg'
import Testi from '../assets/img/testimonial1.png'
import Testi2 from '../assets/img/testimonial2.png'
import Testi3 from '../assets/img/testimonial3.png'
import Modal from './Modals/Modal';
import Swiper from '../components/Testimonial/Swiper'



const Header = () => {

    function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
    
    //services
        const [modals, setModals] = useState(false)

        // const handleModal = () =>{

        //     setModals(!modals);
            
        // }
    // const modalViews = document.querySelectorAll('.services__modal'),
    //       modalBtns = document.querySelectorAll('.services__button'),
    //       modalClose = document.querySelectorAll('.services__modal-close')

    // function modal (modalClick){
    //     modalViews[modalClick].classList.add('active-modal')
    // }

    // modalBtns.forEach((mb, i)=>{
    //     mb.addEventListener('click', ()=>{
    //         modal(i)
    //     })
    // })



    // modalClose.forEach((mc)=>{
    //     mc.addEventListener('click', ()=>{
    //         modalViews.forEach((mv)=>{
    //             mv.classList.remove('active-modal')
    //         })
    //     })
    // })
    // const icon = IconBase;
    return ( 
        <div>
        <header className="header" id='header'>
            <nav className="nav container">
        <Link to={'/'} className="nav__logo">
            Imane
        </Link>
        <div className="nav__menu">
            <ul className="nav__list">
                <li className="nav__item active-link">
                <Link to={'/home'} className="nav__link">
                
                <BiHomeAlt/>

                </Link>
                </li>
                <li className="nav__item">
                <Link to={'/about'} className="nav__link">
                    <BiUser/>
                </Link>
                </li>
                <li className="nav__item">
                <Link to={'/skills'} className="nav__link">
                    <BiBook/>
                </Link>
                </li>
                <li className="nav__item">
                <Link to={'/work'} className="nav__link">
                    <BiBriefcaseAlt2 />
                </Link>
                </li>
                <li className="nav__item">
                <Link to={'/contact'} className="nav__link">
                    <BiMessageSquareDetail />
                </Link>
                </li>
            </ul>
        </div>


        {/********************************* Theme change Button ***********************/}

            <BiMoon className="theme-button">

            </BiMoon>

            </nav>
        </header>
                {/*<!--=============== MAIN ===============-->*/}
         <main className="main">

            {/*<!--=============== HOME ===============-->*/}
            <section className="home section" id="home">

                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__greeting">
                            Hello, i'm 
                        </span>
                        <h1 className="home_name">
                            Imane Rkhiss
                        </h1>
                        <h3 className="home__education">
                            Web Developer
                        </h3>
                    </div>
                        <div className="home__buttons">
                            <Link to={'/assets/pdf/Imane-Cv.pdf'} className="button button--ghost">
                            Download CV
                            </Link>
                            <Link to={'/about'} className="button">
                            About me
                            </Link>
                        </div>
                    <div className="home__handle">
                        <img src={A} alt="" />
                    </div>
                    <div className="home__social">

                        <Link to={'/home'} className='home__social-link'>
                            <BiLink />
                            
                        </Link>

                        <Link to={"/home"} className='home__social-link'>
                            <BiGitBranch />
                        </Link>

                        <Link to={"/home"} className='home__social-link'>
                            <BiCloudDrizzle />
                        </Link>


                    </div>
                        <Link to={"/home"} className='home__scroll'>
                            <BiMouse />
                            <span className="home__scroll-name">Scroll Down</span>
                        </Link>
                </div>
                
            </section>
            
            {/*<!--=============== About ===============-->*/}
            <section className="about section" id="about">
                <span className="section__subtitle">My Intro</span>
                <h2 className="section__title">About Me</h2>

                <div className="about__container container grid">
                <img src={About} alt=""  className="about__img" />


                    <div className="about__data">
                        <div className="about__info">
                            <div className="about__box">
                                <BiAward className="about__icon" />
                                <h3 className="about__title">
                                Experience
                                </h3>
                                <span className="about__subtitle">
                                    8 Years Working
                                </span>
                            </div>
                            <div className="about__box">
                                <BiBriefcaseAlt className="about__icon" />
                                <h3 className="about__title">
                                    Completed 
                                </h3>
                                <span className="about__subtitle">
                                    48 + Projects
                                </span>
                            </div>
                            <div className="about__box">
                                <BiSupport className="about__icon" />
                                <h3 className="about__title">
                                    Support
                                </h3>
                                <span className="about__subtitle">
                                    Online 24/7
                                </span>
                            </div>
                        </div>
                        <p className="about__description">
                            Full stack JavaScript Developer.
                            I have 2 years of experience and many clients are happy with the projects carried out.
                        </p>
                        <Link to={"/home"} className="button">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>

            {/*<!--=============== SKILLS ===============-->*/}
            <section className="skills section" id="skills">
                <span className="section__subtitle">My abilities</span>
                <h2 className="section__title">My Experience</h2>
                <div className="skills__container container grid">
                    <div className="skills__content">
                        <h3 className="skills__title">
                            Frontend developer
                        </h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <BiBadgeCheck  className='bxs'/>
                                    <div>

                                <h3 className="skills__name">
                                    HTML
                                </h3>

                                <span className="skills__level">
                                    Basic
                                </span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                    <div>
                                        
                                <h3 className="skills__name">
                                    CSS
                                </h3>

                                <span className="skills__level">
                                    Advanced
                                </span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />

                                    <div>
                                        
                                <h3 className="skills__name">
                                    Javascript
                                </h3>

                                <span className="skills__level">
                                    Intermediate
                                </span>
                                    </div>
                                </div>

                                    
                                
                            </div>
                            <div className="skills__group">
                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                    <div>
                                        
                                <h3 className="skills__name">
                                    Tailwind
                                </h3>

                                <span className="skills__level">
                                    Intermediate
                                </span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                    <div>
                                        
                                <h3 className="skills__name">
                                    reactjs
                                </h3>

                                <span className="skills__level">
                                    Beginner
                                </span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                    <div>
                                        
                                <h3 className="skills__name">
                                    VueJS
                                </h3>

                                <span className="skills__level">
                                    Intermediate
                                </span>
                                </div>
                                </div>

                                    
                                
                            </div>
                        </div>
                    </div>
                    <div className="skills__content">
                        <h3 className="skills__title">
                            Backend developer
                        </h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                <div>
                                        
                                <h3 className="skills__name">
                                    PHP
                                </h3>

                                <span className="skills__level">
                                    Advanced
                                </span>
                                </div>
                            </div>

                                <div className="skills__data">
                                        
                                    <BiBadgeCheck className='bxs'/>
                                    <div>
                                <h3 className="skills__name">
                                    C
                                </h3>

                                <span className="skills__level">
                                    Intermediate
                                </span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                    <div>
                                        
                                <h3 className="skills__name">
                                    Firebase
                                </h3>

                                <span className="skills__level">
                                    Intermediate
                                </span>
                                    </div>
                                </div>

                                    
                                
                            </div>
                            <div className="skills__group">
                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                <div>
                                        
                                <h3 className="skills__name">
                                    NodeJS
                                </h3>

                                <span className="skills__level">
                                    Intermediate
                                </span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs'/>
                                    <div>
                                        
                                <h3 className="skills__name">
                                    Python
                                </h3>

                                <span className="skills__level">
                                    Beginner
                                </span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <BiBadgeCheck className='bxs' />
                                    <div>
                                        
                                <h3 className="skills__name">
                                    MongoDB
                                </h3>

                                <span className="skills__level">
                                    Intermediate
                                </span>
                                </div>
                                </div>

                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!--=============== Services ===============-->*/}
            <section className="services section">
                <span className="section__subtitle">My Services</span>
                <h2 className="section__title">What I offer</h2>

                <div className="services__container container grid">
                    <div className="services__card">
                        <h3 className="services__title">
                                Product <br/> Designer
                        </h3>

                        <span onClick={() => setModals(!modals)} className="services__button">
                        See more <BiRightArrowAlt className="services__icon"  />
                        </span>

                    


                    </div>

                    <div className="services__card">
                        <h3 className="services__title">
                            Visual <br/> Designer
                        </h3>

                        <span className="services__button">
                        See more <BiRightArrowAlt className="services__icon"  />
                        </span>
                        {/* <div className="services__modal">
                            <div className="services_modal-content">
                                    <BiX className="services__modal-close" />
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
                        </div> */}
                    </div>

                    <div className="services__card">
                        <h3 className="services__title">
                            UI/UX <br/> Designer
                        </h3>

                        <span className="services__button">
                        See more <BiRightArrowAlt className="services__icon" />
                        </span>
                        {/* <div className="services__modal">
                            <div className="services_modal-content">
                                    <BiX className="services__modal-close" />
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
                        </div> */}
                    </div>
                </div>
            </section>

            {/*<!--=============== WORK ===============-->*/}
            <section className="work section" id="work">
                <span className="section__subtitle">
                    My Portfolio
                </span>
                <h2 className="section__title">
                    Recent Works
                </h2>
                <div className="work__filters">
                    <span className="work__item active-work">All</span>
                    <span className="work__item">Web</span>
                    <span className="work__item">Mobile</span>
                    <span className="work__item">Design</span>
                </div>
                <div className="work__container container grid">
                    <div className="work__card">

                    <img src={WorkA} alt="" />
                    <h3 className="work__title">
                        Web design
                    </h3>
                        <Link to={"/home"} className="work__button">
                            Demo <BiRightArrowAlt className="work__icon" />
                        </Link>
                    </div>

                    <div className="work__card">

                    <img src={WorkB} alt="" />
                    <h3 className="work__title">
                        App Mobile
                    </h3>
                        <Link to={"/home"} className="work__button">
                            Demo <BiRightArrowAlt className="work__icon" />
                        </Link>
                    </div>
                    <div className="work__card">

                    <img src={WorkC} alt="" />
                    <h3 className="work__title">
                        Brand design
                    </h3>
                        <Link to={"/home"} className="work__button">
                            Demo <BiRightArrowAlt className="work__icon" />
                        </Link>
                    </div>
                    <div className="work__card">

                    <img src={WorkD} alt="" />
                    <h3 className="work__title">
                        App Mobile
                    </h3>
                        <Link to={"/home"} className="work__button">
                            Demo <BiRightArrowAlt className="work__icon" />
                        </Link>
                    </div>
                    <div className="work__card">

                    <img src={WorkE} alt="" />
                    <h3 className="work__title">
                        Brand design
                    </h3>
                        <Link to={"/home"} className="work__button">
                            Demo <BiRightArrowAlt className="work__icon" />
                        </Link>
                    </div>

                </div>
            </section>

            {/*<!--=============== TESTIMONIALS ===============-->*/}
            <section className="testimonial section">
                <span className="section__subtitle">
                    My clients say
                </span>
                <h2 class="section__title">
                    Testimonial
                </h2>
                <div className="testimonial__c">
                    <img src={Testi} alt="" className="testimonial__img" />
                    <h3 className="testimonial__name">John Doe</h3>
                    <p className="testimonial__description">
                        A really good job, all aspects of the project were followed step by step and with good results
                    </p>
                </div>

                <div className="testimonial__c">
                    <img src={Testi2} alt="" className="testimonial__img" />
                    <h3 className="testimonial__name">Paula Vusy</h3>
                    <p className="testimonial__description">
                        A really good job, all aspects of the project were followed step by step and with good results
                    </p>
                </div>

                <div className="testimonial__c">
                    <img src={Testi3} alt="" className="testimonial__img" />
                    <h3 className="testimonial__name">Sara Cill</h3>
                    <p className="testimonial__description">
                        A really good job, all aspects of the project were followed step by step and with good results
                    </p>
                </div>
            </section>

            {/*<!--=============== CONTACT ===============-->*/}
            <section className="contact section" id="contact">
                <span className="section__subtitle">
                    Get in touch
                </span>
                <h2 className="section__title">Contact Me</h2>
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__ti">
                            Talk to me
                        </h3>
                        <div className="contact__info">

                        
                        <div className="contact__card">
                            <BiVoicemail className="contact__card-icon" />
                            <h3 className="contact__card-title">
                                Email
                            </h3>
                            <span className="contact__card-da">
                                user@gmail.com
                            </span>
                            <Link to= {'/home'} className="contact__button">
                                Write me <BiRightArrowAlt className="contact__button-icon"/>
                            </Link>
                        </div>
                        <div className="contact__card">
                            <BiPhoneCall className="contact__card-icon" />
                            <h3 className="contact__card-title">
                                Whatsapp
                            </h3>
                            <span className="contact__card-da">
                                06 12 34 56 78
                            </span>
                            <Link to= {'/home'} className="contact__button">
                                Write me <BiRightArrowAlt className="contact__button-icon"/>
                            </Link>
                        </div>
                        <div className="contact__card">
                            <BiMessage className="contact__card-icon"/>
                            
                            <h3 className="contact__card-title">
                                Messenger
                            </h3>
                            <span className="contact__card-da">
                                user.fb123
                            </span>
                            <Link to= {'/home'} className="contact__button">
                                Write me <BiRightArrowAlt className="contact__button-icon"/>
                            </Link>
                        </div>
                        </div>
                    </div>

                    <div className="contact__content">
                        <h3 className="contact__title">
                            Write me your project
                        </h3>
                        <form action="" className="contact__form">
                            <div className="contact__form-div">
                                <label Type="text" className="contact__form-tag"></label>
                                <input type="text" className="contact_form-input" />
                            </div>
                            <div className="contact__form-div">
                                <label Type="text" className="contact__form-tag"></label>
                                <input type="text" className="contact_form-input" />
                            </div>
                            <div className="contact__form-div">
                                <label Type="text" className="contact__form-tag"></label>
                                <input type="text" className="contact_form-input" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
       {
           modals &&
            <Modal setModal={setModals} modals={modals} />
       }
       
        
        </div>
     );
}
 
export default Header;