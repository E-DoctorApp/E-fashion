const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
 

    // ... you will write your Prisma Client queries here
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


    async function createDummyUsers() {
        const dummyUsers = [
            {
                firstName: 'Alice',
                lastName: 'Johnson',
                profileImage: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600',
                coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/808/9b7b19144231085.Y3JvcCwxNzM1LDEzNTcsMTAzMSwyMDc1.jpg',
                email: 'alice.johnson@example.com',
                password: 'password123',
                dateOfBirth: '1995-03-15',
                type: 'regular',
                followers: 50,
              },
              {
                firstName: 'ZARA',
                lastName: 'none',
                profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5Q2gj2tZBmWnEzfw72EhwSr_6olGYGewnDJluudTcNCNa9FaX4Ghln5khvJtbGnmNC0&usqp=CAU',
                coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpjZ3XYsPUVA7MQCoBYBFw7t2Q8RIO9PKhcv0jsepEUzWnYKndsDF_fy70r5ZwvTtNt8&usqp=CAU',
                email: 'bob.smith@example.com',
                password: 'securepass456',
                dateOfBirth: '1988-12-04',
                type: 'brand',
                followers: 20,
              },
              {
                firstName: 'Charlie',
                lastName: 'Brown',
                profileImage: 'https://example.com/charlie_profile.jpg',
                coverImage: 'https://example.com/charlie_cover.jpg',
                email: 'charlie.brown@example.com',
                password: 'charliePass789',
                dateOfBirth: '1992-07-20',
                type: 'fashionista',
                followers: 80,
              },
              {
                firstName: 'David',
                lastName: 'Miller',
                profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
                coverImage: 'https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_640.jpg',
                email: 'david.miller@example.com',
                password: 'davidPass123',
                dateOfBirth: '1987-05-10',
                type: 'regular',
                followers: 60,
              },
              {
                firstName: 'P&B',
                lastName: 'none',
                profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYabWdxV47C6HjRYAW72TeogFn_RIF75rypdt_NDNKpj5jzx6cYsnA2ze3lUdn1AQyxk&usqp=CAU',
                coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkEbmeuAxmPbv4prfubM_gqiY4f6Qf2h22AYTN_ISRMMOMjQEDQOpJNzVjK3EvAVop6E&usqp=CAU',
                email: 'ella.davis@example.com',
                password: 'ellaPass456',
                dateOfBirth: '1996-09-25',
                type: 'brand',
                followers: 25,
              },
              {
                firstName: 'Fiona',
                lastName: 'Anderson',
                profileImage: 'https://example.com/fiona_profile.jpg',
                coverImage: 'https://example.com/fiona_cover.jpg',
                email: 'fiona.anderson@example.com',
                password: 'fionaPass789',
                dateOfBirth: '1991-11-08',
                type: 'fashionista',
                followers: 90,
              },
              {
                firstName: 'George',
                lastName: 'Wilson',
                profileImage: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                coverImage: 'https://example.com/george_cover.jpg',
                email: 'george.wilson@example.com',
                password: 'georgePass123',
                dateOfBirth: '1994-02-14',
                type: 'regular',
                followers: 70,
              },
            
          // Add more dummy user data here
        ];
      
        try {
          await prisma.user.createMany({
            data: dummyUsers,
          });
          console.log('Dummy users created successfully');
        } catch (error) {
          console.error('Error creating dummy users:', error);
        } finally {
          await prisma.$disconnect();
        }
      }


module.exports = prisma    