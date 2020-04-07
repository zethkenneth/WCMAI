import React, { Component, useState } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import AddAccount from './AddAccount';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() { 
        return (
            <div className="content">
                <AddAccount buttonColor={"primary"} buttonLabel={"Add Account"} modalTitle={"Add Account"}/>
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Account Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dakota Rice</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Minerva Hooper</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Sage Rodriguez</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Philip Chaney</td>
                            <td>Korea, South</td>
                            <td>Overland Park</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Sage Rodriguez</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Philip Chaney</td>
                            <td>Korea, South</td>
                            <td>Overland Park</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                        <tr>
                            <td>Sage Rodriguez</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
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
 
export default Account;