import { PrismaClient } from "@prisma/client";

module.exports = { db: new PrismaClient({ log : ["query"]})};