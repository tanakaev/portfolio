import React, { useState } from "react";
import styles from "../../assets/styles/Form.module.css";
import Button from "../ui/button/index";
import { useTranslation, Trans } from "react-i18next";

function Form() {
  const { t, i18nKey } = useTranslation();
  const btn_hallo = t("btn_hallo.title");

  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("ERROR");
        setTimeout(() => {
          setStatus("");
        }, 3000);
      }
    } catch (error) {
      setStatus("ERROR");
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xgebpvrv"
      method="POST"
    >
      <div className={styles.column}>
        <div className={styles.formGroupHalf}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div className={styles.formGroupHalf}>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
      </div>
      <div className={styles.row}>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="Subject"
        />
      </div>
      <div className={styles.row}>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message"
        ></textarea>
      </div>
      {status === "SUCCESS" ? (
        <div className={styles.success}>
          <Trans i18nKey="success_msg">
            <p>Thank You For</p>
            <p>Reaching Out</p>
          </Trans>
        </div>
      ) : (
        status === "ERROR" && (
          <div className={styles.error}>
            <Trans i18nKey="success_msg">
              <p>Ooops!</p>
              <p>There was an error.</p>
            </Trans>
          </div>
        )
      )}
      <Button type="submit" title={btn_hallo} />
    </form>
  );
}

export default Form;
