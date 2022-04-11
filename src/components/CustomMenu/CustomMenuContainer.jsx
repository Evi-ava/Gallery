import React from "react";
import CustomMenu from "./CustomMenu";
import {getAllPhotosThunkCreator} from "../../redux/galleryReducer"
import { connect } from "react-redux";
class CustomMenuContainer extends React.Component {

    setOrder = (menuItem) => {
        this.props.getAllPhotosThunkCreator();
    }

    render() { 
        return <CustomMenu setOrder={this.setOrder} />;
    }
}

export default connect((state) => ({...state.gallery}), {getAllPhotosThunkCreator})(CustomMenuContainer);