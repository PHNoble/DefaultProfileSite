import React, {Component} from 'react';
import HomeTemplate from './template';
import { connect } from "react-redux";
import { getData } from '../../reducers/gitreducer';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getData('christerence')
    }

    render() {
        return (
            <HomeTemplate />
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);