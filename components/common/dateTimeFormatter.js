
import moment from "moment";

const dateTimeFormatter = (dateTime) => {
    const date = moment.utc(dateTime);
    const formattedDate = date.format("MM/DD/YYYY");
    const formattedTime = date.format("HH:mm");
    return "Date: " + formattedDate + " Time: " + formattedTime;
  };
  
  export default dateTimeFormatter;