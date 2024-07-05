import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Form() {
    const location = useLocation();
    const initialState = location.state || { name: '', email: '' }; // locationからstateを取得、なければ初期値を設定
    const [name, setName] = useState(initialState.name);
    const [email, setEmail] = useState(initialState.email);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/form/confirm', { state: { name, email } });
    };

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit">確認画面へ</button>
            </form>
        </>
    );
}

export default Form;