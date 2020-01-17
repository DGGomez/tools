import React from 'react';

{/* requires bootstrap*/}
function Footer(){
    return (
        <div className = "main-footer">
            <div className="container">
                <div className = "row">
                    {/*column 1*/}
                    <div className= "col-md-3 col-sm-6">
                        <h4>info</h4>
                        <ul className = "list-unstyled">
                            <li>thing</li>
                        </ul>
                    </div>
                    {/*column 2*/}

                    <div className= "col-md-3 col-sm-6">
                        <h4>info</h4>
                        <ul className = "list-unstyled">
                            <li>thing</li>
                        </ul>
                    </div>
                    {/*column 3*/}

                    <div className= "col-md-3 col-sm-6">
                        <h4>info</h4>
                        <ul className = "list-unstyled">
                            <li>thing</li>
                        </ul>
                    </div>
                </div>
                <div className = "footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} The App - All Rights Reserved
                    </p>
                </div>    
            </div>
        </div>
    );
}

export default Footer;