import React, { useState } from 'react';
import './RegisterPage.css';
function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async () => {
        console.log("Register invoked")
    }
return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="register-card p-4 border rounded">
                    <h2 className="text-center mb-4 font-weight-bold">S'inscrire</h2>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Prénom</label>
                        <input
                            id="firstName"
                            type="text"
                            className="form-control"
                            placeholder="Entrez votre prénom"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    {/* nom de famille */}
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Nom de famille</label>
                        <input
                            id="lastName"
                            type="text"
                            className="form-control"
                            placeholder="Entrez votre nom de famille"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    {/* email  */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            placeholder="Entrez votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>S'inscrire</button>
                    <p className="mt-4 text-center">
                        Déjà membre ? <a href="/app/login" className="text-primary">Connexion</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);
}
export default RegisterPage;