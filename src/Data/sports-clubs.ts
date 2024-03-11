import {ISportsClub} from "../Models/SportsClub";

const imageUrls = [
    "Images/Shiseikan1.jpg",
    "https://aikikaibulgaria.com/index_htm_files/gallery/satori_2017/images/ITG_3446.jpg",
    "https://static.wixstatic.com/media/42e41e_a2e256d48a2248a7a07175b48c430541~mv2_d_5551_3010_s_4_2.jpg/v1/fill/w_828,h_449,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42e41e_a2e256d48a2248a7a07175b48c430541~mv2_d_5551_3010_s_4_2.jpg",
    "https://media.gettyimages.com/id/95692353/photo/men-practicing-aikido-martial-arts.jpg?s=612x612&w=0&k=20&c=dlE07awMPk38MOis-hIs2bcWBnNF7eyZXUSvQroQV0c=",
    "https://i.pinimg.com/236x/93/8a/56/938a565e3421951c1ee56f66f96c6e6f.jpg",
    "https://aikidobg.net/wp-content/uploads/2016/06/IMG_0273-705x529.jpg",
];

export const sportsClubsData: ISportsClub[] = [
    {
        name: "Шисейкан Айкидо доджо Варна",
        city:"Варна",
        imageSrc: "Images/Shiseikan1.jpg",
        route:"shiseikan"
    },
    {
        city: "Бургас",
        name: "Айкикай Айкидо България",
        route: "/burgas",
        imageSrc: ""
    },
    { city: "София", name: "Айкидо клуб Такуми", route: "/sofia", imageSrc: "" },
    { city: "Разград", name: "Шисейкан Айкидо доджо Разград", route: "/razgrad", imageSrc: "" },
    { city: "Стара Загора", name: "Айкидо Клуб Имеон Стара Загора", route: "/stara-zagora", imageSrc: "" },
    { city: "Пловдив", name: "Айкидо клуб Каедекан доджо", route: "/plovdiv", imageSrc: "" },
]