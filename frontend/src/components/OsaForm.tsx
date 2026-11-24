import styles from "../css/OsaForm.module.css";
import { useState, type ChangeEvent } from "react";
import { ChildFreeNote } from "./ChildFreeNote";

interface ResponseData {
  name: string;
  attending: YesNo;
  dietaryRestrictions: string;
  guests: number;
  speech: YesNo;
  relation: string;
  length: string;
  speechInfo: string;
  message: string;
}

const initialResponse: ResponseData = {
  name: "",
  attending: "",
  dietaryRestrictions: "",
  guests: 1,
  speech: "",
  relation: "",
  length: "",
  speechInfo: "",
  message: "",
};

type YesNo = "yes" | "no" | "";

export const OsaForm = () => {
  const [response, setResponse] = useState<ResponseData>(initialResponse);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setResponse((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className={styles.osa}>
      <h1 className={styles.title}>O.S.A</h1>
      <p className={styles.intro}>
        Svara senast <strong>datum</strong>
      </p>

      <div className={styles.divider} />
      <ChildFreeNote>
        Vi älskar era små, men har bestämt oss för att vår stora dag ska bli en fest för de vuxna. Därför ber vi er att lämna barnen hemma den här gången. Se det som en chans till en kväll helt för er själva!
      </ChildFreeNote>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Namn</label>
          <input 
            type="text" 
            id="name"
            name="name"
            autoComplete="name"
            value={response.name}
            onChange={handleChange}
            required
          />
        </div>

        <fieldset className={styles.field}>
          <legend>Kommer du?</legend>
          <div className={styles.choices}>
            <label className={styles.choice}>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={response.attending === "yes"}
                onChange={handleChange}
                required
              />
              <span>Ja, jag kommer</span>
            </label>
            <label className={styles.choice}>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={response.attending === "no"}
                onChange={handleChange}
              />
              <span>Nej, jag kan tyvärr inte</span>
            </label>
          </div>
        </fieldset>
        {response.attending === "yes" && (
          <>
            <div className={styles.field}>
              <label htmlFor="guests">Antal personer</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min={1}
                max={10}
                value={response.guests}
                onChange={handleChange}
              />
            </div>
 
            <div className={styles.field}>
              <label htmlFor="dietaryRestrictions">Allergier / specialkost</label>
              <input
                type="text"
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={response.dietaryRestrictions}
                onChange={handleChange}
              />
            </div>

            <fieldset className={styles.field}>
              <legend>Vill du hålla tal?</legend>
              <div className={styles.choices}>
                {(
                  [
                    ["yes", "Ja, gärna"],
                    ["no", "Nej tack"],
                  ] as const
                ).map(([value, label]) => (
                  <label key={value} className={styles.choice}>
                    <input
                      type="radio"
                      name="speech"
                      value={value}
                      checked={response.speech === value}
                      onChange={handleChange}
                      required
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
 
            {response.speech === "yes" && (
              <>
                <p className={styles.hint}>
                  Berätta gärna lite om talet så hjälper det oss att planera kvällen.
                </p>
 
                <div className={styles.field}>
                  <label htmlFor="relation">Vem är du för brudparet?</label>
                  <input
                    type="text"
                    id="relation"
                    name="relation"
                    placeholder="t.ex. barndomsvän, syskon, kollega"
                    value={response.relation}
                    onChange={handleChange}
                  />
                </div>
 
                <div className={styles.field}>
                  <label htmlFor="length">Ungefärlig längd</label>
                  <select
                    id="length"
                    name="length"
                    value={response.length}
                    onChange={handleChange}
                  >
                    <option value="">Välj…</option>
                    <option value="2-3 min">2–3 minuter</option>
                    <option value="5 min">Cirka 5 minuter</option>
                    <option value="Mer än 5 min">Mer än 5 minuter</option>
                  </select>
                </div>
 
                <div className={styles.field}>
                  <label htmlFor="speechInfo">Något vi bör veta? (valfritt)</label>
                  <textarea
                    id="speechInfo"
                    name="speechInfo"
                    rows={3}
                    value={response.speechInfo}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
          </>
        )}
 
        <div className={styles.field}>
          <label htmlFor="message">Hälsning till brudparet (valfritt)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={response.message}
            onChange={handleChange}
          />
        </div>
 
        <button type="submit" className={styles.btn}>
          Skicka svar
        </button>
      </form>
      
    </div>
  );
};
