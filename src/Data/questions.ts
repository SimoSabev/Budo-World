import {IQuestion} from "../Models/Question";

export const questions: IQuestion[] = [
    {
        id: 1,
        question: "С каква цел исакте да започнете да тренирате?",
        options: [
            {
                option: "Самозащита",
                resultType: ["self-defence"]
            },
            {
                option: "Здраве",
                resultType: ["health"]
            },
            {
                option: "Увереност",
                resultType: ["confidence"]
            },
            {
                option: "Като хоби",
                resultType: ["hobby"]
            }
        ]
    },
    {
        id: 2,
        question: "Какъв вид бихте искали да практикувате?",
        options: [
            {
                option: "Източни бойни изкусва",
                resultType: ["east-martial-art"]
            },
            {
                option: "Бойни спортове",
                resultType: ["combat-sport"]
            },
            {
                option: "Бойни изкуства с оръжия",
                resultType: ["weapon"]
            },
            // {
            //     option: "Източни практики за здраве",
            //     resultType: [""]
            // }
        ]
    },
    {
        id: 3,
        question: "Какъв вид бихте предпочели?",
        options: [
            {
                option: "Удрящи/ритащи",
                resultType: ["striking", "kicking"]
            },
            {
                option: "Задържащи",
                resultType: ["grappling"]
            },
            {
                option: "Заключващи/контролиращи",
                resultType: ["grappling"]
            }
        ]
    },
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