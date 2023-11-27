import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import styles from './FeedbackForm.module.scss';

const whatsAppClient = require('@green-api/whatsapp-api-client');

interface FeedbackFormProps {
  finalOrder: string,
  total: number,
  // setOrder: any,
  // setTotal: any,
}


const FeedbackForm = ({
  finalOrder,
  total,
  // setOrder,
  // setTotal
}: FeedbackFormProps) => {
  const { t } = useTranslation('cart');
  const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  const [open, setOpen] = useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const idInstance = '1103879964'; // your instance id
  const apiTokenInstance = 'f1eaf4c21f274f25b461ef76387bd65e99741eae3f294c09b5'; // your instance api token
  const receiverPhoneNumber = '79141167755'; // your phone number

  const FeedbackSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, t('form.feedback.phone'))
      .required(t('form.feedback.required')),
    payment: Yup.boolean(),
    courier: Yup.boolean(),
    address: Yup.string().typeError('Должно быть строкой').when('picked', {
      is: 'Two',
      then: Yup.string().required(t('form.feedback.required')),
      otherwise: Yup.string().when('picked', {
        is: 'Three',
        then: Yup.string().required(t('form.feedback.required')),
        otherwise: Yup.string()
      })
    }),
    description: Yup.string(),
  });

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        {...props}
      />
    );
  });

  const [courierString, setCourierString] = useState('');
  const [paymentString, setPaymentString] = useState('');
  // const [totalCourier, setTotalCourier] = useState(total);
  const [courierPrice, setCourierPrice] = useState('');

  return (
    <div className={styles.textInput}>
      <Formik
        initialValues={{
          phone: '',
          address: '',
          description: '',
          payment: false,
          // courier: false,
          picked: 'One',
        }}
        validationSchema={FeedbackSchema}
        onSubmit={(values, { resetForm }) => {
          (async () => {
            const restAPI = whatsAppClient.restAPI(({
              idInstance,
              apiTokenInstance
            }))
            try {
              console.log(values);
              const response = await restAPI.message.sendMessage(`${receiverPhoneNumber}@c.us`, null, 
                'Телефон - ' + values.phone +
                ',\n' + paymentString +
                ',\n' + courierString +
                ',\n\nЗаказ:\n' + finalOrder +
                '\nСумма заказа - ' + total + ' руб.' +
                '\n' + courierPrice +
                '\nКомментарий к заказу: ' + values.description
              );
              console.log(response.idMessage)
            } catch (ex) {
              console.error(ex);
            }
          })();
          resetForm();
          setOpen(true);
        }}
      >
        {({ values, errors, touched, handleSubmit }) => (
          <Form
            className={styles.mainForm}
            onSubmit={handleSubmit}
          >
            <Field
              name="phone"
              className={styles.input}
              placeholder={t('form.feedbackPhone')}
            />
            {errors.phone && touched.phone ? (
              <div className={styles.errorBlock}>
                <div className={styles.errorLabel}>{errors.phone}</div>
              </div>
            ) : null}
            <label className={styles.inputCheckboxField}>
              <Field
                name="payment"
                type="checkbox"
                className={styles.inputCheckbox}
              />{t('paymentOption')}
            </label>
            <div className={styles.inputRadioField} role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="One" />
                {t('courierOption')}
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                {t('courierOptionEntrance')}
              </label>
              <label>
                <Field type="radio" name="picked" value="Three" />
                {t('courierOptionApartment')}
              </label>
            </div>
            {/* <label className={styles.inputCheckboxField}>
              <Field
                name="courier"
                type="checkbox"
                className={styles.inputCheckbox}
              />{t('courierOption')}
            </label> */}
            <Field
              name="address"
              className={styles.input}
              placeholder={t('form.feedbackAddress')}
            />
            {errors.address && touched.address ? (
              <div className={styles.errorBlock}>
                <div className={styles.errorLabel}>{errors.address}</div>
              </div>
            ) : null}
            <Field
              name="description"
              type="description"
              className={styles.inputArea}
              component="textarea"
              rows="4"
              placeholder={t('form.feedbackDesc')}
            />
            <button
              type="submit"
              className={styles.sendButton}
              onClick={() => {
                // values.courier === true ? setCourierString(`Доставка курьером на адрес - ${values.address}`) : setCourierString('Самовывоз');
                values.payment === true ? setPaymentString('Оплата наличными') : setPaymentString('Оплата картой');
                values.picked === 'One' ? setCourierString('Самовывоз') : 
                values.picked === 'Two' ? setCourierString(`Доставка курьером на адрес до подъезда - ${values.address}`) : 
                setCourierString(`Доставка курьером на адрес до квартиры - ${values.address}`);
                // values.picked === 'Two' ? setTotalCourier(total+200) : values.picked === 'Three' && setTotalCourier(total+250);
                values.picked === 'Two' ? setCourierPrice(`Услуга курьера - 200 руб \nСумма к оплате - ${total+200} руб`) 
                : values.picked === 'Three' ? setCourierPrice(`Услуга курьера - 250 руб \nСумма к оплате - ${total+250} руб`)
                : setCourierPrice('');
              }}
            >
              {t('form.feedbackButton')}
            </button>
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
            >
              <Alert
                className={styles.snackbar}
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                {t('alert')}
              </Alert>
            </Snackbar>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
