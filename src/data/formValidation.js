import { motion } from "framer-motion";

export const field = {
  name: {
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "Enter your name",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "max length is 30",
      },
    },
  },
  mail: {
    label: "Mail",
    type: "email",
    id: "mail",
    placeholder: "example@gmail.com",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Match format",
      },
    },
  },
  message: {
    label: "Message",
    type: "text",
    id: "message",
    placeholder: "I love your photos",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 250,
        message: "max length is 250",
      },
    },
  },
};

export function findInputError(errors, name) {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, 3);

  return filtered;
}

export function isFormInvalid(err) {
  if (Object.keys(err).length > 0) return true;
  return false;
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export function InputError({ message }) {
  return (
    <motion.p key={"errorMessage"} className="m-0" {...framer_error}>
      <span className="text-danger">{message}</span>
    </motion.p>
  );
}

export function FormSuccess({ message }) {
  return (
    <motion.p key={"successMessage"} className="m-0" {...framer_error}>
      <span className="text-success">{message}</span>
    </motion.p>
  );
}
