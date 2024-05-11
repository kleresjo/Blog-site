import React from "react";
import LatestPosts from "../components/LatestPosts";

const LandingPage = () => {
    return <div>
    <div className="hero">
    <h1 className="hero-title">Välkommen till en otrolig blogg-sida</h1>
    <p className="hero-p">En hemsida man kan blogga på osv osv lorem ipusm osv</p>
    </div>
    <h3 className="h3title">Senaste inläggen</h3>
    <LatestPosts />
    </div>
};

export default LandingPage;