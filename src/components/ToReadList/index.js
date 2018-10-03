import React from 'react';
import {Box, CheckBox, Text, Button, Grid} from 'grommet';
import { FormClose } from 'grommet-icons';

import Loading from '../Loading';

export class ToReadList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            elements: null,
        };
        this.canceler = null;
        this.fetchData.bind(this);
        this.changeRead.bind(this);
        this.deleteElement.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        this.canceler = this.props.db.changes({
            since: 'now',
            live: true,
            include_docs: true,
        }).on('change', () => {
            this.fetchData();
        });
    }

    componentWillUnmount() {
        this.canceler.cancel();
    }

    fetchData() {
        this.setState({
            loading: true,
            elements: null,
        });
        this.props.db.allDocs({
            include_docs: true,
        }).then(result => {
            const rows = result.rows;
            this.setState({
                loading: false,
                elements: rows.map(row => row.doc),
            })
        }).catch((err) =>{
            console.log(err);
        });
    }

    changeRead(e, element) {
        element.read = !element.read;
        this.props.db.put(element);
    }

    deleteElement(element) {
        this.props.db.remove(element);
    }

    render() {
        if (this.state.loading || this.state.elements === null) {
            return <Loading />;
        }
        return (
            <Box>
                <Box
                    direction="row"
                    pad="small"
                    gap="small"
                    align="center"
                >
                    <Grid
                        areas={[
                            { name: 'left', start: [0, 0], end: [0, 0] },
                            { name: 'main', start: [1, 0], end: [1, 0] },
                            { name: 'right', start: [2, 0], end: [2, 0] },
                        ]}
                        columns={['xxsmall', 'flex', 'xsmall']}
                        rows={['full']}
                        gap='small'
                        fill
                    >
                        <Text tag="div" color="dark-4" weight="bold">Read</Text>
                        <Text tag="div" color="dark-4" weight="bold">Book</Text>
                        <Text tag="div" textAlign="center" color="dark-4" weight="bold">Delete</Text>
                    </Grid>
                </Box>
                {this.state.elements.map((element, index) => (
                    <Box
                        border={{ side: 'top', color: 'light-3' }}
                        key={element._id}
                        direction="row"
                        pad="medium"
                        gap="small"
                        align="center"
                    >
                        <CheckBox checked={element.read} onChange={e => this.changeRead(e, element)} />
                        <Box fill>
                            <Text
                                style={{ textDecoration: element.read ? 'line-through' : ''}}
                                color={element.read ? 'light-5' : 'dark-1'}
                            >
                                {element.book}
                            </Text>
                        </Box>
                        <Button icon={<FormClose />} onClick={() => this.deleteElement(element)}/>
                    </Box>
                ))}
            </Box>
        );
    }
}

export default ToReadList;