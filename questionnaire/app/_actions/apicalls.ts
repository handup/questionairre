import { title } from "process"
import { FormInput, InputTypeEnum, Questionnairre } from "../_types/formtypes"



export const getQuestionnairre = async (): Promise<Questionnairre> => {
    // Placeholder for a GET to a backend/database call
    return {
        title: 'First forum formular',
        questions:
            [
                {
                    id: "nameinput",
                    type: InputTypeEnum.shortText,
                    label: "Your fullname",
                    name: "name",
                    options: null,
                    defaultValue: "",
                    required: true
                },
                {
                    id: "ratingInput",
                    type: InputTypeEnum.radio,
                    label: "How would you rate your experience with X inc.?",
                    name: "rating",
                    options: ["Unsatisfied", "Neutral", "Satisfied"],
                    defaultValue: "Neutral",
                    required: true
                },
                {
                    id: "feedbackInput",
                    type: InputTypeEnum.longText,
                    label: "Could you elaborate?",
                    name: "feedback",
                    options: null,
                    defaultValue: "",
                    required: true
                },
                {
                    id: "ratingInput",
                    type: InputTypeEnum.select,
                    label: "How would you rate your experience with X inc. but in a dropdown :P ?",
                    name: "rating",
                    options: ["Unsatisfied", "Neutral", "Satisfied"],
                    defaultValue: "Neutral",
                    required: true
                },
                {
                    id: "ratingInput",
                    type: InputTypeEnum.checkmark,
                    label: "How would you rate your experience with X inc. but in a dropdown :P ?",
                    name: "rating-select",
                    options: ["Unsatisfied", "Neutral", "Satisfied"],
                    defaultValue: "Neutral",
                    required: true
                },
                {
                    id: "ratingInput",
                    type: InputTypeEnum.date,
                    label: "How would you rate your experience with X inc. but in a dropdown :P ?",
                    name: "rating",
                    options: ["Unsatisfied", "Neutral", "Satisfied"],
                    defaultValue: "Neutral",
                    required: true
                },
            ]
    }
}

export const postAnswers = async (answers: string[]) => {
    // Placeholder for a POST to a backend/database INSERT
    console.log("Answers: ", answers)
} 