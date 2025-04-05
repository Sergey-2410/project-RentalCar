import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={s.form}>
          <label className={s.label}>
            Car brand
            <Field as="select" name="brand" className={s.input}>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
            </Field>
          </label>
          <label className={s.label}>
            Price/ 1 hour
            <Field as="select" name="price" className={s.input}>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
            </Field>
          </label>
          <label className={s.label}>
            Сar mileage / km
            <div className={s.boxFromTo}>
              <Field
                type="text"
                name="from"
                placeholder="from"
                className={s.inputFrom}
              ></Field>
              <Field
                type="text"
                name="to"
                placeholder="to"
                className={s.inputTo}
              ></Field>
            </div>
          </label>

          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
