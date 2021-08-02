import { usersService } from "./users.service.js";



const firstNameInput = document.querySelectorAll('input')[0];
const lastNameInput = document.querySelectorAll('input')[1];
const button = document.querySelector('button');
const searchInput = document.querySelector('#searchInput');


button.addEventListener('click', function() {

    usersService.addUser(firstNameInput.value, lastNameInput.value);
});

searchInput.addEventListener('input', function() {
    usersService.findUsers(searchInput.value);
}) 


