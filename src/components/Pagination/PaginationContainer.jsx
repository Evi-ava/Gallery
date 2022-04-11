import React from "react";
import { Pagination } from 'antd';
import { getAllPhotosThunkCreator } from "../../redux/galleryReducer";
import { connect } from "react-redux";

class PaginationContainer extends React.Component {

    onChange = (page) => {
        this.props.getAllPhotosThunkCreator(page, this.props.limit, this.props.currentItemMenu);
    }

    render() {
        return  <Pagination onChange = {this.onChange}  defaultCurrent={1} current={this.props.currentPage} className='pagination' pageSize={1} total={this.props.countPages} />
    }
}

export default connect((state) => ({...state.gallery}), {getAllPhotosThunkCreator})(PaginationContainer);

