import React, { Component } from 'react'
import PostContainer from '../container/Post'
import Grid2 from '@mui/material/Unstable_Grid2'

export default class Post extends Component {
    render() {
        return (
            <div>
                <Grid2
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    // style={{ minHeight: '100vh' }}
                >
                    <PostContainer />
                </Grid2>
            </div>
        )
    }
}
