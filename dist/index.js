"use strict";
// //object orianterd programming
Object.defineProperty(exports, "__esModule", { value: true });
const add = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
        console.log(x + y);
    }
    else if (typeof x === 'string' && typeof y === 'string') {
        console.log(`${x} ${y}`);
    }
};
add('xxx', 'yy');
add(20, 30);
const getUser = (user) => {
    if ('role' in user) {
        console.log('user Admin');
    }
    console.log('user');
};
const normalUser = {
    name: 'animes'
};
const adminUser = {
    name: 'admin user',
    role: 'admin'
};
getUser(adminUser);
