import React, {Component} from 'react';
import HomeTemplate from './template';
import { connect } from "react-redux";
import { getData } from '../../reducers/gitreducer';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import Info from '../../assets/info.json';
import Theme from '../../assets/theme.json';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getData(Info.github)
    }

    render() {
        const theme = createMuiTheme(Theme);
        const { details, repos } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <HomeTemplate 
                    theme={theme}
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
                />
            </MuiThemeProvider>
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