import {IQuestion} from "../Models/Question";

export const questions: IQuestion[] = [
    {
        id: 1,
        question: "С каква цел исакте да започнете да тренирате?",
        options: [
            {
                option: "Самозащита",
                points: 0,
                // type: ["self-defence"]
            },
            {
                option: "Здраве",
                points: 0
            },
            {
                option: "Увереност",
                points: 0
            },
            {
                option: "Като хоби",
                points: 0
            }
        ]
    },
    {
        id: 2,
        question: "Какъв вид бихте искали да практикувате?",
        options: [
            {
                option: "Източни бойни изкусва",
                points: 50
            },
            {
                option: "Бойни спортове",
                points: 500,
                //type: ["combat-sport"]
            },
            {
                option: "Бойни изкуства с оръжия",
                points: 2000
            },
            {
                option: "Източни практики за здраве",
                points: 5000
            }
        ]
    },
    {
        id: 3,
        question: "Какъв вид бихте предпочели?",
        options: [
            {
                option: "Удрящи/ритащи",
                points: 10
            },
            {
                option: "Задържащи",
                points: 50,
                // type: ["grappling"]
            },
            {
                option: "Заключващи/контролиращи",
                points: 50
            }
        ]
    },

    // resultType: ["self-defence", "combat-sport", "grappling"]
    // {
    //     id: 4,
    //     question: "За какво време бихте се занимавали?",
    //     options: [
    //         {
    //             option: "3 месеца",
    //             points: 0
    //         },
    //         {
    //             option: "6 месеца",
    //             points: 0
    //         },
    //         {
    //             option: "1 година",
    //             points: 0
    //         },
    //         {
    //             option: "над 1 година",
    //             points: 0
    //         }
    //     ]
    // }
]