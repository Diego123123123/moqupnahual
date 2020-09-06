import React from 'react';
import {Row, Col, FormInput, Button, FormCheckbox, Tooltip, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";
import { useState } from 'react';
import defaultUsers from './content';
import './App.css';
import users from "./content";

class App extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            users: defaultUsers,
            open: false
        }
    }

    handleChange(e, user, index) {
        const newState = this.state.users;
        const newUserCheckedState = !user.isChecked;
        newState[index] = user;
        newState[index].isChecked = newUserCheckedState;
        this.setState({users: newState, open: false});
    }

    checkAllEvent(e) {
        const newUsers = defaultUsers;
        newUsers.map(u => u.isChecked = true);
        this.setState({users: newUsers})
    }

    filter(predicate) {
        const newUsers = defaultUsers;
        newUsers.filter(predicate)
        newUsers.map(u => u.isChecked = true);
        this.setState({users: newUsers})
    }

    render() {
        return (
            <div className="App">
                <div className="navbar-container">
                    <Row>
                        <Col >
                            <img id="image-logo" src="proyecto-nahual.png" style={{height: "2em", marginLeft: "2em", marginTop: "1.5em"}}></img>
                        </Col>
                        <Col className="navlink1 display-4" style={{marginTop: "0.3em"}}>
                            <h2>Egresades</h2>
                        </Col>
                    </Row>
                </div>
                <div className="container usersContainer">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Seleccionar</th>
                            <th scope="col">Nombre completo</th>
                            <th scope="col">Modulos cursados</th>
                            <th scope="col">Sede</th>
                            <th scope="col">Año de egreso</th>
                            <th scope="col">Nivel de ingles</th>
                            <th scope="col">Enlace de CV</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Button onClick={e => this.checkAllEvent(e)}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2-square"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        <path fill-rule="evenodd"
                                              d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
                                    </svg>
                                </Button>
                            </td>
                            <td><FormInput placeholder="Nombre de egresados" /></td>
                            <td><FormInput placeholder="Habilidades" /></td>
                            <td><FormInput placeholder="Sede" /></td>
                            <td>
                                <Dropdown open={this.state.open} toggle={this.toggle} group>
                                    <Button>Dropdown</Button>
                                    <DropdownToggle split />
                                    <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </td>
                            <td><FormInput placeholder="Nivel de ingles" /></td>
                            <td></td>
                        </tr>
                        {this.state.users.map((user, index) =>
                            <tr key={index}>
                                <td>
                                    <FormCheckbox
                                        checked={user.isChecked}
                                        onChange={e => this.handleChange(e, user, index)}
                                    >
                                    </FormCheckbox>
                                </td>
                                <td>{user.fullName}</td>
                                <td>{user.skills}</td>
                                <td>{user.node}</td>
                                <td>{user.year}</td>
                                <td>{user.englishLevel}</td>
                                <td>{user.CVProfile}</td>
                            </tr>
                        )
                        }
                        </tbody>
                    </table>
                    <div className="paginationContainer">
                        <Button id="TooltipExample" >
                            Exportar
                        </Button>
                        <Tooltip
                            open={this.state.open}
                            target="#TooltipExample"
                            toggle={e =>
                                (this.setState({
                                    open: !this.state.open
                                }))}
                        >
                            Exportar archivo pdf 📁
                        </Tooltip>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
