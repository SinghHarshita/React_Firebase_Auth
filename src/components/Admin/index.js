import React, { Component } from 'react';
 
// import * as ROLES from '../../constants/roles';

// import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
 
class AdminPage extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
     
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
 
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;

        return (
            <div className="container">
                <h1>Admin</h1>

                {loading && <div className="container">Loading....</div>}

                <UserList users={users}/>
            </div>
        );
    }
}

const UserList = ({ users }) => (
    <table>
        <thead>
            <tr>
                <th>UID</th>
                <th>Email</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.uid}>
                    <td>
                        <strong>{user.uid}</strong>
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        {user.username}
                    </td>
                </tr>
            ))}    
        </tbody>
    </table>
);

export default withFirebase(AdminPage);