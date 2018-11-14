import React, { Component } from 'react';
import Coockie from 'js-cookie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestData, getData } from '../actions/data';

class User extends Component {
    componentDidMount() {
        requestData()
    }

    componentDidUpdate() {
        const { user } = this.props;
        if (user.data && user.data.gender) {
            const cell = Coockie.get('cell');
            const gender = Coockie.get('gender');
            const email = Coockie.get('email');
            
            console.log(cell);
            console.log(gender);
            console.log(email);

            window.location = 'https://www.tut.by/';
        }
    }

    render() {
        const { user } = this.props;
        if (user.data && user.data.gender) {
            const date = new Date();
            date.setTime(date.getTime() + (60 * 1000 * 10));
            Coockie.set('cell', user.data.cell, { expires: date });
            Coockie.set('gender', user.data.gender);
            Coockie.set('email', user.data.email);
        }
        if(user.data && user.data.gender) return <div>
            {user.data.gender}
        </div>
        return (
            <div></div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.data,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ requestData, getData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
