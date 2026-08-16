import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message submitted successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="page">

      <h1>Contact Us 📞</h1>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;