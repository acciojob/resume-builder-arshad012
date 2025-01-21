import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SocialMediaPage = () => {
    return (
        <div>
            <h1>Add your social Accounts</h1>

            <input type="text" name="Social" />

            <button id="next" class="qaf3t2qAXS8ibS7m7tvwI">
                <Link to='/output'>NEXT</Link>
            </button>
        </div>
    )
}

export default SocialMediaPage;