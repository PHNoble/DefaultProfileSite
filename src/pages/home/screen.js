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
        const { details, repos } = this.props;
        return (
            <HomeTemplate details={details} repos={repos}/>
        )
    }
}

const mapStateToProps = state => ({
    details: state.git.details,
    repos: state.git.repos
});

const mapDispatchToProps = {
    getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);