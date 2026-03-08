import React, { useState } from 'react'
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const Counter = () => {
    const [count, setCount] = useState(0);

    return (// 가장 기본적으로 변경될 상태값을 전달하는 방법, 지금부턴 함수를 넣을것임
        <>
            <StyledText>count: {count}</StyledText>
            {/* <Button title="+" onPress={() =>{
                setCount(count + 1);
            }}/> */}
            {/* <Button title="+" onPress={() =>{
                setCount(count + 1);
                setCount(count + 1); //세터함수를 두개 줬는데 1씩 오름;; 비동기로 동작하기 때문 -> 상태값이 바로 변경되지 않는다.
                console.log(`count: ${count}`);
            }}/> */}
            <Button title="+" onPress={() =>{
                setCount(prevCount => prevCount + 1); //함수로 인자 전달
                setCount(prevCount => prevCount + 1);
                console.log(`count: ${count}`);
            }}/>
             <Button title="-" onPress={() =>{
                setCount(count - 1);
            }}/>
        </>
    );

};

export default Counter;
