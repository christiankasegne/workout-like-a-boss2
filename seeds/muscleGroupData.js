const { MuscleGroup } = require('../models')

const muscleGroupData = [
    {
        muscleGroup: 'Glutes and Hamstrings',
        images: "https://img.freepik.com/free-photo/image-full-body-athletic-male-doing-squats-with-dumbbells-gym-club_613910-1215.jpg?w=1480&t=st=1684337468~exp=1684338068~hmac=cbce064baecfffad0683954faa163444705ce9fe3a60cb250d72a259414d08fb"
    },
    {
        muscleGroup: 'Chest, Shoulders, and Triceps',
        images: "https://img.freepik.com/free-photo/side-view-young-man-exercising-gym_23-2147949550.jpg?w=2000&t=st=1684438412~exp=1684439012~hmac=b8e35904a0ccc82218df4c38431e168edf3cd12d79ae28341278ffe9f98d2588"
    },
    {
        muscleGroup: 'Quads and calves',
        images: "https://img.freepik.com/free-photo/sports-brunette-woman-sportswear-training-gym_1157-30735.jpg?w=1800&t=st=1684337312~exp=1684337912~hmac=a42999257aa3a0eecf49123acd9437e11cf777e198d0fefee572c7e5c534d73b"
    },
    {
        muscleGroup: 'Back and Biceps',
        images: "https://img.freepik.com/free-photo/back-view-woman-exercising-with-dumbbells_23-2147789670.jpg?w=1800&t=st=1684337369~exp=1684337969~hmac=b32034d31ac334851f18bf823c904aa94833cee2996db8ccb5cfc0c21f3dbfc5"
    },
    {
        muscleGroup: 'Cardio and Core',
        images: "https://img.freepik.com/premium-photo/young-sportive-woman-indoor-training-alone-gym_108985-386.jpg?w=2000"
    },
];

const seedMuscleGroupData = () => MuscleGroup.bulkCreate(muscleGroupData);

module.exports = seedMuscleGroupData;