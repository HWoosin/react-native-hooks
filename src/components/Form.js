import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorrect: false
})`
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 20px;
`;

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

 const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // useEffect(() => {//useEffect는 컴포넌트가 랜더링될 때마다 원하는 작업이 실행하도록 설정 가능.
    //     // 첫번째 파라미터로 전달된 함수는 조건을 만족할때 호출, 두번째 파라미터로 전달되는 배열을 이용해 함수가 호출되는 조건설정 가능.
    //     console.log(`name: ${name}, email: ${email}\n`);
    // },[email]);//해당 상태관리하는 변수전달. -> email이 변경될때마다 동작함.
    // useEffect(() => {
    //     console.log('\n==== Form Component Mount ====\n');
    // },[]);//마운트 -> 처음 렌더링 될때만 호출됨
    useEffect(() => {
        console.log('\n==== Form Component Mount ====\n');
        return () => console.log('\n==== Form Component UnMount ====\n');
    },[]);//언마운트 -> 화면이 사라질 정리함수 실행
    return (
      <>
        <StyledText>Name: {name} </StyledText>
        <StyledText>Email: {email} </StyledText>
        <StyledTextInput
            value={name}
            onChangeText={text =>setName(text)}
            placeholder="name"
        />
         <StyledTextInput
            value={email}
            onChangeText={email =>setEmail(email)}
            placeholder="email"
        />
      </>
    )
  
}

export default Form;