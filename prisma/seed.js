const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Node'
        },
      });

      const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
          name: 'Woopa 5',
                  username: 'ajolonauta5',
                  mission: 'Node'
        },
      });

      const woopa6 = await prisma.explorer2.upsert({
        where: { name: 'Woopa 6' },
        update: {},
        create: {
          name: 'Woopa 6',
                  lang: 'English',
                  missionCommander: 'Carlo',
                  enrollments: 3,
                  hasCertification: true
        },
      });

      const woopa7 = await prisma.explorer2.upsert({
        where: { name: 'Woopa 7' },
        update: {},
        create: {
          name: 'Woopa 7',
                  lang: 'Spanish',
                  missionCommander: 'Fernanda',
                  enrollments: 1,
                  hasCertification: false
        },
      });

      const mc1 = await prisma.missionCommander.upsert({
        where: { name: 'Fernanda' },
        update: {},
        create: {
          name: 'Fernanda',
                  username: 'FernandaOchoa',
                  mainStack: 'java',
                  currentEnrollment: true,
                  hasAzureCertification: true
        },
      });

      const mc2 = await prisma.missionCommander.upsert({
        where: { name: 'Rodrigo' },
        update: {},
        create: {
          name: 'Rodrigo',
                  username: 'Romarpla',
                  mainStack: 'node',
                  currentEnrollment: false,
                  hasAzureCertification: true
        },
      });

      const mc3 = await prisma.missionCommander.upsert({
        where: { name: 'Carlo' },
        update: {},
        create: {
          name: 'Carlo',
                  username: 'carlogilmar',
                  mainStack: 'node',
                  currentEnrollment: true,
                  hasAzureCertification: true
        },
      });

    console.log('Create 5 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();