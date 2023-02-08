const {PrismaClient} =  require('@prisma/client');
const prisma = new PrismaClient({ log : ["query"]})


async function main() {
    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data:
        {   
            name:"Rahul",
            email:'rt878777@gmail.com',
            posts:
            {
                create:
                {
                    post:"Hello world",
                }
            },
        }
    });  
    // const user = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //     }
    // })
    console.log(user);

}

main()
.catch(e => { 
   console.error(e.message);
})
.finally(async ()=>{ 
    await prisma.$disconnect();
})