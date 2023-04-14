import React from "react";
import styles from "../../assets/styles/Contact.module.css";
import Form from "../../components/form/Form";
import { useTranslation, Trans } from "react-i18next";

const contactImage =
  "https://res.cloudinary.com/dcprgi1zj/image/upload/v1680879763/tanakaev./contact/stigm4_programmer_in_front_of_computer_monitor_focused_Ocean-Gr_ac9c085a-1ac7-480e-b2f6-58659e353052_wfyhql.png";

function Contact() {
  const { i18n } = useTranslation();

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.image}>
            <img src={contactImage} alt="Contact Image" />
          </div>
        </div>
        <div className={styles.right_container}>
          <Trans i18nKey="contact">
            <div className={styles.welcome}>
              <p>
                If you have <span className={styles.color}>reqest</span> or
                <span className={styles.color}>questions</span>, do not
              </p>
              <p>hesitate to use the form.</p>
            </div>
          </Trans>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
