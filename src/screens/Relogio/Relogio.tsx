import React, { useEffect } from 'react';
import moment from 'moment';
import { FiMaximize2 } from 'react-icons/fi';
import Moment from 'moment-timezone';
import { ComponentDisplay, Container, Display, Panel, PanelContainer, PanelHeader, PanelMain, Text, TextInfo, TextPanelHeader, TextPanelMain, Title } from './Relogio.styles';

export default function Relogio(){

    moment.locale('pt-br');

    const dia = (moment().format('dddd')).toUpperCase();
    const data = moment().format('LL');

    const horasLocal = moment().format('LTS');

    const horarioManaus = Moment().tz("America/Manaus").format('LTS');  
    const horarioToquio = Moment().tz("Asia/Tokyo").format('LTS');
    const horarioRoma = Moment().tz("Europe/Rome").format('LTS');
    const horarioBuenosAries = Moment().tz("America/Argentina/Buenos_Aires").format('LTS');
    const horarioCairo = Moment().tz("Africa/Cairo").format('LTS');

    useEffect(()=> {

    },[]);

    return(
        <Container>

            <Title>Relógio</Title>

            <Display>
                <ComponentDisplay id="hours" >{horasLocal}</ComponentDisplay>
            </Display>

            <div>
                <Text>{`${dia}, ${data}`}</Text>
            </div>

            <PanelContainer>
                <Panel>
                    <PanelHeader>
                        <TextPanelHeader>Manaus,Brasil</TextPanelHeader>
                        <FiMaximize2  size={24} color="#ffff8d"/>
                    </PanelHeader>
                    <PanelMain>
                        <TextPanelMain>{horarioManaus}</TextPanelMain>
                        <TextInfo>Hoje, -1H </TextInfo>
                    </PanelMain>
                </Panel>
                <Panel>
                    <PanelHeader>
                        <TextPanelHeader>Cairo,Egito</TextPanelHeader>
                        <FiMaximize2  size={24} color="#ffff8d"/>
                    </PanelHeader>
                    <PanelMain>
                        <TextPanelMain>{horarioCairo}</TextPanelMain>
                        <TextInfo>Hoje, +5H </TextInfo>
                    </PanelMain>
                </Panel>
                <Panel>
                    <PanelHeader>
                        <TextPanelHeader>Tóquio,Japão</TextPanelHeader>
                        <FiMaximize2  size={24} color="#ffff8d"/>
                    </PanelHeader>
                    <PanelMain>
                        <TextPanelMain>{horarioToquio}</TextPanelMain>
                        <TextInfo>Amanhã, +12H </TextInfo>
                    </PanelMain>
                </Panel>
                <Panel>
                    <PanelHeader>
                        <TextPanelHeader>Roma,Itália</TextPanelHeader>
                        <FiMaximize2  size={24} color="#ffff8d"/>
                    </PanelHeader>
                    <PanelMain>
                        <TextPanelMain>{horarioRoma}</TextPanelMain>
                        <TextInfo>Hoje, +5H </TextInfo>
                    </PanelMain>
                </Panel>
                <Panel>
                    <PanelHeader>
                        <TextPanelHeader>Buenos Aires,Argentina</TextPanelHeader>
                        <FiMaximize2  size={24} color="#ffff8d"/>
                    </PanelHeader>
                    <PanelMain>
                        <TextPanelMain>{horarioBuenosAries}</TextPanelMain>
                        <TextInfo>Hoje, +0H </TextInfo>
                    </PanelMain>
                </Panel>
            </PanelContainer>
        </Container>
    );
}