import React from 'react'

const contactText = [
  {
    link: "https://open.kakao.com/o/gM7YLzwf",
    title: "KAKAO : Webstupids",
  },
  {
    link: "mailto:webstoryboy@naver.com",
    title: "mail : WEBSTORYBOY@NAVER.COM",
  }
];

const contact = () => {
  return (
    <section id='contact'>
      <div className="contact__inner">
        <h2 className='contact__title'>Contact</h2>
        <div className="contact__lines top" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        <div className="contact__text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <a href={contact.link} target='_blank' rel="noreferrer">{contact.title}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__lines" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default contact