import React from "react";
import { getAllPhotos } from "../../api/api";
import Gallery from "./Gallery"

class GalleryContainer extends React.Component {

    componentDidMount() {
        getAllPhotos()
        .then(response => {
            debugger;
        },
        error => {
            debugger
        })
    }

    render() {
        return <Gallery />;
    }
}

export default GalleryContainer;