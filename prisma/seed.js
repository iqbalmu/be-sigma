const { prismaClient } = require('../src/utils/prisma-client')

const main = async () => {

    // role user
    await prismaClient.role.createMany({
        data: [
            { id: 1, name: 'admin' },
            { id: 2, name: 'user' },
        ]
    })

    // admin
    await prismaClient.user.create({
        data:
        {
            id: 1,
            password: '$2b$10$t/hEnJKwc5G6IytBnBTNkOO0zuVoELYirI19xqqrOHFe1RP04IHWC', //admin,
            roleId: 1,
            profile: {
                create: {
                    email: 'admin@admin.com',
                    name: 'admin',
                    phone: '082196506900',
                    images: 'profile.jpg'
                }
            }
        }
    })

    // user
    await prismaClient.user.create({
        data:
        {
            id: 2,
            password: '$2a$10$hSuZfDGH/c8xohZ1FOjFPeBtkRIMPFPV7NPBhEsHytHG8MlllVIuS', //user,
            roleId: 2,
            profile: {
                create: {
                    email: 'user@user.com',
                    name: 'user',
                    phone: '08213123412123',
                    images: 'profile.jpg'
                }
            }
        }
    })

    // inventories
    await prismaClient.inventory.createMany({
        data: [
            {
                id: 1,
                name: 'Ruang Meeting 1',
                category: 'facility',
                description: 'Ruang meeting berkapasitas 12 Orang Full AC + Proyektor + LED Screen 60 Inch',
                images: 'ruang meeting 1.jpg',
            },
            {
                id: 2,
                name: 'Ruang Meeting 2',
                category: 'facility',
                description: 'Ruang meeting berkapasitas 8 Orang Full AC + Proyektor',
                images: 'ruang meeting 2.JPEG',
            },
            {
                id: 3,
                name: 'Ruang Meeting 3',
                category: 'facility',
                description: 'Ruang meeting berkapasitas 9 Orang Full AC + LED Screen 50 Inch',
                images: 'ruang meeting 3.jpeg',
            },
            {
                id: 4,
                name: 'Ruang Trainning 1',
                category: 'facility',
                description: 'Ruang trainning berkapasitas 30 Orang Full AC + Proyektor',
                images: 'ruang trainning 1.jpg',
            },
            {
                id: 5,
                name: 'Ruang Trainning 2',
                category: 'facility',
                description: 'Ruang trainning berkapasitas 60 Orang Full AC + Proyektor + 2 Speaker',
                images: 'ruang trainning 2.jpg',
            },
            {
                id: 6,
                name: 'Spektometer UV-Vis',
                category: 'inventory',
                description: 'Mengukur daya absorbansi suatu cairan yang memiliki gugus kromofor terhadap panjang gelombang cahaya tertentu.',
                images: 'SPEKTROMETER-UV-VIS-M51.jpg',
            },
            {
                id: 7,
                name: 'Oscilloscope',
                category: 'inventory',
                description: 'Mengukur besaran tegangan, frekuensi, periode, bentuk sinyal dan beda fasa',
                images: 'Oscilloscope.jpg',
            },
            {
                id: 8,
                name: 'Safety',
                category: 'inventory',
                description: '1 Set Safety berisi helm, sarung tangan, kacamata, ear plug dan vest',
                images: 'safety.jpg',
            },
            {
                id: 9,
                name: 'Bor',
                category: 'inventory',
                description: 'Include mata bor',
                stock: 'outStock',
                images: 'bor.png',
            },
            {
                id: 10,
                name: 'Mobil',
                category: 'inventory',
                description: 'Daihatsu Gran Max',
                images: 'mobil.jpg',
            },
        ]
    })
}

main()
    .then(async () => {
        await prismaClient.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        process.exit(1)
    })