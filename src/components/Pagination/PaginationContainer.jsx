import React from "react";
import { Pagination } from 'antd';
import { getAllPhotosThunkCreator } from "../../redux/galleryReducer";
import { connect } from "react-redux";

class PaginationContainer extends React.Component {

    onChange = (page) => {
        debugger
        this.props.getAllPhotosThunkCreator(page, 15);
    }

    render() {
        return  <Pagination onChange = {this.onChange} className='pagination' pageSize={1} total={this.props.countPages} />
    }
}

export default connect((state) => ({...state.gallery}), {getAllPhotosThunkCreator})(PaginationContainer);

// export default connect((state) => ({}), {getAllPhotosThunkCreator})(PaginationContainer);