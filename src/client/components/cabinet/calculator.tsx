import React from 'react';
import {
  Button,
  Input,
  DateInput,
  RadioGroup,
  Gapped,
  Radio,
  Checkbox,
} from '@skbkontur/react-ui';
import './calculator.css';

export function Calculator() {
  const initialForm = {
    personName: undefined,
    passportNumber: undefined,
    childrenCount: undefined,
    birthDate: undefined,
    incomeLevel: 2,
    sendToServer: false,
    disabledPeople: false,
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
                  placeholder="Кол-во детей"
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
              <label>
                <p>Дата рождения</p>
                <DateInput
                  value={form.birthDate}
                  onValueChange={(value) => {
                    handleForm({
                      birthDate: value,
                    });
                  }}
                />
              </label>
            </p>

            <p>
              <RadioGroup
                name="incomeLevel"
                onValueChange={(value) => {
                  handleForm({
                    incomeLevel: value,
                  });
                }}
                defaultValue={initialForm.incomeLevel}
              >
                <b>Как вы оцениваете доходы Вашей семьи?</b>
                <Gapped gap={15}>
                  <Radio value="1">Низкий</Radio>
                  <Radio value="2">Средний</Radio>
                  <Radio value="3">Высокий</Radio>
                </Gapped>
              </RadioGroup>
            </p>

            <p>
              <RadioGroup
                name="disabledPeople"
                onValueChange={(value) => {
                  handleForm({
                    disabledPeople: value === '1',
                  });
                }}
                value={form.disabledPeople ? '1' : '0'}
              >
                <b>Есть ли в Вашей семье люди с ограниченными возможностями?</b>
                <Gapped gap={15}>
                  <Radio value="1">Есть</Radio>
                  <Radio value="0">Нет</Radio>
                </Gapped>
              </RadioGroup>
            </p>
            <p>
              <Checkbox
                checked={form.sendToServer}
                onValueChange={(value) => {
                  handleForm({
                    sendToServer: value,
                  });
                }}
              >
                Я хочу получить поддержку
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
