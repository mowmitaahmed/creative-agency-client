import React from 'react';
import './FooterArea.css';

const FooterArea = () => {
    return (
        <div className="footerArea">
            <div className="container">
                <div className="row">

                    {/* Footer Details */}
                     <div className="col-md-5 my-5 pb-3 footerDetails">
                         <h2>Let us handle your project, professionally.</h2>
                         <p className="mt-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                     </div>

                     {/* Footer Form */}
                     <div className="col-md-6 my-5 pb-3 offset-md-1">
                        <form>
                            <div className="form-group">
                                <input style={{height:'60px'}} type="email" placeholder="Your email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input style={{height:'60px'}} type="password" placeholder="Your name / company’s name" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group">
                                <textarea style={{height:'260px'}} className="form-control" placeholder="Your message" id="exampleFormControlTextarea1" rows="6"></textarea>
                            </div>
                            <button type="submit" className="btn btn-brand">Submit</button>
                        </form>
                     </div>
                </div>

                {/* Bottom Footer */}
                <div className="row footerLower">
                    <div className="col-md-12 text-center my-3">
                        <p>copyright Orange labs  {(new Date()).getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterArea;