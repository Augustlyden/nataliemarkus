import styles from '../css/Palettes.module.css';
import { useEffect, useRef, useState } from "react";

type Palette = {
  name: string;
  colors: [string, string, string, string];
};

const palettes: Palette[] = [
  { name: "Blå",        colors: ["#BCD0E8", "#C6D7EB", "#DAE6F4", "#DCE8F4"] },
  { name: "Salvia",     colors: ["#C7C9B4", "#D2D3C1", "#C9D3CB", "#EBF1E7"] },
  { name: "Rosa",       colors: ["#E6AEB7", "#F6C3C7", "#FDD9DB", "#FDDEE3"] },
  { name: "Lila",       colors: ["#D7C3E6", "#E2D2EF", "#E8DAF4", "#E2D2EF"] },
  { name: "Persika",    colors: ["#FAC3AE", "#F6D1BF", "#FFDBCF", "#FEE2D4"] },
  { name: "Beige",      colors: ["#D8C1AF", "#E2CCBE", "#D6C5BB", "#F5F0EC"] },
  { name: "Gul",        colors: ["#EDDDCE", "#FEE6A6", "#FEF5CC", "#FCF5E5"] },
  { name: "Dammrosa",   colors: ["#DAB4B3", "#EFC4BB", "#F3CCD1", "#F8E4E5"] },
  { name: "Gråblå",     colors: ["#BEC2CB", "#D4DCE7", "#DAD9DE", "#DDE4EC"] },
  { name: "Mauve",      colors: ["#DBB1C5", "#EACBDB", "#EDD2E3", "#F7E3EC"] },
];

export const Palettes = () => {
  const [active, setActive] = useState<Palette | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <ul className={styles.palettes}>
        {palettes.map((p) => (
          <li key={p.name}>
            <button
              type="button"
              className={styles.palette}
              onClick={() => setActive(p)}
              aria-label={`Visa färgerna i paletten ${p.name} större`}
            >
              {<span className={styles.swatches} aria-hidden="true">
                {p.colors.map((c, i) => (
                  <span
                    key={i}
                    className={`${styles.swatch} ${styles[`s${i + 1}`]}`}
                    style={{ background: c }}
                  />
                ))}
              </span>}
              <span className={styles.paletteName}>{p.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
        aria-label={active ? `Färgpalett ${active.name}` : undefined}
      >
        {active && (
          <div className={styles.dialogBody}>
            <h3 className={styles.dialogTitle}>{active.name}</h3>
            <ul className={styles.bigSwatches}>
              {active.colors.map((c, i) => (
                <li key={i}>
                  <span className={styles.bigSwatch} style={{ background: c }} />
                  <span className={styles.hex}>{c}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={styles.dialogClose}
              onClick={() => setActive(null)}
            >
              Stäng
            </button>
          </div>
        )}
      </dialog>
    </>
  );
};