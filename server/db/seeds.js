use mmfb;
db.dropDatabase();

db.users.insertMany([
    {username: "MemeQueen5000",
    email: "memequeen5000@mememail.com",
    password: "memesarelife", 
    },
    {username: "MemeLord1",
    email: "memelord@mememail.com",
    password: "password123", 
    },
    {username: "everythingsfine",
    email: "itsnotreally@mememail.com",
    password: "password321", 
    },
]);