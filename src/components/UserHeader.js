import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from "../action";
import Loader from "./Loader";

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const {user} = this.props;
        return (
            <div>
                {!user ? <Loader/> :
                    <div className="header">
                        Author: {user.name}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
};

export default connect(mapStateToProps, {fetchUser})(UserHeader);