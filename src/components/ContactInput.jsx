import Form from "react-bootstrap/Form";
import { useFormContext } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import {
  findInputError,
  isFormInvalid,
  InputError,
} from "../data/formValidation";

export default function ContactInput({
  label,
  type,
  id,
  placeholder,
  validation,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label className="d-flex gap-3 justify-content-between text-capitalize">
        {label}{" "}
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </Form.Label>

      <Form.Control
        type={type}
        placeholder={placeholder}
        {...register(label, validation)}
      />
    </Form.Group>
  );
}
