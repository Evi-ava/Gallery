import React from "react";
import { connect } from "react-redux";
import { getAllPhotosThunkCreator } from "../../redux/galleryReducer";
import Gallery from "./Gallery"

class GalleryContainer extends React.Component {

    componentDidMount() {
        this.props.getAllPhotosThunkCreator();
    }

    render() {
        return <Gallery photos = {this.props.photos}/>;
    }
}


export default connect((state) => ({
    ...state.gallery,
}), {getAllPhotosThunkCreator})(GalleryContainer);