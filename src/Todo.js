import React, {useState} from "react";
import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton,
    }  from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    const deleteEventHandelr = () => {
        deleteItem(item);
    };

    const editEventHandler = (e) => {
        setItem({...item, title: e.target.value});
    };

    const checkboxEventHandler = (e) => {
        editItem({...item, title: e.target.checked});
    }

    const turnOffReadOnly = () => {
            setReadOnly(false);
    };

    const turnOnReadOnly = (e) => {
        if(e.key === "Enter" && readOnly === false){
            setReadOnly(true);
            editItem(item);
        }
    };

    return(
        <ListItem>
            <Checkbox checked = {item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly: readOnly }}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type={"text"}
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullwidth={true}
                    />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label={"Delete Todo"}
                    onClick={deleteEventHandelr} >
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;