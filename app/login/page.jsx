'use client';
import { useState } from "react";
import btoa from "btoa";

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Create the user object
        const user = {
            username: username,
            email: email,
            password: password,
        };
        // Send the Fetch request
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/user_request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response
            console.log(data);
        })
        .catch((error) => {
            // Handle the error
            console.error('Error:', error);
        });
    };
    return (
        <>
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="sc_content content_wrap py-5">
                                <h3>لاگ ان صفحہ :</h3>
                                <div className="search_form_wrap">
                                    <form role="search" className="search_form" onSubmit={(e) => handleLoginSubmit(e)}>
                                        <div className="mt-1">
                                            <label>Enter User Name</label><br/>
                                            <input type="text" className="search_field mt-1" placeholder="Enter User Name" onChange={(e) => setUsername(e.target.value)} required /><br />
                                        </div>
                                        <div className="mt-1">
                                            <label>Enter Email</label><br/>
                                            <input type="text" className="search_field mt-1" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required /><br />
                                        </div>
                                        <div className="mt-1">
                                            <label>Enter Password</label><br/>
                                            <input type="password" className="search_field mt-1" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required /><br/>
                                        </div>
                                        <div className="mt-1"><button>لاگ ان کریں</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;