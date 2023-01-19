import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    const user = await prisma.user.create({data:{name:"Rahul", email:'rt878777@gmail.com'}})

    console.log(user);
}

main()
.catch(e => { 
   console.error(e.message)
})
.finally(async ()=>{ 
    await prisma.$disconnect()
})
