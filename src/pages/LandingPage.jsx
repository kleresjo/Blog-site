import React from "react";
import OwnerPosts from "../components/OwnerPosts";

const LandingPage = () => {
    return (
    <div className="landingpage">
    <div className="hero">
    <h1 className="hero-title">Välkommen till en otrolig blogg-sida</h1>
    <p className="hero-p">En hemsida man kan blogga på osv osv lorem ipusm osv</p>
    </div>
    <h3 className="h3title">Inlägg från Bloggad</h3>
    <OwnerPosts />
    </div>
    )
};

export default LandingPage;