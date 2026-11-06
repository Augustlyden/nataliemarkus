import styles from "../css/OsaForm.module.css";
import { useState, type ChangeEvent } from "react";

interface ResponseData {
  name: string;
  attending: Response;
  dietaryRestrictions: string;
  guests: number;
  speach: Response;
  relation: string;
  lenght: string;
  speachInfo: string;
  message: string;
}

const intialResponse: ResponseData = {
  name: "",
  attending: "",
  dietaryRestrictions: "",
  guests: 1,
  speach: "",
  relation: "",
  lenght: "",
  speachInfo: "",
  message: "",
};

type Response = "ja" | "nej" | "";

export const OsaForm = () => {
  const [response, setResponse] = useState<ResponseData>(intialResponse);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setResponse((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
      [name]: name === "attending" ? value as Response : prev.attending,
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
                value="ja"
                checked={response.attending === "ja"}
                onChange={handleChange}
                required
              />
              <span>Ja, jag kommer</span>
            </label>
            <label className={styles.choice}>
              <input
                type="radio"
                name="attending"
                value="nej"
                checked={response.attending === "nej"}
                onChange={handleChange}
              />
              <span>Nej, jag kan tyvärr inte</span>
            </label>
          </div>
        </fieldset>
        {response.attending === "ja" && (
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
                    ["ja", "Ja, gärna"],
                    ["nej", "Nej tack"],
                  ] as const
                ).map(([value, label]) => (
                  <label key={value} className={styles.choice}>
                    <input
                      type="radio"
                      name="speach"
                      value={value}
                      checked={response.speach === value}
                      onChange={handleChange}
                      required
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
 
            {response.speach === "ja" && (
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
                    value={response.lenght}
                    onChange={handleChange}
                  >
                    <option value="">Välj…</option>
                    <option value="2-3 min">2–3 minuter</option>
                    <option value="5 min">Cirka 5 minuter</option>
                    <option value="Mer än 5 min">Mer än 5 minuter</option>
                  </select>
                </div>
 
                <div className={styles.field}>
                  <label htmlFor="speachInfo">Något vi bör veta? (valfritt)</label>
                  <textarea
                    id="speachInfo"
                    name="speachInfo"
                    rows={3}
                    value={response.speachInfo}
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
