import { FormInput, InputTypeEnum } from "../_types/formtypes"

type PropType = {
    questions: FormInput[]
}

const Questions = ({ questions }: PropType) => {

    return questions.map((q, i) => {
        switch (q.type) {
            case InputTypeEnum.shortText:
                return <fieldset id={q.id} key={i}>
                    <legend>
                        {(q.required ? "*" : "") + q.label}
                    </legend>
                    <input type="text" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
                </fieldset>
            case InputTypeEnum.longText:
                return <fieldset id={q.id} key={i}>
                    <legend >{(q.required ? "*" : "") + q.label}</legend>
                    <textarea className="longText" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
                </fieldset>
            case InputTypeEnum.radio:
                return <fieldset id={q.id} key={i}>
                    <legend>{(q.required ? "*" : "") + q.label}</legend>
                    {
                        q.options?.map((o, i) => <div key={i}>
                            <input type="radio" id={q.id + "-" + o} name={q.name} value={o} />
                            <label htmlFor={q.name}>{o}</label>
                        </div>)
                    }
                </fieldset>
            case InputTypeEnum.select:
                return <fieldset id={q.id} key={i} >
                    <legend>{(q.required ? "*" : "") + q.label}</legend>
                    <select name={q.name} >
                        <option value="">--Please choose an option--</option>
                        {q.options?.map((o, i) =>
                            <option value={o} key={i}>{o}</option>
                        )}
                    </select>
                </fieldset>
            case InputTypeEnum.checkmark:
                return <fieldset id={q.id} key={i} >
                    <legend>{(q.required ? "*" : "") + q.label}</legend>
                    {q.options?.map((o, i) =>
                        <div key={i}>
                            <input type="checkbox" name={q.name} value={o}></input>
                            <label htmlFor={q.name}>{o}</label>
                        </div>)}
                </fieldset>
            case InputTypeEnum.date:
                return <fieldset id={q.id} key={i}>
                    <legend >{(q.required ? "*" : "") + q.label}</legend>
                    <input type="date" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
                </fieldset>
            case InputTypeEnum.number:
                return <fieldset id={q.id} key={i}>
                    <legend >
                        {(q.required ? "*" : "") + q.label}
                    </legend>
                    <input type="number" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
                </fieldset>
            default:
                return null
        }

    })
}

export default Questions