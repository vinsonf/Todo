class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
}

class UserService {
    users = [];

    addUser(first, last) {
        const user = new User(first, last);
        this.users.push(user);
        console.log(this.users);
        this.displayUsers(this.users);
        return user;
    }

    getAllUsers() {
        return this.users;
    }

    displayUsers(array) {
        console.log(array, 'array')
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
        array.forEach(function(item) {
            const li = document.createElement('li');
            li.innerText = item.firstName + ' ' + item.lastName;
            ul.appendChild(li);
        });
    }

    findUsers(searchTerm) {
        console.log(searchTerm);
        const foundUsers = this.users.filter(function(item) {
            return (item.firstName + item.lastName).includes(searchTerm);
        });
        this.displayUsers(foundUsers);
    }
}

export const usersService = new UserService();
