const output_day = document.querySelector('.output-day');
const output_month = document.querySelector('.output-month');
const output_year = document.querySelector('.output-year');

const error_day = document.querySelector('.error-day');
const error_month = document.querySelector('.error-month');
const error_year = document.querySelector('.error-year');

const submitBtn = document.querySelector('#submit');

const input_day = document.querySelector('#input-day');
const input_month = document.querySelector('#input-month');
const input_year = document.querySelector('#input-year');

let isValidDay = false;
let isValidMonth = false;
let isValidYear = false;

input_day.addEventListener('input', () => {
    const dayValue = +input_day.value;
    const daySpan = document.querySelector('#day-span');

    if (dayValue > 31 || dayValue === 0) {
        isValidDay = false;
        error_day.textContent = dayValue > 31 ? 'Must be a valid day' : 'This field is required';
        input_day.style.border = '1px solid var(--Light-red)';
        daySpan.style.color = 'var(--Light-red)';
    } else {
        isValidDay = true;
        error_day.textContent = '';
        input_day.style.border = '1px solid var(--Light-grey)';
        daySpan.style.color = 'inherit';
    }
});
input_day.addEventListener('focus',() => {
    if(isValidDay) {
        input_day.style.border = '2px solid var(--Purple)';
    }
});
input_day.addEventListener('focusout',() => {
    if(isValidDay) {
        input_day.style.border = '1px solid var(--Liht-grey)';
    }
});


input_month.addEventListener('input', () => {
    const dayValue = +input_month.value;
    const monthSpan = document.querySelector('#month-span');

    if (dayValue > 12 || dayValue === 0) {
        isValidMonth = false;
        error_month.textContent = dayValue > 12 ? 'Must be a valid month' : 'This field is required';
        input_month.style.border = '1px solid var(--Light-red)';
        monthSpan.style.color = 'var(--Light-red)';
        return;
    } else {
        isValidMonth = true;
        error_month.textContent = '';
        input_month.style.border = '1px solid var(--Light-grey)';
        monthSpan.style.color = 'inherit';
    }
});
input_month.addEventListener('focus',() => {
    if(isValidMonth) {
        input_month.style.border = '2px solid var(--Purple)';
    }
});
input_month.addEventListener('focusout',() => {
    if(isValidMonth) {
        input_month.style.border = '1px solid var(--Light-grey)';
    }
});


input_year.addEventListener('input', () => {
    const yearValue = +input_year.value;
    const yearSpan = document.querySelector('#year-span');

    if (yearValue > 2024 || yearValue === 0) {
        isValidYear = false;
        error_year.textContent = yearValue > 12 ? 'Must be a valid year' : 'This field is required';
        input_year.style.border = '1px solid var(--Light-red)';
        yearSpan.style.color = 'var(--Light-red)';
        return;
    } else {
        isValidYear = true;
        error_year.textContent = '';
        input_year.style.border = '1px solid var(--Light-grey)';
        yearSpan.style.color = 'inherit';
    }
});
input_year.addEventListener('focus',() => {
    if(isValidYear) {
        input_year.style.border = '2px solid var(--Purple)';
    }
});
input_year.addEventListener('focusout',() => {
    if(isValidYear) {
        input_year.style.border = '1px solid var(--Light-grey)';
    }
});


submitBtn.addEventListener('click',getAge);


function getAge() {

    if(isValidDay && isValidMonth && isValidYear){
        let birhtDay = `${input_month.value}/${input_day.value}/${input_year.value}`;
        let birthDayObj = new Date(birhtDay);
        let ageDiff = Date.now() - birthDayObj;
        let ageOnj = new Date(ageDiff);
    
        let years = ageOnj.getUTCFullYear() - 1970;
        let months = ageOnj.getUTCMonth();
        let days = ageOnj.getUTCDay();

        output_year.textContent = years;
        output_month.textContent = months;
        output_day.textContent = days;
    }else {
        alert('age is not valid');
        output_year.textContent = '--';
        output_month.textContent = '--';
        output_day.textContent = '--';
    }


}