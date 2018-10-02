//Create a hotel object with the following attributes: 
//Occupied rooms 
//Amenities 
//Total Rooms 
//Create methods inside this object that when called can
//Calculate the number of availible rooms, book a room, remove from availability, relinquish a room, add to availability


var hotel = {
occupiedRooms: 50,
amenities: "pool, gym, sauna, breakfast",
totalRooms: 100,

availableRooms() {
        return this.totalRooms - this.occupiedRooms;
    },
bookARoom() {
    return this.totalRooms - 1;
},
removeFromAvailable() {
    return this.availableRooms - 1;
},
relinquishRoom() {
    return this.occupiedRooms - 1;
},
addtoAvailability() {
    return this.availableRooms + 1; }
};




