const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exisitingUser = users.find((user) => 
        user.room === room && user.name === name
    );

    if (exisitingUser) {
        return { error: "User existed!" };
    }

    const user = { id, name, room };
    users.push(user);

    return { user };
};

const removeUser = (id) => {

    const index = users.findIndex((user) => 
        user.id === id
    )    
    console.log(index)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
};