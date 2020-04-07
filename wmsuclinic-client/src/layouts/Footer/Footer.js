import React, { Component } from 'react';

class Footer extends Component {
    
    render() { 
        return (
            <footer className="footer footer-black  footer-white ">
                <div className="container-fluid">
                    <div className="row">
                        <nav className="footer-nav">
                            <ul>
                                <li><a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">Creative Tim</a></li>
                                <li><a href="https://www.creative-tim.com/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
                                <li><a href="https://www.creative-tim.com/license" target="_blank" rel="noopener noreferrer">Licenses</a></li>
                            </ul>
                        </nav>
                        <div className="credits ml-auto">
                            <span className="copyright">
                                © <script>
                                document.write(new Date().getFullYear())
                                </script>, made with <i className="fa fa-heart heart"></i> by Creative Tim
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;