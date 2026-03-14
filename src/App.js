import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Counter from './components/Counter';
import Form from './components/Form';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      {/* <Counter /> */}
      <Form/>
    </Container>
    
  );
}