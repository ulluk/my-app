import React from "react";

import BlogEntries from "../../BlogEntries";
import IntroductionMenu from "../../IntroductionMenu";
import Footer from "../../Footer";

const Main=()=>{
    return(
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Main