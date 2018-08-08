import React, {Component} from 'react';
import HomeTemplate from './template';
import { connect } from "react-redux";
import { getData } from '../../reducers/gitreducer';
import Info from '../../assets/info.json';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getData(Info.github)
    }

    render() {
        const { details, repos } = this.props;
        return (
            <HomeTemplate 
            details={details}
            repos={repos} 
            experience={Info.experience} 
            education={Info.education} 
            bio={Info.bio}
            name={Info.name}
            position={Info.position}
            home={Info.home}
            email={Info.email}
            phone={Info.phone}
            skills={Info.skills}
            programingLanguages={Info.programing_languages}
            projects={Info.projects}
            username={Info.github}
            />
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