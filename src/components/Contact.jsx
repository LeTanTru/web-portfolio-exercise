import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc/index';
import { slideIn } from '../utils/motion';
import EarthCanvas from './canvas/Earth';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_08opk7o',
        'template_0zgj2yq',
        {
          from_name: form.name,
          to_name: 'Dopamine',
          from_email: form.email,
          to_email: 'letantru@gmail.com',
          message: form.message
        },
        'rKQrnMupJzC85mJNj'
      )
      .then(
        (result) => {
          setLoading(false);
          alert(
            "Thanks for sending email !\nI'm back to you as soon as I can !"
          );
          setForm({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong !\nTry again !');
        }
      );
  };

  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row h-[600px]'>
      {/* <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] rounded-2xl bg-black-100 p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          autoComplete='off'
          aria-autocomplete='off'
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='mb-2'>Your name:</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name ?"
              className='rounded-lg border-solid bg-tertiary px-6 py-4 font-medium text-white outline-none transition-all placeholder:text-secondary focus:outline-purple-950'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-2'>Your email:</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email ?"
              className='rounded-lg border-solid bg-tertiary px-6 py-4 font-medium text-white outline-none transition-all placeholder:text-secondary focus:outline-purple-950'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-2'>Your message:</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me your message'
              className='rounded-lg border-solid bg-tertiary px-6 py-4 font-medium text-white outline-none transition-all placeholder:text-secondary focus:outline-purple-950'
            />
          </label>
          <button
            className='ml-auto w-fit rounded-lg bg-tertiary px-8 py-3 font-bold text-white shadow-primary outline-none'
            type='submit'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div> */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:h-auto xl:flex-1 flex-1'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
