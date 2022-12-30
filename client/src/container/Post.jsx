import React, { Component } from 'react'
import PostComponent from '../components/Post'
import * as actions from '../actions/actions'
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        return (
            <div>
                <PostComponent {...this.props} />
            </div>
        )
    }
    componentDidMount() {
        this.props.paginationPost({ activePage: 1 })
    }
}

const mapDispatchToProps = dispatch => ({
    paginationPost: data => {
        dispatch(actions.paginationPostRequest(data))
    },
    addPost: data => {
        dispatch(actions.addPostRequest(data))
    },
})

const mapStateToProps = state => ({
    listPost: state.post.listPost,
    activePage: state.post.activePage,
    totalPage: state.post.totalPage,
    postLoading: state.post.postLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
