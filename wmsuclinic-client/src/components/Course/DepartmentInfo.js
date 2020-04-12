import React, { useState, Component } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AddDepartment from './AddDepartmentInfo';

class DepartmentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // NOTE===========================================
        // Put the fetch api for the account list, store it in a state
    }

    render() { 
        return (
            <div className="content">
                <AddDepartment buttonColor={"primary"} buttonLabel={"Add Department"} modalTitle={"Add Department"}/>
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Pagination size="sm" aria-label="Account table pagination">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}

const Action = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret color="primary">
                Action
            </DropdownToggle>
            <DropdownMenu>
                {/* <DropdownItem header>Header</DropdownItem> */}
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Deactivate</DropdownItem>
                {/* <DropdownItem>Bar Action</DropdownItem> */}
            </DropdownMenu>
        </Dropdown>
    );
}

export default DepartmentInfo;