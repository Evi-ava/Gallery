import React from "react";
import { connect } from "react-redux";
import { getAllPhotosThunkCreator } from "../../redux/galleryReducer";
import Preloader from "../Preloader/Preloader";

class GalleryContainer extends React.Component {

    componentDidMount() {
        this.props.getAllPhotosThunkCreator(this.props.currentPage, this.props.limit, this.props.currentItemMenu);
    }

    render() {
        return <Preloader />
    }
}

export default connect((state) => ({
    ...state.gallery,
}), {getAllPhotosThunkCreator})(GalleryContainer);