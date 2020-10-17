import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';
import { Button, ComponentDisplay, Container, Display } from './Relogio.styles';

export default function Relogio(){
    return(
        <Container>

            

            <Display>
                <ComponentDisplay id="hours" >00</ComponentDisplay>
                <ComponentDisplay id="minutes" >00</ComponentDisplay>
                <ComponentDisplay id="seconds" >00</ComponentDisplay>
                <ComponentDisplay id="milesimos" >00</ComponentDisplay>
            </Display>
            <Button>
                <FiPlayCircle size={28} color="#333"/>
            </Button>
        </Container>
    );
}