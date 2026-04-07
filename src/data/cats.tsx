export interface Cat {
    id: number;
    name: string;
    race: string;
    description: string;
    image:any;
}
export const cats: Cat[] = [
    {
        id:1,
        name:'Mosquito ​👾​',
        race:'SRD',
        description:'Gato de 6 meses, elétrico e dócil e ama ambientes externos. ​😺​🧡',
        image: require("../../assets/image/GatoUm.png")
    },
     {
        id:2,
        name:'Neném 🐈​',
        race:'SRD',
        description:'Gato adulto, dorminhoco e extremamente manhoso, adora pegar insetos 🐯🐭.​',
        image: require("../../assets/image/GatoDois.png")
    },
     {
        id:3,
        name:'Thor 🐾​',
        race:'SRD',
        description:'Especialista em cochilos estratégicos e ataques surpresa a insetos. Mingau é carinhoso do jeitinho dele: chega de mansinho e conquista geral no ronron.',
        image: require("../../assets/image/GatoTres.jpg")
    },

    
];