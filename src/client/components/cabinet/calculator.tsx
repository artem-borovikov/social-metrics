import React from 'react';
import {
  Button,
  Input,
  RadioGroup,
  Gapped,
  Radio,
  Checkbox,
} from '@skbkontur/react-ui';
import './calculator.css';

export function Calculator() {
  const initialForm = {
    personName: undefined,
    gender: 1,
    familyState: 0,
    passportNumber: undefined,
    childrenCount: undefined,
    birthDate: undefined,
    incomeLevel: 2,
    saveResult: false,
    notifications: false,
    disabledPeople: null,
    personPhone: undefined,
    healthRestricts: 0,
  };

  const [form, setForm] = React.useState(initialForm);
  const [formIsSaved, setFormSaved] = React.useState(false);

  const handleForm = (newData: any) => {
    setForm((form) => ({
      ...form,
      ...newData,
    }));
  };

  return (
    <>
      <form className="form">
        {formIsSaved ? (
          <div className="success">
            Спасибо за информацию!
            <br />
            <p>Доступная для Вас помощь:</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setFormSaved(false);
              }}
            >
              Заполнить форму повторно?
            </a>
          </div>
        ) : (
          <>
            <h1>Социальный калькулятор</h1>
            <p>
              <label>
                <Input
                  name="personName"
                  placeholder="ФИО"
                  value={form.personName}
                  onChange={(e) => {
                    handleForm({
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </label>
            </p>
            <p>
              <RadioGroup
                name="gender"
                onValueChange={(value) => {
                  handleForm({
                    gender: Number(value),
                  });
                }}
                value={String(form.gender)}
              >
                <b>Ваш пол</b>
                <Gapped gap={15}>
                  <Radio value="1">Муж.</Radio>
                  <Radio value="2">Жен.</Radio>
                </Gapped>
              </RadioGroup>
            </p>
            <p>
              <RadioGroup
                name="familyState"
                onValueChange={(value) => {
                  handleForm({
                    familyState: Number(value),
                  });
                }}
                value={String(form.familyState)}
              >
                <b>Ваше семейное положение</b>
                <Gapped gap={15}>
                  <Radio value="0">Холост / Не замужем</Radio>
                  <Radio value="1">Женат / Замужем</Radio>
                  <Radio value="2">Разведен</Radio>
                </Gapped>
              </RadioGroup>
            </p>
            <p>
              <label>
                <Input
                  name="passportNumber"
                  placeholder="Номер пасспорта"
                  mask={'99 99 999999'}
                  value={form.passportNumber}
                  onChange={(e) => {
                    handleForm({
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </label>
            </p>
            <p>
              <label>
                <Input
                  name="gender"
                  placeholder="Номер телефона"
                  mask={`+7 (999)-999-99-99`}
                  value={form.personPhone}
                  onChange={(e) => {
                    handleForm({
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </label>
            </p>

            <p>
              <label>
                <Input
                  placeholder="Кол-во детей до 18 лет"
                  mask={'99'}
                  name="childrenCount"
                  value={form.childrenCount}
                  onChange={(e) => {
                    handleForm({
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </label>
            </p>

            <p>
              <RadioGroup
                name="healthRestricts"
                onValueChange={(value) => {
                  handleForm({
                    healthRestricts: Number(value),
                  });
                }}
                value={String(form.healthRestricts)}
              >
                <strong>Ваше состояние здоровья</strong>
                <Gapped gap={15}>
                  <Radio value="1">Инвалид 1 гр</Radio>
                  <Radio value="2">Инвалид 2 гр</Radio>
                  <Radio value="3">Инвалид 3 гр</Radio>
                  <Radio value="0">Нет</Radio>
                </Gapped>
              </RadioGroup>
            </p>

            <strong>Наличие людей, за которыми необходим уход (число)</strong>
            <p>
              <label>
                <Input
                  placeholder=""
                  mask={'99'}
                  name="disabledPeople"
                  value={String(form.disabledPeople)}
                  onChange={(e) => {
                    handleForm({
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </label>
            </p>

            <p>
              <Checkbox
                checked={form.saveResult}
                onValueChange={(value) => {
                  handleForm({
                    saveResult: value,
                  });
                }}
              >
                Я хочу получить поддержку
              </Checkbox>
            </p>
            <p>
              <Checkbox
                checked={form.notifications}
                onValueChange={(value) => {
                  handleForm({
                    notifications: value,
                  });
                }}
              >
                Я хочу получать SMS-уведомления о мерах поддержки
              </Checkbox>
            </p>
            <p>
              <Button
                onClick={() => {
                  setFormSaved(true);
                  setForm(initialForm);
                }}
              >
                Результат расчета
              </Button>
            </p>
          </>
        )}
      </form>
    </>
  );
}
