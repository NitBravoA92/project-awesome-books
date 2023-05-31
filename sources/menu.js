const pDate = document.querySelector('#date');
const list = document.querySelector('.nav-sections:nth-child(1)');
const addNew = document.querySelector('.nav-sections:nth-child(2)');
const contact = document.querySelector('.nav-sections:nth-child(3)');
const booksSection = document.querySelector('#all-awesome-books');
const formSection = document.querySelector('#add-new-book');
const contactSection = document.querySelector('#contact');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date();

const month = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
let hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const period = hours >= 12 ? 'pm' : 'am';

/* Function to get the suffix for the day */
function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

/* Function to add additional zeros to the minutes and seconds if they are less than 10 */
function addLeadingZeros(value) {
  return value < 10 ? `0${value}` : value;
}

/* Change the format of the hours to 12 */
if (hours > 12) {
  hours -= 12;
}

/* Insert the format in the p element */
pDate.innerHTML = `${month} ${day}${getOrdinalSuffix(day)} ${year}, ${hours}:${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)} ${period}`;

