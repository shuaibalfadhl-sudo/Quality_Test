export default function ContactForm() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Sales</h2>
        <form className="form" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — demo only')}}>
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" />
          </label>
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
