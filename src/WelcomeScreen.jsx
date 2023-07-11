import React from "react";
import '.WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
            <h1>Welcome to the Meet App</h1>
            <h4>
                Log in to see upcoming events around the world for full-stack web developers
            </h4>
            <div className="button_cont" align="center">
            <div class="google-btn">
            <div class="google-icon-wrapper">
            <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikimedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
            />
            </div>
            <button onClick={() => { props.getAccessToken() }}
                rel="nofollow noopener"
                class="btn-text"
            >
            <b>Sign in with Google</b>
            </button>
            </div>
            </div>
            <a
                href="https://ejquezada.github.io/Meet-Application/public/index.html"
                rel="nofollow noopener"
            >
            <a href="https://ejquezada.github.io/Meet-Application/privacy.html">Privacy policy</a>
            </a>
            </div>
        )
        : null
}
export default WelcomeScreen;