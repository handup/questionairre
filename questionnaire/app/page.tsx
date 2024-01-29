'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { getQuestionnairre } from "./_actions/apicalls";
import { FormInput, InputTypeEnum } from "./_types/formtypes";

export default async function Home() {
  const questions = await getQuestionnairre()
  const onSubmit = (formData: FormData) => {
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
  }

  return <main className={styles.main}>
    <form action={onSubmit}>
      {questions.map(q => {
        switch (q.type) {
          case InputTypeEnum.shortText:
            return <fieldset className={q.cssClasses?.join(" ")}>
              <label htmlFor={q.name}>
                {(q.required ? "*" : "") + q.label}
              </label>
              <input type="text" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
            </fieldset>
          case InputTypeEnum.longText:
            return <fieldset className={q.cssClasses?.join(" ")}>
              <label htmlFor={q.name}>{(q.required ? "*" : "") + q.label}</label>
              <input type="text" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
            </fieldset>
          case InputTypeEnum.radio:
            return <fieldset id={q.id} className={q.cssClasses?.join(" ")}>
              <legend>{(q.required ? "*" : "") + q.label}</legend>
              {
                q.options?.map((o) => <div>
                  <input type="radio" id={q.id + "-" + o} name={q.name} value={o} />
                  <label htmlFor={o}>{o}</label>
                </div>)
              }
            </fieldset>
          case InputTypeEnum.select:
            return <fieldset id={q.id} className={q.cssClasses?.join(" ")}>
              <label htmlFor={q.name}>{(q.required ? "*" : "") + q.label}</label>
              <select name={q.name} >
                <option value="">--Please choose an option--</option>
                {q.options?.map((o) =>
                  <option value={o}>{o}</option>
                )}
              </select>
            </fieldset>
          case InputTypeEnum.checkmark:
            return <fieldset id={q.id} className={q.cssClasses?.join(" ")}>
              <legend>{(q.required ? "*" : "") + q.label}</legend>
              {q.options?.map(o =>
                <input type="checkbox" name={q.name} value={o}>{o}</input>)}
            </fieldset>
          case InputTypeEnum.date:
            return <fieldset className={q.cssClasses?.join(" ")}>
              <label htmlFor={q.name}>{(q.required ? "*" : "") + q.label}</label>
              <input type="date" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
            </fieldset>
          case InputTypeEnum.number:
            return <fieldset className={q.cssClasses?.join(" ")}>
              <label htmlFor={q.name}>
                {(q.required ? "*" : "") + q.label}
              </label>
              <input type="number" name={q.name} id={q.id} defaultValue={q.defaultValue} required={q.required ? true : false} />
            </fieldset>
          default:
            return null
        }

      })}
      <input type="submit" value="submit" />
    </form>
  </main>
}
