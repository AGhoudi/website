import { FC } from 'react';

import YellowRibbon from "../yellow-ribbon/yellow-ribbon";
import Form from '../form/form';

import "./contact.scss";

const Contact:FC = () => (
  <section id="contact" className="contact">
    <YellowRibbon title="Me Contacter" />
    <p className="contact__information">
    N'hésitez pas à me contacter via le formulaire, pour discuter avec moi<br />
     d'informatique ou de tout autre sujet, je serais ravi de vous répondre.
    </p>
    <Form />
  </section>
);

export default Contact;