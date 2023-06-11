// Your code here

const createEmployeeRecord = (employee) => {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (employees) => {
    return employees.map(employee => createEmployeeRecord(employee))
}

const createTimeInEvent = (employee, dateStamp) => {
    const [date, hour] = dateStamp.split(' ')
    employee.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date,
    })
    return employee
}

const createTimeOutEvent = (employee, dateStamp) => {
    const [date, hour] = dateStamp.split(' ')
    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date,
    })
    return employee
}

const hoursWorkedOnDate = (employee, date) => {
    const timeIn = employee.timeInEvents.find(event => event.date === date)
    const timeOut = employee.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

const wagesEarnedOnDate = (employee, date) => {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour
}

const allWagesFor = (employee) => {
    return employee.timeInEvents.reduce((total, event) => total + wagesEarnedOnDate(employee, event.date), 0)
}

const calculatePayroll = (employees) => {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0)
}

const findEmployeeByFirstName = (employees, firstName) => {
    return employees.find(employee => employee.firstName === firstName)
}

