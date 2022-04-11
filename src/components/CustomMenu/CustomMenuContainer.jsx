import React from "react";
import CustomMenu from "./CustomMenu";
import {getAllPhotosThunkCreator} from "../../redux/galleryReducer"
import { connect } from "react-redux";
class CustomMenuContainer extends React.Component {

    setOrder = (menuItem) => {
        this.props.getAllPhotosThunkCreator(1, this.props.limit, menuItem);
    }

    render() { 
        return <CustomMenu setOrder={this.setOrder} currentItemMenu ={this.props.currentItemMenu} />;
    }
}

export default connect((state) => ({...state.gallery}), {getAllPhotosThunkCreator})(CustomMenuContainer);