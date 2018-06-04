import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class SearchScreen extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor: "#c71101"}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content style={{ padding: 5}}>
            <Button block onPress={() => {Actions.pop()}} style={{backgroundColor: "#c71101"}}>
                <Text>Back</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}