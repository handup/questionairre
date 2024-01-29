import { FormInput, InputTypeEnum } from "../_types/formtypes"

export const getQuestionnairre = async () : Promise<FormInput[]> => {
    // Placeholder for a GET to a backend/database call
    return [
        {
            id: "nameinput",
            type: InputTypeEnum.shortText,
            label: "Your fullname",
            name: "name",
            options: null,
            defaultValue: ""
        },
        {
            id: "ratingInput",
            type: InputTypeEnum.radio,
            label: "How would you rate your experience with X inc.?",
            name: "rating",
            options: ["Unsatisfied", "Neutral", "Satisfied"],
            defaultValue: "Neutral"
        },
        {
            id: "feedbackInput",
            type: InputTypeEnum.longText,
            label: "Could you elaborate?",
            name: "feedback",
            options: null,
            defaultValue: ""
        }
    ]
}

export const postAnswers = async (answers : string[]) => {
    // Placeholder for a POST to a backend/database INSERT
    console.log("Answers: ", answers)
} 