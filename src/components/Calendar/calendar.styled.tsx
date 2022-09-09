import styled from 'styled-components';
import '../Typeography/typeography.css';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    position: relative;
    font-family: Poppins;
`;
export const ButtonsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 420px;
    display: flex;
    justify-content: space-between;
`;
export const AddButton = styled.button`
    position: relative;
    border: 0;
    outline: 0;
    width: 50px;
    height: 50px;
    border-radius: 0 0 0 50%;
    background-color: #66dcec;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:before {
        content: '+';
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        font-family: PoppinsNormal;
        font-weight: 600;
        transform: translate(-40%, -55%);
    }
    &:hover { background-color: #4db4c2; }
`;
export const MenuButton = styled.button`
    position: relative;
    border: 0;
    outline: 0;
    width: 50px;
    height: 50px;
    border-radius: 0 0 50% 0;
    background-color: #66dcec;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover { background-color: #4db4c2; }
`;
export const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    margin: 12px 0 0 5px;

    &.opened {
        & > div:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        & > div:nth-child(2) { opacity: 0; }
        & > div:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    }
`;
export const HamburgerLine = styled.div`
    width: 25px;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease;
`;

export const PrevMonthButton = styled.button``;
export const NextMonthButton = styled.button``;
export const MonthYearContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 20px;
    margin: 60px 0 20px 0;
    font-size: 20px;
    font-weight: 1000;
`;

export const MonthYear = styled.div``;

export const WeekDaysContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #aaa;
`;

export const WeekDay = styled.div`
    text-align: center;
    margin-bottom: 5px;
    font-weight: bold;
    color: #aaa;
`;

export const DaysContainer = styled.div`
    display: grid;
    grid-template-areas: 
        'Monday1 Tuesday1 Wednesday1 Thursday1 Friday1 Saturday1 Sunday1'
        'Monday2 Tuesday2 Wednesday2 Thursday2 Friday2 Saturday2 Sunday2'
        'Monday3 Tuesday3 Wednesday3 Thursday3 Friday3 Saturday3 Sunday3'
        'Monday4 Tuesday4 Wednesday4 Thursday4 Friday4 Saturday4 Sunday4'
        'Monday5 Tuesday5 Wednesday5 Thursday5 Friday5 Saturday5 Sunday5';
    gap: 5px;
`;

export const Day = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    text-align: center;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 16px;
    font-family: Poppins;
    &:hover {
        background-color: #ccc;
        cursor: pointer;
    }
    &.event {
        background-color: #66dcec;
        color: #fff;
        border: 2px solid #fff;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        &:hover { background-color: #4db4c2; }
    }
`;

export const EventsContainer = styled.div``;
export const EventsHeader = styled.div``;
export const Event = styled.div``;
export const EventTitle = styled.div``;
export const EventDate = styled.div``;
export const EventTime = styled.div``;