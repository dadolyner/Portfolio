import * as React from 'react';
import { Container, ButtonsContainer, AddButton, MenuButton, HamburgerMenu, HamburgerLine, MonthYearContainer, MonthYear, WeekDaysContainer, WeekDay, DaysContainer, Day, EventsContainer, EventsHeader, Event, EventTitle, EventDate, EventTime } from './calendar.styled';
import { getYearData } from './calendarHelpers';

type DayInfo = { day: string, events: Array<{}>, holidays: Array<{}>, weekInMonth: number }

const DadoCalendar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentYear, setCurrentYear] = React.useState(() => { return new Date().getFullYear() });
    const [yearData, setYearData] = React.useState(() => { return getYearData(currentYear) });
    const [currentMonth, setCurrentMonth] = React.useState(() => { return new Date().getMonth() });
    const [months, setMonths] = React.useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    const [days, setDays] = React.useState(() => { return Object.values(yearData[months[currentMonth]]) as Array<DayInfo> });

    return (
        <>
            <Container>
            <ButtonsContainer>
                <MenuButton onClick={() => setIsOpen(!isOpen)}>
                    <HamburgerMenu className={isOpen ? 'opened' : ''} >
                        <HamburgerLine />
                        <HamburgerLine />
                        <HamburgerLine />
                    </HamburgerMenu>
                </MenuButton>
                <AddButton />
            </ButtonsContainer>
                

                <MonthYearContainer>
                    <MonthYear>{months[currentMonth] + ' ' + currentYear}</MonthYear>
                </MonthYearContainer>

                <WeekDaysContainer>
                    <WeekDay>Mon</WeekDay>
                    <WeekDay>Tue</WeekDay>
                    <WeekDay>Wed</WeekDay>
                    <WeekDay>Thu</WeekDay>
                    <WeekDay>Fri</WeekDay>
                    <WeekDay>Sat</WeekDay>
                    <WeekDay>Sun</WeekDay>
                </WeekDaysContainer>

                <DaysContainer>
                    { days.map((day: any, index: number) => {
                        return (
                        <Day key={day + ' ' + index} className={day.events.length > 0 ? 'event' : ''} style={{gridArea: day.day + day.weekInMonth}}> {index+1} </Day>
                        )
                    })}
                </DaysContainer>

                
            </Container>
        </>
    );
}

export default DadoCalendar;