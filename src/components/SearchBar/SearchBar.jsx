import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../redux/filters/selectors';
import { useEffect } from 'react';
import { fetchBrands } from '../../redux/filters/operations';
import { fetchCars } from '../../redux/cars/operations';
import { selectSortedRentalPrices } from '../../redux/cars/selectors';

const SearchBar = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const prices = useSelector(selectSortedRentalPrices);
  console.log(prices);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={s.form}>
          <label className={s.label}>
            Car brand
            <Field as="select" name="brand" className={s.input}>
              <option value="choose" disabled selected hidden>
                Choose a brand
              </option>
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </label>
          <label className={s.label}>
            Price/ 1 hour
            <Field as="select" name="price" className={s.input}>
              <option value="" disabled selected hidden>
                Choose a price
              </option>
              {prices.map(price => (
                <option key={price}>${price}</option>
              ))}
            </Field>
          </label>
          <label className={s.label}>
            Сar mileage / km
            <div className={s.boxFromTo}>
              <Field
                type="text"
                name="from"
                placeholder="From"
                className={s.inputFrom}
              ></Field>
              <Field
                type="text"
                name="to"
                placeholder="To"
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
