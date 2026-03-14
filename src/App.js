import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Counter from './components/Counter';
import Form from './components/Form';
import { useState } from 'react';
import Button from './components/Button';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <Container>
      {/* <Counter /> */}
      {/* <Form/> */}
      <Button
        title={isVisible ? 'Hide': 'Show'}
        onPress={() => setIsVisible(prev =>!prev)}  
      />
      {isVisible && <Form/>}
    </Container>
    
  );
}