import React from 'react';
import {
    Row,
    Col,
    FormInput,
    Button,
    FormCheckbox,
    Tooltip,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal,
    ModalBody,
    ModalHeader,
    Alert,
    Badge,
    ButtonGroup
} from "shards-react";
import defaultUsers from './content';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.checkAllEvent = this.checkAllEvent.bind(this);
        this.filter = this.filter.bind(this);
        this.changeYear = this.changeYear.bind(this);
        this.changeEnglish = this.changeEnglish.bind(this);
        this.toggleHeadquarter = this.toggleHeadquarter.bind(this);
        this.toggleEnglishLevel = this.toggleEnglishLevel.bind(this);
        this.userNameLastNameChange = this.userNameLastNameChange.bind(this);
        this.toggleSkill = this.toggleSkill.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            users: defaultUsers,
            open: false,
            areAllUsersChecked: false,
            isExportButton: false,
            currentYear: "Todos",
            isHeadquarteropen: false,
            currentHeadquarter: "Todos",
            isEnglishLevelOpened: false,
            currentEnglishLevel: "Todos",
            isSkillsOpen: false,
            currentSkill: "Todos",
            userNameLastName: "",
            isModalOpened: false
        }
    }

    handleChange(e, user, index) {
        const newState = this.state.users;
        const newUserCheckedState = !user.isChecked;
        newState[index] = user;
        newState[index].isChecked = newUserCheckedState;
        this.setState({users: newState, open: false});
    }

    userNameLastNameChange(event) {
        let newUsers = defaultUsers;
        newUsers = newUsers.filter((this.state.currentEnglishLevel === "Todos") ? (u => u.englishLevel != null) : (u => u.englishLevel === this.state.currentEnglishLevel))
        newUsers = newUsers.filter((this.state.currentSkill === "Todos") ? (u => u.skills != null) : (u => u.skills === this.state.currentSkill))
        newUsers = newUsers.filter((this.state.currentYear === "Todos") ? (u => u.year != null) : (u => u.year === this.state.currentYear))
        newUsers = newUsers.filter((this.state.currentHeadquarter === "Todos") ? (u => u.node != null) : (u => u.node === this.state.currentHeadquarter))
        newUsers = newUsers.filter(u => u.fullName.includes(event.target.value))
        this.setState({
            users: newUsers,
            userNameLastName: event.target.value
        })
    }

    checkAllEvent(e) {
        let newUsers = this.state.users;
        if (this.state.areAllUsersChecked === false) {
            newUsers.map(u => u.isChecked = true);
            this.setState({users: newUsers})
        } else {
            newUsers.map(u => u.isChecked = false);
            this.setState({users: newUsers})
        }
        this.setState({areAllUsersChecked: !this.state.areAllUsersChecked})

    }

    toggle() {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    }

    filter() {
        let newUsers = defaultUsers;
        newUsers = newUsers.filter((this.state.currentEnglishLevel === "Todos") ? (u => u.englishLevel != null) : (u => u.englishLevel === this.state.currentEnglishLevel))
        newUsers = newUsers.filter((this.state.currentSkill === "Todos") ? (u => u.skills != null) : (u => u.skills === this.state.currentSkill))
        newUsers = newUsers.filter((this.state.currentYear === "Todos") ? (u => u.year != null) : (u => u.year === this.state.currentYear))
        newUsers = newUsers.filter((this.state.currentHeadquarter === "Todos") ? (u => u.node != null) : (u => u.node === this.state.currentHeadquarter))
        newUsers = newUsers.filter(u => u.fullName.includes(this.state.userNameLastName))
        this.setState({users: newUsers})
    }

    changeYear(e, value) {
        let newUsers = defaultUsers;
        newUsers = newUsers.filter((this.state.currentEnglishLevel === "Todos") ? (u => u.englishLevel != null) : (u => u.englishLevel === this.state.currentEnglishLevel))
        newUsers = newUsers.filter((this.state.currentSkill === "Todos") ? (u => u.skills != null) : (u => u.skills === this.state.currentSkill))
        newUsers = newUsers.filter((value === "Todos") ? (u => u.year != null) : (u => u.year === value))
        newUsers = newUsers.filter((this.state.currentHeadquarter === "Todos") ? (u => u.node != null) : (u => u.node === this.state.currentHeadquarter))
        newUsers = newUsers.filter(u => u.fullName.includes(this.state.userNameLastName))
        this.setState({
            users: newUsers,
            currentYear: value
        });
    }

    changeEnglish(e, value) {
        let newUsers = defaultUsers;
        newUsers = newUsers.filter((value === "Todos") ? (u => u.englishLevel != null) : (u => u.englishLevel === value))
        newUsers = newUsers.filter((this.state.currentSkill === "Todos") ? (u => u.skills != null) : (u => u.skills === this.state.currentSkill))
        newUsers = newUsers.filter((this.state.currentYear === "Todos") ? (u => u.year != null) : (u => u.year === this.state.currentYear))
        newUsers = newUsers.filter((this.state.currentHeadquarter === "Todos") ? (u => u.node != null) : (u => u.node === this.state.currentHeadquarter))
        newUsers = newUsers.filter(u => u.fullName.includes(this.state.userNameLastName))
        this.setState({
            users: newUsers,
            currentEnglishLevel: value
        });
    }

    changeHeadquarter(e, value) {
        let newUsers = defaultUsers;
        newUsers = newUsers.filter((this.state.currentEnglishLevel === "Todos") ? (u => u.englishLevel != null) : (u => u.englishLevel === this.state.currentEnglishLevel))
        newUsers = newUsers.filter((this.state.currentSkill === "Todos") ? (u => u.skills != null) : (u => u.skills === this.state.currentSkill))
        newUsers = newUsers.filter((this.state.currentYear === "Todos") ? (u => u.year != null) : (u => u.year === this.state.currentYear))
        newUsers = newUsers.filter((value === "Todos") ? (u => u.node != null) : (u => u.node === value))
        newUsers = newUsers.filter(u => u.fullName.includes(this.state.userNameLastName))
        this.setState({
            users: newUsers,
            currentHeadquarter: value
        });
    }

    changeSkill(e, value) {
        let newUsers = defaultUsers;
        newUsers = newUsers.filter((this.state.currentEnglishLevel === "Todos") ? (u => u.englishLevel != null) : (u => u.englishLevel === this.state.currentEnglishLevel))
        newUsers = newUsers.filter((value === "Todos") ? (u => u.skills != null) : (u => u.skills === value))
        newUsers = newUsers.filter((this.state.currentYear === "Todos") ? (u => u.year != null) : (u => u.year === this.state.currentYear))
        newUsers = newUsers.filter((this.state.currentHeadquarter === "Todos") ? (u => u.node != null) : (u => u.node === this.state.currentHeadquarter))
        newUsers = newUsers.filter(u => u.fullName.includes(this.state.userNameLastName))
        this.setState({
            users: newUsers,
            currentSkill: value
        });
    }

    toggleHeadquarter() {
        this.setState(prevState => {
            return { isHeadquarteropen: !prevState.isHeadquarteropen };
        });
    }

    toggleSkill() {
        this.setState(prevState => {
            return { isSkillsOpen: !prevState.isSkillsOpen };
        });
    }

    toggleEnglishLevel() {
        this.setState(prevState => {
            return { isEnglishLevelOpened: !prevState.isEnglishLevelOpened };
        });
    }

    toggleModal() {
        this.setState({
            isModalOpened: !this.state.isModalOpened
        });
    }

    render() {
        return (
            <div className="App">
                <Modal open={this.state.isModalOpened} toggle={this.toggleModal}>
                    <ModalHeader>Egresade</ModalHeader>
                    <ModalBody>
                        <Alert theme="light">
                            <a className="alert-link" href="#">
                                Nombre Completo &nbsp;
                            </a>
                            Ivy Sejas Rocabado
                        </Alert>
                        <Alert theme="light">
                            <a className="alert-link" href="#">
                                Nodo &nbsp;
                            </a>
                            Cochabamba
                        </Alert>
                        <Alert theme="light">
                            <a className="alert-link" href="#">
                                Sede &nbsp;
                            </a>
                            Cercado
                        </Alert>
                        <Alert theme="light">
                            <a className="alert-link" href="#">
                                Año de egreso &nbsp;
                            </a>
                            2020
                        </Alert>
                        <Alert theme="light">
                            <a className="alert-link" href="#">
                                Nivel de ingles &nbsp;
                            </a>
                            Intermedio
                        </Alert>
                        <Alert theme="light">
                            <a className="alert-link" href="#">
                                Modulos cursados &nbsp;
                            </a>
                            <Badge pill theme="success">
                                Testing funcional
                            </Badge>
                            <Badge pill theme="success">
                                Testing Automation
                            </Badge>
                        </Alert>

                        <ButtonGroup className="mr-12" style={{display: "flex"}}>
                            <Button>Exportar</Button>
                            <Button theme="success" >Ver CV</Button>
                        </ButtonGroup>
                    </ModalBody>
                </Modal>
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
                            <td><FormInput placeholder="Nombre de egresados" value={this.state.userNameLastName} onChange={this.userNameLastNameChange}  /></td>
                            <td>
                                <Dropdown open={this.state.isSkillsOpen} toggle={this.toggleSkill} group>
                                    <Button>{this.state.currentSkill}</Button>
                                    <DropdownToggle split />
                                    <DropdownMenu>
                                        <DropdownItem onClick={ e => this.changeSkill(e, "Todos")}>Todos</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeSkill(e,"Testing funcional")}>Testing funcional</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeSkill(e,"Introduccion a la programacion")}>Introduccion a la programacion</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeSkill(e,"Alfabetizacion digital")}>Alfabetizacion digital</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeSkill(e,"Testing automation")}>Testing automation</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </td>
                            <td>
                                <Dropdown open={this.state.isHeadquarteropen} toggle={this.toggleHeadquarter} group>
                                    <Button>{this.state.currentHeadquarter}</Button>
                                    <DropdownToggle split />
                                    <DropdownMenu>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e, "Todos")}>Todos</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e,"Los pinos")}>Los pinos</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e,"Los olivos")}>Los olivos</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e,"La cancha")}>La cancha</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e,"Wakanda")}>Wakanda</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e,"Las frutillas")}>Las frutillas</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e,"Tomatitas")}>Tomatitas</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeHeadquarter(e,"Cerro sumk'orko")}>Cerro sumk'orko</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </td>
                            <td>
                                <Dropdown open={this.state.open} toggle={this.toggle} group>
                                    <Button>{this.state.currentYear}</Button>
                                    <DropdownToggle split />
                                    <DropdownMenu>
                                        <DropdownItem onClick={ e => this.changeYear(e, "Todos")}>Todos</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeYear(e,2018)}>2018</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeYear(e,2019)}>2019</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeYear(e,2020)}>2020</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </td>
                            <td>
                                <Dropdown open={this.state.isEnglishLevelOpened} toggle={this.toggleEnglishLevel} group>
                                    <Button>{this.state.currentEnglishLevel}</Button>
                                    <DropdownToggle split />
                                    <DropdownMenu>
                                        <DropdownItem onClick={ e => this.changeEnglish(e, "Todos")}>Todos</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeEnglish(e,"Basico")}>Basico</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeEnglish(e,"Intermedio")}>Intermedio</DropdownItem>
                                        <DropdownItem onClick={ e => this.changeEnglish(e,"Avanzado")}>Avanzado</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </td>
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
                                <td>
                                    <Button outline pill onClick={this.toggleModal} >
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path
                                                d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
                                            <circle cx="8" cy="4.5" r="1"/>
                                        </svg>
                                    </Button>
                                </td>
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
                            open={this.state.isExportButton}
                            target="#TooltipExample"
                            toggle={e =>
                                (this.setState({
                                    isExportButton: !this.state.isExportButton
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
