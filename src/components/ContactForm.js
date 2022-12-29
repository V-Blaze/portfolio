import { useForm } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xgebwjjz');

  if (state.succeeded) {
    return <div className="text-white self-center ">Thank you, I&apos;ll get back to you promptly!</div>;
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-black bg-opacity-25 w-full">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group mb-6">
          <input
            required
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-6">
          <input
            required
            type="email"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="email"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            required
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="message"
            name="message"
            rows="3"
            placeholder="Message"
          />
        </div>
        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
