// react
import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { NotifySuccess, NotifyError } from '../../redux/actions/notify';
import axios from "axios";

const Verify = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [checkVerify, setCheckVerify] = React.useState(false);
    const [message, setMessage] = React.useState('');
    console.log(params.id);
    console.log(params.token);

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${params.id}/verify/${params.token}`).then(res => {
            setMessage(res.data.message);
            NotifySuccess(res.data.message);
            setCheckVerify(true);
            navigate('/home');
        }
        ).catch(err => {
            setMessage(err.response.data.message);
            NotifyError(err.response.data.message);
            setCheckVerify(true);
            navigate('/auth');
        }
        )
    }, [navigate, params.id, params.token]);

    return (
        <div style={{
            paddingTop: '66px',
            backgroundImage: 'url(/prabandhak.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
        }} >
            <div style={{
                padding: '20px',
                margin: '20% auto',
                textAlign: 'center',
                width: '50%',
                color: 'white',
                letterSpacing: '5px',
                fontSize: '1rem',
                textTransform: 'uppercase',
            }}>
                <div>
                    <h1>{message ? message : 'Click to Verify'}</h1>
                    {checkVerify ? <Link to="/auth"><button style={{
                        backgroundColor: 'rgb(20, 44, 75)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        letterSpacing: '5px',
                        cursor: 'pointer',
                        margin: '10px',

                    }}>Login</button></Link>
                        :
                        <button style={{
                            backgroundColor: 'rgb(20, 44, 75)',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            letterSpacing: '5px',
                            cursor: 'pointer',
                            marginTop: '10px',
                        }}>Verify</button>}
                </div>
            </div>
        </div>
    );
}
export default Verify;