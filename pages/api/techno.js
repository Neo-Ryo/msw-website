const technoData = [
    {
        icon: '/technos/css.png',
        desc: 'css',
        text: 'Langage web qui permet la stylisation des pages web.',
    },
    {
        icon: '/technos/html.png',
        desc: 'html',
        text: "Langage de balise qui permet de créer la structure d'une page.",
    },
    {
        icon: '/technos/js.png',
        desc: 'javascript',
        text: 'Le maitre des langage du web.',
    },
    {
        icon: '/technos/materialUI.png',
        desc: 'material ui',
        text: 'Framework css très design.',
    },
    {
        icon: '/technos/nodeJSNude.png',
        desc: 'node js',
        text: 'Plateform de logiciel écrite en Javascript et orientée réseau.',
    },
]

export default (req, res) => {
    res.status(200).json(technoData)
}
