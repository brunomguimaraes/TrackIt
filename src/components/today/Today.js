import TopBar from "../topbar/TopBar";
import styled from "styled-components";
import Footer from "../footer/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect } from "react";
import { listHabitsToday } from "../../service/Service";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'


export default function Today() {
    const data = dayjs()
    .locale('pt-br')
    .format("dddd, DD/MM");

    // console.log(data)
    const {
        loginResponse
    } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${loginResponse.token}`
            }
        }

        // console.log(config)

        listHabitsToday(config)
        .then(resp => {
            console.log(resp.data)
        })
    
    }, []);

    return (
        <>
            <TopBar />
            <SituationHabitsContent>
                <Date>{data}</Date>
                <Span>Nenhum hábito concluído ainda</Span>
                <HabitSituation>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <button></button>
                    <Records>Sequência atual: 3 dias</Records>
                    <Records>Seu recorde: 5 dias</Records>
                </HabitSituation>
                <HabitSituation>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <button></button>
                    <Records>Sequência atual: 3 dias</Records>
                    <Records>Seu recorde: 5 dias</Records>
                </HabitSituation>
            </SituationHabitsContent>
            <Footer />

        </>
    );
}


export const SituationHabitsContent = styled.div`
    padding: 98px 18px 0 17px;
    height: 100vh;
`;

export const Span = styled.span`
    color: #BABABA;
    font-size: 17.98px;
    position: absolute;
    top: calc(70px + 57px);
    margin-bottom: 28px;
    margin-bottom: 50px;
`;

export const Date = styled.h2`
    color: #126BA5;
    font-size: 22.98px;
    margin-bottom: 50px;
`;

export const HabitSituation = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 11px 0 17px;
    margin-bottom: 10px;
    position: relative;
    button {
        width: 69px;
        height: 69px;
        background-color: #EBEBEB;
        position: absolute;
        top: 13px;
        right: 13px;
    }
`;

export const HabitTitle = styled.h3`
    font-size: 19.98px;
    margin-bottom: 8px;
    color: #666666;
`;

export const Records = styled.h4`
    font-size: 12.98px;
    color: #666666;

`;