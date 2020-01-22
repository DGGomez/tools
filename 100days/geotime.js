function DisplayCityTime(city, offset) {
    // Date object for current location
    var aDate = new Date();

    // UTC time in msec
    var utc = adate.getTime() + (adate.getTimezoneOffset() * 60000);

    // Date object for the requested city
    var newdate = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for city : "+ city +" is "+ newdate.toLocaleString();
}

// input city
// find offset

alert(DisplayCityTime('Montreal', '-5'));