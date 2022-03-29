import React from 'react';
import AddApp from './AddApp';
import './ListApp.scss';
import { toast } from 'react-toastify';


class ListApp extends React.Component {

    state = {
        listApps: [
            { id: 'app1', title: 'Playing game' },
            { id: 'app2', title: 'Watching TV' },
            { id: 'app3', title: 'Sleeping' }
        ],
        editApp: {}
    }

    addNewApp = (app) => {
        // let currentListApp = this.state.listApps;
        // currentListApp.push(app);
        this.setState({
            listApps: [...this.state.listApps, app],
            // listApps: currentListApp
        })

        toast.success("Create Successful!");
    }

    handleDeleteApp = (app) => {
        let currentApps = this.state.listApps;
        currentApps = currentApps.filter(item => item.id !== app.id);
        this.setState({
            listApps: currentApps
        })
        toast.success("Delete Successful!");
    }

    handleEditApp = (app) => {
        let { editApp, listApps } = this.state;
        let isEmptyObj = Object.keys(editApp).length === 0;
        if (isEmptyObj === false && editApp.id === app.id) {

            let listAppsCopy = [...listApps]
            let objIndex = listAppsCopy.findIndex((item => item.id === app.id));

            listAppsCopy[objIndex].title = editApp.title;

            this.setState({
                listApps: listAppsCopy,
                editApp: {}
            })
            toast.success("Update Successful!");
            return;
        }
        this.setState({
            editApp: app
        })
    }

    handleOnchangeEditApp = (event) => {
        let editAppCopy = { ...this.state.editApp };
        editAppCopy.title = event.target.value;
        this.setState({
            editApp: editAppCopy
        })
    }
    render() {
        let { listApps, editApp } = this.state;

        let isEmptyObj = Object.keys(editApp).length === 0;
        console.log('check');
        return (
            <>
                <p>
                    CRUD APP
                </p>
                <div className="list-app-container">
                    <AddApp
                        addNewApp={this.addNewApp}
                    />
                    <div className="list-app-content">
                        {listApps && listApps.length > 0 &&
                            listApps.map((item, index) => {
                                return (
                                    <div className="app-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title} </span>
                                            // {/* <input value={item.title} /> */}
                                            :
                                            <>
                                                {editApp.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editApp.title}
                                                            onChange={(event) => this.handleOnchangeEditApp(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditApp(item)}
                                        >
                                            {isEmptyObj === false && editApp.id === item.id ?
                                                'Save' : 'Edit'
                                            }

                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteApp(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default ListApp;