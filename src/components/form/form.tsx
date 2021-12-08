import { FC } from 'react';

import emailjs from 'emailjs-com';

import "./form.scss";

const Form:FC = () => {
  function sendEmail(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    emailjs.sendForm(
      'gmail', 
      'template_5322sgn', 
      e.target as HTMLFormElement, 
      "user_3R1bp2qUbnPXH1vqh7104"
    ).then(res => {
      successMessage('Message envoyé ! Je vous recontacterai dès que possible.');
    }).catch(err => {
      failMessage("Merci de remplir correctement les champs requis *");
    });
  }

  const failMessage = (message: string) => {
    let formMessage = document.querySelector('.form-message') as HTMLInputElement;
    formMessage.innerHTML = message;
    formMessage.style.opacity = "1";
    formMessage.style.background = "rgb(253,87,87)";

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  };

  const successMessage = (message: string) => {
    let formMessage = document.querySelector('.form-message') as HTMLInputElement;

    formMessage.innerHTML = message;
    formMessage.style.background = '#288D0D';
    formMessage.style.opacity = '1';

    
    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMessage.style.opacity = '0';

    }, 5000);
  }

  return (          
    <form onSubmit={sendEmail} className="contact-form">
      <h2 className="form-title">Mes Informations</h2>
      <div className="mu-social-media">
				<a aria-label="linkedin" href="https://www.linkedin.com/in/ali-ghoudi/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin fa-2x"></i></a>
        <a aria-label="github" href="https://github.com/AGhoudi" target="_blank" rel="noreferrer noopener"><i className="fab fa-github fa-2x"></i></a>
				<a aria-label="codepen" href="https://codepen.io/Link1986/" target="_blank" rel="noreferrer noopener"><i className="fab fa-codepen fa-2x"></i></a>
			</div>
      <a href="https://ali-ghoudi.com/cv/CV_Ali-Ghoudi.pdf" download="" className="mu-resume-btn" target="_blank" rel="noreferrer noopener">Télécharger mon CV</a>
      <hr className="contact_bar" />
      <h2 className="form-title">Me Contacter</h2>

      <div className="form-content">
        <label className="contact-label">Nom</label>
        <input 
          type="text"
          id="name" 
          name="name"
          placeholder="nom *"
          required 
        />

        <label className="contact-label">Email</label>
        <input 
          type="email"
          id="email" 
          name="user_email"
          placeholder="email *"
          required 
        />

        <label className="contact-label">Message</label>
        <textarea
          id="message" 
          name="message" 
          rows={4}
          placeholder="message *"
          required 
        />
        <input type="submit" value="Envoyer" className="send_button" />
        <div className="form-message"></div>
      </div>
    </form>
  );
}

export default Form;