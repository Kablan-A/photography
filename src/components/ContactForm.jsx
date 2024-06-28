import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { field, FormSuccess } from "../data/formValidation";
import { FormProvider, useForm } from "react-hook-form";
import ContactInput from "./ContactInput";

function ContactForm() {
  const [success, setSuccess] = useState(false);

  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <Form autoComplete="off" className="my-auto" onSubmit={onSubmit}>
        <ContactInput {...field.name} />
        <ContactInput {...field.mail} />
        <ContactInput {...field.message} />

        <div className="d-flex align-items-center justify-content-between">
          <Button variant="secondary" type="submit">
            Submit
          </Button>

          {success && (
            <AnimatePresence>
              <FormSuccess message={"Message's submitted!"} />
            </AnimatePresence>
          )}
        </div>
      </Form>
    </FormProvider>
  );
}

export default ContactForm;
