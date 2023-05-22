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
                        meme: "https://i.redd.it/bptzx7ur4uj11.jpg",
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
                        meme: "https://www.meme-arsenal.com/memes/f6ab39cdbfc3f344bf59a89edd22072e.jpg",
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
                        meme: "https://media.makeameme.org/created/are-you-ok-59bfe3.jpg",
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
        url: "https://i.redd.it/bptzx7ur4uj11.jpg",
    },
    {
        name: "pikachu",
        category: "css",
        url: "https://res.cloudinary.com/practicaldev/image/fetch/s--ASsKTvWD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0j6j5aefbocnrwkobhuk.png",
    },
    {
        name: "one does not",
        category: "css",
        url: "https://zendev.com/assets/img/posts/css-javascript/one-does-not-simply.jpg",
    },
    {
        name: "family guy",
        category: "css",
        url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1618132016248/KgEmbHf7K.gif?w=1600&h=840&fit=crop&crop=entropy&auto=format,compress&gif-q=60&format=webm",
    },
    {
        name: "are you ok?",
        category: "ugood?",
        url: "https://media.makeameme.org/created/are-you-ok-59bfe3.jpg",
    },
    {
        name: "u good baby",
        category: "ugood?",
        url: "https://media.makeameme.org/created/are-you-ok-880dd2d896.jpg",
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
        url: "https://bestlifeonline.com/wp-content/uploads/sites/3/2018/06/cat-meme-83.jpg?quality=82&strip=all",
    },
    {
        name: "boobytrap",
        category: "cats",
        url: "https://s.yimg.com/ny/api/res/1.2/tQGpYDQMcvnpeBf2xDBV3w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en-AU/homerun/y7.beau/e0f987bfdf21cfc1a5d05d810268dce2",
    },
    {
        name: "screaming cat",
        category: "cat",
        url: "https://www.meme-arsenal.com/memes/f6ab39cdbfc3f344bf59a89edd22072e.jpg",
    },
    {
        name: "staring cat",
        category: "cat",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkaGFHN2SMsvASJ-hIhTtFx_GNFs7ovvOFwulHe4NCmVEFPDoWnYRzGf26NnvTHcRnhT0&usqp=CAU",
    },
    {
        name: "success kid",
        category: "sucsess",
        url: "https://media.makeameme.org/created/you-can-do-5c9199.jpg",
    },
    {
        name: "borat",
        category: "success",
        url: "https://i.imgflip.com/5kmt1j.jpg",
    },
    {
        name: "squirrel",
        category: "success",
        url: "https://media.makeameme.org/created/this-is-what-1es1i8.jpg",
    },
    {
        name: "gordon",
        category: "sucess",
        url: "https://i0.wp.com/winkgo.com/wp-content/uploads/2018/12/23-Great-Job-Memes-08.jpg?w=800&ssl=1",
    },
    {
        name: "success cat",
        category: "sucess",
        url: "https://www.scienceofpeople.com/wp-content/uploads/2022/07/image-54.png",
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
        url: "https://images7.memedroid.com/images/UPLOADED298/61e7ae22527cd.jpeg",
    },
    {
        name: "doggos",
        category: "here for you",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyaFrCrSZlwbv0aCY5Te3rMTbaiunAgwRo4AxkeqiedfFpDOnOhCQT2ajkQuUnVLHr56Q&usqp=CAU",
    },
    {
        name: "it",
        category: "here for you",
        url: "https://www.meme-arsenal.com/memes/6c487980d4c04a70732c68658dd2e941.jpg",
    },
    {
        name: "bob",
        category: "ugood?",
        url: "https://i.kym-cdn.com/photos/images/original/001/553/029/86d.jpg",
    }
])