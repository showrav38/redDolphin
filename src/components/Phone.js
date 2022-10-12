import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const Input = props => {
  return (
    <div>
      <PhoneInput
        specialLabel={''}
        country={'th'}
        inputStyle={{
          borderColor: props.touched && props.error && 'red',
        }}
        {...props}
      />
      {props.touched && props.error && <p style={{ color: 'red' }}>{props.error}</p>}
    </div>
  );
};
const Phone = props => {
  const [telegram, settelegram] = useState(false);
  const [whatsapp, setwhatsapp] = useState(false);
  const handleCheckBox = event => {
    if (event.target.checked) {
      settelegram(true);
    } else {
      settelegram(false);
    }
  };
  const handleCheckBoxTel = event => {
    if (event.target.checked) {
      setwhatsapp(true);
    } else {
      setwhatsapp(false);
    }
  };
  return (
    <div>
      <div>
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Phone Number
        </label>
        <Input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          label={'Mobile Phone'}
          req={true}
          helperText={''}
          error={true}
          isSelect={false}
          {...props.input}
          {...props.meta}
          {...props.custom}
        />
      </div>
      <div>
        <input className='mb-2' type="checkbox" onChange={handleCheckBoxTel} />
        <span className="ml-2">
          Do you want to notified in WhatsApp if your website is down?
        </span>
        <div className={whatsapp ? 'block' : 'hidden'}>
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">WhatsApp</label>
          <Input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            label={'Mobile Phone'}
            req={true}
            helperText={''}
            error={true}
            isSelect={false}
            {...props.input}
            {...props.meta}
            {...props.custom}
          />
        </div>
      </div>
      <div>
        <input type="checkbox" onChange={handleCheckBox} />
        <span className="ml-2">Do you want to notified in Telegram if your website is down?</span>
        <div className={telegram ? 'block' : 'hidden'}>
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Telegram
          </label>
          <Input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            label={'Mobile Phone'}
            req={true}
            helperText={''}
            error={true}
            isSelect={false}
            {...props.input}
            {...props.meta}
            {...props.custom}
          />
        </div>
      </div>
    </div>
  );
};

export default Phone;
