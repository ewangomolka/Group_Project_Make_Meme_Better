use mmfb
db.dropDatabase();

db.users.insertMany([
    {
        username: "MemeQueen5000",
        email: "memequeen5000@mememail.com",
        password: "memesarelife",
        post: [
            {
                content: "This is my first post on here!",
                comments: [
                    {
                        user: "MemeLord1",
                        meme: "https://images.app.goo.gl/HW3VnSU96fN1sc6f9",
                    }
                ]
            }
        ]
    },
    {
        username: "MemeLord1",
        email: "memelord@mememail.com",
        password: "password123",
        post: [
            {
                content: "Howdy ya'll",
                comments: [
                    {
                        user: "MemeQueen5000",
                        meme: "https://images.app.goo.gl/A4KftyDk47zBqfMB8",
                    }
                ]
            }
        ]
    },
    {
        username: "everythingsfine",
        email: "itsnotreally@mememail.com",
        password: "password321",
        post: [
            {
                content: "Me sad",
                comments: [
                    {
                        user: "MemeLord1",
                        meme: "https://images.app.goo.gl/QoLrHceVWZfnyHB47",
                    }
                ]
            }
        ]
    },
]);

db.memes.insertMany([
    {
        name: "add css",
        category: "css",
        url: "https://images.app.goo.gl/HW3VnSU96fN1sc6f9",
    },
    {
        name: "pikachu",
        category: "css",
        url: "https://images.app.goo.gl/cqE4bo13TbdTUCnB9",
    },
    {
        name: "one does not",
        category: "css",
        url: "https://images.app.goo.gl/vVA1sHb4N19vFrL89",
    },
    {
        name: "family guy",
        category: "css",
        url: "https://images.app.goo.gl/LHSNSMjidUcc2c9J6",
    },
    {
        name: "are you ok?",
        category: "ugood?",
        url: "https://images.app.goo.gl/QoLrHceVWZfnyHB47",
    },
    {
        name: "u good baby",
        category: "ugood?",
        url: "https://images.app.goo.gl/gdUmAwK1GEiSU6317",
    },
    {
        name: "u good cats",
        category: "ugood?",
        url: "https://images.app.goo.gl/AE15itRrr3xsCE7k8",
    },
    {
        name: "u good shark",
        category: "ugood?",
        url: "https://images.app.goo.gl/JXQcmTApC2V9s3QF9",
    },
    {
        name: "inbred",
        category: "cats",
        url: "https://images.app.goo.gl/4q8LEwoQCXEVKgKx8",
    },
    {
        name: "boobytrap",
        category: "cats",
        url: "https://images.app.goo.gl/NmAiqhL4oQdopS126",
    },
    {
        name: "screaming cat",
        category: "cat",
        url: "https://images.app.goo.gl/A4KftyDk47zBqfMB8",
    },
    {
        name: "staring cat",
        category: "cat",
        url: "https://images.app.goo.gl/NLTdnVBLp7MESKZr5",
    },
    {
        name: "success kid",
        category: "sucsess",
        url: "https://images.app.goo.gl/rMR5rr6uvBYYpyyz9",
    },
    {
        name: "borat",
        category: "success",
        url: "https://images.app.goo.gl/t6KjLtWLwuNCp1M1A",
    },
    {
        name: "squirrel",
        category: "success",
        url: "https://images.app.goo.gl/ECTeBQAv1nieqQvJ8",
    },
    {
        name: "gordon",
        category: "sucess",
        url: "https://images.app.goo.gl/qPn9XAR7xjGh9toc8",
    },
    {
        name: "success cat",
        category: "sucess",
        url: "https://images.app.goo.gl/DwDCodmnwCPAYRBD8",
    },
    {
        name: "you look good",
        category: "looks",
        url: "https://media.tenor.com/3dV00F9O3BkAAAAC/ohhhahhhhh-wow.gif",
    },
    {
        name: "ohhhhhh",
        category: "funny",
        url: "https://media.tenor.com/T8NUkKuaGAsAAAAC/ohhh-whoah.gif",
    },
    {
        name: "bunny",
        category: "looks",
        url: "https://media.tenor.com/M6tmbMOzYxcAAAAd/yup-you-look-beautiful.gif",
    },
    {
        name: "good job",
        category: "success",
        url: "https://media.tenor.com/sIzMTGPxIeMAAAAd/well-done.gif",
    },
    {
        name: "hey king",
        category: "hello",
        url: "https://media.tenor.com/GAwMGtOaLVYAAAAC/value-select-hey-king.gif",
    },
    {
        name: "sparkles",
        category: "success",
        url: "https://media.tenor.com/F-mq05c3FUIAAAAC/celebrate-confetti.gif",
    },
    {
        name: "yass queen",
        category: "success",
        url: "https://media.tenor.com/ACthELqvQ5MAAAAC/ray-holt-yas-queen.gif",
    },
    {
        name: "waving penguin",
        category: "hello",
        url: "https://media.tenor.com/ACthELqvQ5MAAAAC/ray-holt-yas-queen.gif",
    },
    {
        name: "hey jimmy",
        category: "hello",
        url: "https://media.tenor.com/ACthELqvQ5MAAAAC/ray-holt-yas-queen.gif",
    },
    {
        name: "rough day?",
        category: "here for you",
        url: "https://images.app.goo.gl/FjWJnVLU6NrHSUqs5",
    },
    {
        name: "doggos",
        category: "here for you",
        url: "https://images.app.goo.gl/tsy4xbBx4drLWtGYA",
    },
    {
        name: "it",
        category: "here for you",
        url: "https://images.app.goo.gl/QEBDLrTPYstE6gY5A",
    },
    {
        name: "bob",
        category: "ugood?",
        url: "https://images.app.goo.gl/rdnwpFoQfGRcoAB7A",
    }
])