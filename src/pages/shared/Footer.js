import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-center mt-4">

            <div className="container p-4 pb-0">

                <section className="">
                    <form action="">

                        <div className="row d-flex justify-content-center">

                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong className='text-white'>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">

                                <div className="form-outline mb-4">
                                    <input type="email" id="" className="form-control" placeholder='Your Email' />
                                    <label className="form-label" for="">Email address</label>
                                </div>
                            </div>

                            <div className="col-auto">

                                <Link to='/'>
                                <button className="btn btn-primary mb-4 text-white">
                                    Subscribe
                                </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <div className="text-center text-white p-3">
                © 2022 Copyright: Lit-feather.org
            </div>

        </footer>
    );
};

export default Footer;