import React from "react";
import { connect } from "react-redux";
import { getAllPhotosThunkCreator } from "../../redux/galleryReducer";
import Gallery from "./Gallery";
import Preloader from "../Preloader/Preloader"

class GalleryContainer extends React.Component {

    componentDidMount() {
        this.props.getAllPhotosThunkCreator(this.props.currentPage, this.props.limit, this.props.currentItemMenu);
    }

    render() {
        if(this.props.loading) return <Preloader />
        else return <Gallery photos = {this.props.photos}/>;
    }
}

export default connect((state) => ({
    ...state.gallery,
}), {getAllPhotosThunkCreator})(GalleryContainer);