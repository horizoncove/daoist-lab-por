import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const wudang = await prisma.temple.upsert({
    where: { id: 'wudang_001' },
    update: {},
    create: {
      id: 'wudang_001',
      name: 'Wudang Mountain - Tai Chi Temple (武当山太极宫)',
      lat: 32.4042,
      lon: 111.0042,
      radius: 500,
    },
  })

  const record = await prisma.ritualRecord.upsert({
    where: { orderId: 'ORDER-001' },
    update: {},
    create: {
      orderId: 'ORDER-001',
      spiritualName: 'Jiang Qing Lin (江清林)',
      templeId: 'wudang_001',
      currentLat: 32.4042,
      currentLon: 111.0042,
      videoHash: 'QmW2WQi7j6c...',
      txHash: '0x7a8b9c1d2e3f4g5h6i7j8k9l0m1n2o3p',
    },
  })

  console.log({ wudang, record })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
