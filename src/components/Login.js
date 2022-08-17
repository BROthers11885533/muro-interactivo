import React, { useRef, useState } from 'react';
import '../styles/Contacto.css';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { collection, query, where, getDocs } from "firebase/firestore";

function Login({ agregarNuevoContacto }) {
    const LoginUsuarioRef = useRef(null);
    const LoginContraRef = useRef(null);

    const Logearse = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            alert("Ya iniciaste sesión con una cuenta, debes cerrar sesión para entrar en otra");
        }
        else {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, LoginUsuarioRef.current.value, LoginContraRef.current.value)
                .then((userCredential) => {
                    alert("Has iniciado sesión");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode);
                    alert("Credenciales incorrectas");
                });
        }
    }
    const Logout = (e) => {
        const auth = getAuth();
        e.preventDefault();
        auth.signOut().then(() => {
            alert("Cerraste sesión satisfactoriamente")
        });
    }

    return (
        <div id='div-login'>
            <div className="contenedor-login">
                <h3>Iniciar sesión</h3>
                <h4>Usuario</h4><input type="text" ref={LoginUsuarioRef} className="" />
                <h4>Contraseña</h4><input type="password" ref={LoginContraRef} className="" />
                <div className="buttons">
                    <button onClick={Logearse}>Iniciar sesión</button>
                    <button onClick={Logout}>Cerrar Sesión</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
