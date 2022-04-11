import React from "react";
import { connect } from "react-redux";
import { getAllPhotosThunkCreator } from "../../redux/galleryReducer";
import Gallery from "./Gallery"

class GalleryContainer extends React.Component {

    componentDidMount() {
        this.props.getAllPhotosThunkCreator(this.props.currentPage, this.props.limit, this.props.currentItemMenu);
    }

    render() {
        return <Gallery photos = {this.props.photos}/>;
    }
}


export default connect((state) => ({
    ...state.gallery,
}), {getAllPhotosThunkCreator})(GalleryContainer);