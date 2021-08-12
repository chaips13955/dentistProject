import React , {Component} from 'react'


class homeServiceComponents extends Component{
    render(){
        return(
            <div>
                {/* service_area_start */}
                <div class="service_area">
                    <div class="container p-0">
                        <div class="row no-gutters">
                            <div class="col-xl-4 col-md-4">
                                <div class="single_service">
                                    <div class="icon">
                                        <i class="flaticon-electrocardiogram"></i>
                                    </div>
                                    <h3>Hospitality</h3>
                                    <p>Clinical excellence must be the priority for any health care service provider.</p>
                                    <a href="#" class="boxed-btn3-white">Apply For a Bed</a>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4">
                                <div class="single_service">
                                    <div class="icon">
                                        <i class="flaticon-emergency-call"></i>
                                    </div>
                                    <h3>Emergency Care</h3>
                                    <p>Clinical excellence must be the priority for any health care service provider.</p>
                                    <a href="#" class="boxed-btn3-white">+10 672 356 3567</a>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4">
                                <div class="single_service">
                                    <div class="icon">
                                        <i class="flaticon-first-aid-kit"></i>
                                    </div>
                                    <h3>Chamber Service</h3>
                                    <p>Clinical excellence must be the priority for any health care service provider.</p>
                                    <a href="#" class="boxed-btn3-white">Make an Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* service_area_end */}
            </div>

        )
    }
}

export default homeServiceComponents