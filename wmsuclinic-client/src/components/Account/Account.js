import React, { Component, useState } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import AddAccount from './AddAccount';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AccountList: []
        }
    }

    onLoadList = async () =>{
        
        try {
            const response = await fetch("http://localhost:5000/settings/account");
            const jsonData = await response.json();

            this.setState({
                AccountList: jsonData
            });

           
        } catch (error) {
            console.error(error.message);
        }
    }

    componentDidMount() {
        // NOTE===========================================
        // Put the fetch api for the account list, store it in a state
        this.onLoadList();
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
                    {/*     <tr>
                            <td>Dakota Rice</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                            <td>
                                <Action />
                            </td>
                     </tr> */}
                     {this.state.AccountList.map(Acc => (
                            <tr key={Acc.account_id}>
                                <td>{Acc.account_name}</td>
                                <td>{Acc.account_username}</td>
                                <td>{Acc.account_type}</td>
                                <td>
                                    <Action />
                                </td>
                            </tr>
                     ))}
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