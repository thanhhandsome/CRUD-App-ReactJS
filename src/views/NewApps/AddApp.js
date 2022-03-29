import React from "react";
import { toast } from 'react-toastify';

class AddApp extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddApp = () => {
        if (!this.state.title) {
            toast.error("Emtpy title!");
            return;
        }
        let app = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }

        this.props.addNewApp(app);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-app">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddApp()}
                >Add</button>
            </div>
        )
    }
}

export default AddApp;