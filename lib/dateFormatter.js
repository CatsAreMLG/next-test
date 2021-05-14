const dateFormatter = date => {
    const d_names = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    );

    const m_names = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    );

    const d = date;
    const curr_day = d.getDay();
    const curr_date = d.getDate();
    const curr_month = d.getMonth();
    const curr_year = d.getFullYear();

    return `${d_names[curr_day]}, ${m_names[curr_month]} ${curr_date}, ${curr_year}`;
}

export default dateFormatter

