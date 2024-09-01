import React from "react";
import WorkCard from "./WorkCard";
import nextrio from "../assets/nextrio.png";
import inv from "../assets/inv.png";
import b2b from "../assets/b2b.png";
import goodluck from "../assets/goodluck.png";
import terra from "../assets/terra.png";
import irctc from "../assets/irctc.png";
import nextriov from "../assets/nextrio-video.webm";
import invv from "../assets/inv-video.webm";
import b2bvv from "../assets/b2b-video.webm";
import goodluckv from "../assets/goodluck-video.webm";
import irctcv from "../assets/irctc-video.webm";
import artiqv from "../assets/Artiq.webm";
import bhoomikav from "../assets/Bhoomika.webm";
import bhoomika from "../assets/bhoomika.jpeg";
import artiq from "../assets/artiq.jpeg";

function WorkData(){

    return(

        <div id="work" className="workdata">
            <h3>My Works</h3>

            <WorkCard  text="In-progress" video={artiqv} url={artiq} head3="Artiq Design Studio Landing Page" paratop="[Freelance Project]" paradown="Created a visually captivating landing page for Artiq Design Studio, showcasing their range of design services." />
            <WorkCard  text="In-progress" video={bhoomikav} url={bhoomika} head3="Real Estate Website Development" paratop="[Freelance Project]" paradown="Developed a comprehensive real estate platform designed to streamline property transactions. The website allows users to seamlessly list properties for sale, make inquiries, and book viewings." />
            <WorkCard link="https://www.behance.net/gallery/189306259/Case-Study-The-Next-gen-payment-method-landing-page" hoverEffect="hovereffect" text="Case Study" video={nextriov} url={nextrio} head3="Nextrio" paratop="[Freelance Project]" paradown="Revolutionize your payment experience with our Next Gen Payment Method Landing Page. Seamlessly blending innovation and convenience, we're shaping the future of digital transactions." />
            <WorkCard link="https://www.behance.net/gallery/189442577/Case-Study-Inventory-management-dashboard-design" hoverEffect="hovereffect" text="Case Study" video={invv} url={inv} head3="INV Dashboard " paratop="[Freelance Project]" paradown="Efficiently manage inventory, suppliers, orders, and generate insightful reports with our comprehensive Inventory Management System." />
            <WorkCard link="https://www.behance.net/gallery/189443037/Case-Study-B2B-E-commerce-website" hoverEffect="hovereffect" text="Case Study" video={b2bvv} url={b2b} head3="B2B E-commerce Website " paratop="[Freelance Project]" paradown="Elevate B2B transactions with our meticulously crafted ecommerce website design, tailored for seamless business-to-business interactions." />
            <WorkCard link="https://www.behance.net/gallery/191041807/Re-designed-Login-page-for-IRCTC-Rail-Connect-App" hoverEffect="hovereffect" text="Case Study" video={irctcv} url={irctc} head3="IRCTC Rail Connect Login Page " paratop="[Freelance Project]" paradown="Revolutionized the IRCTC Rail Connect app login page with a contemporary redesign, enhancing user experience and functionality." />
            <WorkCard  text="In-progress" video={goodluckv} url={goodluck} head3="Good Luck" paratop="[Freelance Project]" paradown="Your’s ultimate giveaway companion app where users can effortlessly create, join, and select winners for exciting giveaways." />
            <WorkCard  text="In-progress" url={terra} head3="Terra-One" paratop="[Company Project]" paradown="Your all-in-one warehouse management solution simplifies inventory tracking and logistics, ensuring smooth operations and optimal efficiency for your business." />

        </div>

    );

}

export default WorkData;