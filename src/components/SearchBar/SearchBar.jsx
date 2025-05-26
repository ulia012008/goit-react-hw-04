import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, action) => {
    const query = values.query.trim();
    if (query === "") {
      toast.error("Please, write a name");
      return;
    }
    onSubmit(values.query);
    action.resetForm();
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <>
          <Form className={css.form}>
            <Field
              className={css.input}
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.button} type="submit">
              Search
            </button>
            <Toaster />
          </Form>
        </>
      </Formik>
    </header>
  );
}
