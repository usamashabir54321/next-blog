'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	const [err, setErr] = useState(false);
	const router = useRouter();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Create the user object
        const user = {
            username: username,
            password: password,
        };
        // Send the Fetch request
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/custom/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((data) => {
			// if user login successfully then user storage and magazines push
			if (data == 'err') setErr(true);
			else {
				localStorage.setItem('user', JSON.stringify(data.user.data));
				router.push('/magazines');
			}
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
								{ err && <p style={{ color: 'red' }}><small>Credentials are not matching. <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/membership-account/membership-levels`} target="_blank">Signup here</a></small></p>}
                                <div className="search_form_wrap">
                                    <form role="search" className="search_form" onSubmit={(e) => handleLoginSubmit(e)}>
                                        <div className="mt-1">
                                            <label>صارف کا نام یا ای میل درج کریں۔</label><br/>
                                            <input type="text" className="search_field mt-1" placeholder="نام یا ای میل" onChange={(e) => setUsername(e.target.value)} required /><br />
                                        </div>
                                        <div className="mt-1">
                                            <label>پاس ورڈ درج کریں</label><br/>
                                            <input type="password" className="search_field mt-1" placeholder="پاس ورڈ" onChange={(e) => setPassword(e.target.value)} required /><br/>
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