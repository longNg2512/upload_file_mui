import React, { Component } from 'react'
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Button,
    Stack,
    Pagination,
    Box,
    CircularProgress,
} from '@mui/material'
import Preview from './dialog/Preview'

export default class Post extends Component {
    state = {
        openPreview: false,
    }

    handleClearState = () => {
        this.setState({ openPreview: false })
    }

    handleOpenPreview = () => {
        this.setState({ openPreview: true })
    }
    render() {
        if (this.props.postLoading) {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CircularProgress size={100} />
                </Box>
            )
        }
        return (
            <div>
                <div>
                    {/* Dialog */}
                    <Preview
                        {...this.state}
                        handleClearState={this.handleClearState}
                        addPost={this.props.addPost}
                    />
                </div>
                <div>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button
                            onClick={this.handleOpenPreview}
                            variant="contained"
                        >
                            Choose File
                        </Button>
                    </Stack>
                </div>
                <div>
                    {this.props.listPost.map(post => (
                        <ImageList key={post._id} sx={{ width: 500 }}>
                            {post.files.map((file, key) => (
                                <ImageListItem key={key}>
                                    <img
                                        style={{
                                            width: '230px',
                                            height: '230px',
                                            // margin: '10px',
                                        }}
                                        src={file}
                                        srcSet={`${file}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={'error'}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    ))}
                    {/* </ImageList> */}
                </div>
                <Stack spacing={2} style={{ marginTop: '3em' }}>
                    <Pagination
                        color="primary"
                        count={this.props.totalPage}
                        page={this.props.activePage}
                        onChange={(event, page) => {
                            if (page !== this.props.activePage) {
                                if (this.props.textSearch) {
                                    this.props.searchPaginationPost({
                                        textSearch: this.props.textSearch,
                                        activePage: page,
                                    })
                                } else {
                                    this.props.paginationPost({
                                        activePage: page,
                                    })
                                }
                            }
                        }}
                    />
                </Stack>
            </div>
        )
    }
}
