import React, { Component } from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    ImageList,
    ImageListItem,
} from '@mui/material'
import { Close } from '@mui/icons-material'

export default class Preview extends Component {
    state = {
        localFile: [],
        filePreview: [],
    }

    handleClearState = () => this.setState({ localFile: [], filePreview: [] })

    onChangeUploadFile = e => {
        const { files } = e.target
        let filePreview = []
        let localFile = []
        const selected = [...[...files]]
        selected.forEach(i => filePreview.push(URL.createObjectURL(i)))
        selected.forEach(i => localFile.push(i))
        this.setState({
            filePreview: filePreview,
            localFile: localFile,
        })
    }

    render() {
        let localFileLength = this.state.localFile.length
        return (
            <div>
                <Dialog
                    open={this.props.openPreview}
                    onClose={this.props.handleClearState}
                    fullScreen
                >
                    <AppBar sx={{ position: 'relative' }} color="primary">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="close"
                                onClick={() => {
                                    this.props.handleClearState()
                                    this.handleClearState()
                                }}
                            >
                                <Close />
                            </IconButton>
                            <Typography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                            >
                                File Preview
                            </Typography>
                            <Button
                                autoFocus
                                color="inherit"
                                onClick={() => {
                                    if (localFileLength) {
                                        this.props.addPost({
                                            localFile: this.state.localFile,
                                        })
                                    }
                                }}
                            >
                                Upload
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <DialogContent>
                        <Stack
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button variant="contained" component="label">
                                Choose file
                                <input
                                    hidden
                                    accept="image/*"
                                    multiple
                                    type="file"
                                    onChange={this.onChangeUploadFile}
                                />
                            </Button>
                            <p>{localFileLength} files selected</p>
                        </Stack>
                        <ImageList>
                            {this.state.filePreview.map(item => (
                                <ImageListItem key={item}>
                                    <img
                                        style={{
                                            width: '230px',
                                            height: '230px',
                                            // margin: '10px',
                                        }}
                                        src={`${item}`}
                                        srcSet={`${item.files}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}
