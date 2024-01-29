'use client'
import styles from "./page.module.css";
import { getQuestionnairre } from "./_actions/apicalls";
import Questions from "./_components/Questionsform";

export default async function Home() {

  const onSubmit = (formData: FormData) => {
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
  }
  const que = await getQuestionnairre()
  return <main className={styles.main}>
    <h1>{que.title}</h1>
    <form action={onSubmit}>
      <Questions questions={que.questions}/>
      <input type="submit" value="Submit" />
    </form>
  </main>
}
