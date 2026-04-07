export interface Dog {
    id:number;
    name: string;
    race: string;
    description: string;
    image: any;
}
export const dogs: Dog[] =[
    {id:1,
    name:'Plutãozinho',
    race:'SDR', 
    description:'Sou grande e dócil, amo passear e comer ossinhos, adoro deitar em sofás e dormir dentro de casa. 🐶​🌳 ',
    image: require('../../assets/image/CaoUm.png')
    },
    {id:2,
    name: 'Mauro 🐜🌷',
    race:'SDR', 
    description:'Não se engane pelo tamanho… aqui é atitude de leão em corpo compacto. Energia infinita e zero paciência pra vacilo ⚡ ',
    image: require('../../assets/image/CaoDois.jpg')
    },
    {id:3,
    name: 'Luna 🦨​​​​',
    race:'SDR', 
    description:'Cheia de energia e carinho pra dar, sou companheira pra todas as horas. Ama passeios, brincadeiras e um cafuné bem feito.  🐾',
    image: require('../../assets/image/CaoTres.jpg')
    },
]
