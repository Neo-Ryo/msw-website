const activityData = [
    {
        icon: '/icon/designWhite.png',
        desc: 'design',
        text: 'Conception',
        color: 'aliceblue',
    },
    {
        icon: '/presta/concept.png',
        desc: 'concept',
        text: 'Développement',
        color: 'blue',
    },
    {
        icon: '/icon/creationLogo.png',
        desc: 'creation developpement',
        text: 'Réferrencement',
        color: 'green',
    },
    {
        icon: '/icon/dev.png',
        desc: 'statistique icon',
        text: 'Maintenance',
        color: 'red',
    },
]

export default (req, res) => {
    res.status(200).json(activityData)
}
