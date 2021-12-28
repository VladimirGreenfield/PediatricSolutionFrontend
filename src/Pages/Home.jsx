import React, {Component} from "react";
import Navbar from "../Components/Navbar";
import Lowerbar from "../Components/Lowerbar";


class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Lowerbar />
            </div>
        )
    };

}

export default Home;