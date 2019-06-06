import React from 'react';
import { View, Button, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as RepositoryActions from '../../store/repositories/actions'

const styles = {
    container: {
        flex: 1,
        background: "#7159c1",
        justifyContent: "center",
        alignItems: "center"
    },

    repo: {
        padding: 10,
        borderRadius: 4,
        margin: 10,
        borderWidth: 1
    }
};

const RepositoryList = ({ repositories, addRepositoryRequest }) => (
    <View style={styles.container}>
        {repositories.map((repository, index) => (
            <View style={styles.repo} key={index}>
                <Text>{repository.name}</Text>
                <Text>{repository.description}</Text>
            </View>
        ))}

        <Button title="Adicionar" onPress={() => addRepositoryRequest("facebook/react")} />
    </View>
);

const mapStateToProps = state => ({
    repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)