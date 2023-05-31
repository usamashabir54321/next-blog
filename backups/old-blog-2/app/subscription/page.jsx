
const Subscription = () => {
    return (
        <>
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="sc_content content_wrap py-5">
                                <h3>My Subscription Plans :</h3>
                                <div id="subscription-div" className="mt-1">
                                    <div className="card sub-plan">
                                        <h4 className="title">Basic</h4>
                                        <p>Per Month</p>
                                        <p>Price : 3$</p>
                                        <button>Buy</button>
                                    </div>
                                    <div className="card sub-plan">
                                        <h4 className="title">Standard</h4>
                                        <p>6 Months</p>
                                        <p>Price : 5$</p>
                                        <button>Buy</button>
                                    </div>
                                    <div className="card sub-plan">
                                        <h4 className="title">Premium</h4>
                                        <p>Per Year</p>
                                        <p>Price : 12$</p>
                                        <button>Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Subscription;