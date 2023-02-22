import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: 'bca84beb-1540-4f93-8ba2-5d995cfca759'
    },
    data: {
      duration: 250,
      name: 'Curso muito excelente de reactJS com o Diego'
    }
  })

  console.log(result)
}
main()
