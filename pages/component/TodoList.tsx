import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { connect } from 'react-redux'
import * as actionTypes from '../store/Actions';

const useStyles = makeStyles({
    container: {
        padding: 16
    },
    type :{
        textAlign: 'center',
    }
});

function TodoList({ todoList, setTitle, setItem, setEdit, deleteItem } : Record<string, any>) {
    const classes = useStyles();

    const handleEdit = (item: Record<string, unknown>) => {
        setTitle(item.value);
        setEdit();
        setItem(item);
    }

    const handleDelete = (item: any) => {
        setItem(item);
        deleteItem();
    }
    return (
        <Container className={classes.container} maxWidth="md">
            {!todoList.length
                ?
                <Typography className={classes.type} variant="h6" color="error">No Data to display</Typography>
                :
                (<List>
                    {todoList.map((item: { id: React.Key | null | undefined; value: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
                        return (
                            <ListItem key={item.id} button>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>

                                <ListItemText primary={item.value} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>)
            }
        </Container>
    )

}
const mapStateToProps = (state: { items: any; }) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        setTitle: (title: any) => dispatch(actionTypes.setTitle(title)),
        setItem: (item: any) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item: any) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
