import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router';



class HeaderComponent extends Component{
    render(){

        return(
            <header>
                    <div class="header-area ">
                        <div class="header-top_area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-6 col-md-6 ">
                                        <div class="social_media_links">
                                            <a href="#">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <div class="short_contact_list">
                                            <ul>
                                                <li><a href="#"> <i class="fa fa-envelope"></i>info@odontokids.com</a></li>
                                                <li><a href="#"> <i class="fa fa-phone"></i> 477-394-1564</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sticky-header" class="main-header-area">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-xl-3 col-lg-2">
                                        <div class="logo">
                                            <a href="index.html">
                                                <img src="img/logo.png" alt=""></img>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-7">
                                        <div class="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a class="active" href="index.html">Inicio</a></li>
                                                    
                                                    <li><a href="#">Servicios <i class="ti-angle-down"></i></a>
                                                        <ul class="submenu">
                                                            <li><a href="elements.html">Adulto</a></li>
                                                            <li><a href="about.html">Niño</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Ubicaciones <i class="ti-angle-down"></i></a>
                                                        <ul class="submenu">
                                                            <li><a href="blog.html">León Centro</a></li>
                                                            <li><a href="single-blog.html">León</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="Doctors.html">Preguntas</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div class="Appointment">
                                            <div class="book_btn d-none d-lg-block">
                                                <a class="popup-with-form" href="#test-form">Promociones</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                 
       
        )
    }
}

export default withRouter(HeaderComponent);