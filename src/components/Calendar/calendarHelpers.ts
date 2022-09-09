type DayInfo = { day: string, events: Array<{}>, holidays: Array<{}>, weekInMonth: number }

export const getYearData = (year: number) => {
    const yearData: any = {}
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let weekInMonthCounter = 1
    for (let i = 0; i < months.length; i++) {
        yearData[months[i]] = {}
        const daysInMonth = new Date(year, i + 1, 0).getDate()
        for (let j = 0; j <= daysInMonth - 1; j++) {
            const day = new Date(year, i, j).getDay()
            const dayName = days[day]
            yearData[months[i]][j] = {
                day: dayName,
                events: [],
                holidays: [],
                weekInMonth: weekInMonthCounter
            }
            if (dayName === 'Sunday') weekInMonthCounter++
        }
        weekInMonthCounter = 1
    }
    return yearData
}

export const getCurrentMonth = () => {
    const date = new Date()
    return date.getMonth()
}

export const getDayDetails = (dayDetails: DayInfo) => {
    const { day, events, holidays } = dayDetails
    return {
        day,
        events,
        holidays,
        weekInMonth: dayDetails.weekInMonth
    }
}

export const previousMonthDays = (dayDetails: DayInfo) => {
    const { day } = dayDetails
    switch(day) {
        case 'Monday': return 0
        case 'Tuesday': return 1
        case 'Wednesday': return 2
        case 'Thursday': return 3
        case 'Friday': return 4
        case 'Saturday': return 5
        case 'Sunday': return 6
        default: return 0
    }
}