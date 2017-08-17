import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

const AddressForm = ({ address, handleSubmit, reset }) => {
  console.log(address);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <div>
            {'Street:'}
            <Field
              value={address.street}
              component="input"
              name="street"
              type="text"
            />
          </div>
          <div>
            {'City:'}
            <Field
              component="input"
              name="city"
              type="text"
            />
          </div>
          <div>
            {'State:'}
            <Field
              component="input"
              name="state"
              type="text"
            />
          </div>
          <div>
            {'Zipcode:'}
            <Field
              component="input"
              name="zipcode"
              type="text"
            />
          </div>
        </center>
        <Button
          bsClass="btn btn-cancel"
          onClick={reset}
        >
          {'Cancel'}
        </Button>
        <Button
          bsClass="btn btn-save"
          type="submit"
        >
          {'Save'}
        </Button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'address',
})(AddressForm);
