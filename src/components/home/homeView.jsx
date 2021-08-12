import React ,{Component} from 'react'
import HeaderComponent from '../HeaderComponent'
import HomePrincipalView from '../homeComponents/homePrincipalView.jsx'
// import HomeServiceComponents from '../homeComponents/homeServiceComponents'
import HomePresentationComponent from '../homeComponents/homePresentationCompnent'
import HomeFooterComponent from '../homeComponents/homeFooterComponent'


class homeView extends Component{
    render(){
        return(
            <div className="headerComponent">
                <HeaderComponent></HeaderComponent>
                
                {/* <HomeServiceComponents></HomeServiceComponents> */}
                <HomePresentationComponent></HomePresentationComponent>
                <HomePrincipalView></HomePrincipalView>
                <HomeFooterComponent></HomeFooterComponent>
                
                
                


                
                {/* offers_area_start */}
    {/*  */}
    {/* Emergency_contact end */}


    {/* link that opens popup */}

    {/* form itself end*/}
    <form id="test-form" class="white-popup-block mfp-hide">
        <div class="popup_box ">
            <div class="popup_inner">
                <h3>Make an Appointment</h3>
                <form action="#">
                    <div class="row">
                        <div class="col-xl-6">
                            <input id="datepicker" placeholder="Pick date"></input>
                        </div>
                        <div class="col-xl-6">
                            <input id="datepicker2" placeholder="Suitable time"></input>
                        </div>
                        <div class="col-xl-6">
                            <select class="form-select wide" id="default-select" class="">
                                <option data-display="Select Department">Department</option>
                                <option value="1">Eye Care</option>
                                <option value="2">Physical Therapy</option>
                                <option value="3">Dental Care</option>
                            </select>
                        </div>
                        <div class="col-xl-6">
                            <select class="form-select wide" id="default-select" class="">
                                <option data-display="Doctors">Doctors</option>
                                <option value="1">Mirazul Alom</option>
                                <option value="2">Monzul Alom</option>
                                <option value="3">Azizul Isalm</option>
                            </select>
                        </div>
                        <div class="col-xl-6">
                            <input type="text"  placeholder="Name"></input>
                        </div>
                        <div class="col-xl-6">
                            <input type="text"  placeholder="Phone no."></input>
                        </div>
                        <div class="col-xl-12">
                            <input type="email"  placeholder="Email"></input>
                        </div>
                        <div class="col-xl-12">
                            <button type="submit" class="boxed-btn3">Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </form>
    {/* form itself end */}

    {/* JS here */}
    {/* <script src="js/vendor/modernizr-3.5.0.min.js"></script>
    <script src="js/vendor/jquery-1.12.4.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/isotope.pkgd.min.js"></script>
    <script src="js/ajax-form.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/imagesloaded.pkgd.min.js"></script>
    <script src="js/scrollIt.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/nice-select.min.js"></script>
    <script src="js/jquery.slicknav.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/gijgo.min.js"></script>
    {/*contact js*/}
    <script src="js/contact.js"></script>
    <script src="js/jquery.ajaxchimp.min.js"></script>
    <script src="js/jquery.form.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/mail-script.js"></script>

    <script src="js/main.js"></script>
    {/* <script>  */}
        {/* $('#datepicker').datepicker({
            iconsLibrary: 'fontawesome',
            icons: {
                rightIcon: '<span class="fa fa-caret-down"></span>'
            }
        }); */}
        {/* $('#datepicker2').datepicker({
            iconsLibrary: 'fontawesome',
            icons: {
                rightIcon: '<span class="fa fa-caret-down"></span>'
            }

        }); */}
    {/* $(document).ready(function() {
    $('.js-example-basic-multiple').select2();
}); */}
    {/* </script> */}
            </div>
           
        )
       
    }

}

export default homeView