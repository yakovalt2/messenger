import Block from "../../utils/Block";
import Input from "../../components/Input/Input";
import template from "./settings.hbs?raw";
import "./settings.scss";
import Button from "../../components/Button/Button";

export default class SettingsPage extends Block {
  constructor() {
    const firstNameInput = new Input({
      id: "first_name",
      type: "text",
      name: "first_name",
      placeholder: "Имя",
      value: "",
      className: "input",
    });

    const secondNameInput = new Input({
      id: "second_name",
      type: "text",
      name: "second_name",
      placeholder: "Фамилия",
      value: "",
      className: "input",
    });

    const displayNameInput = new Input({
      id: "display_name",
      type: "text",
      name: "display_name",
      placeholder: "Имя в чате",
      value: "",
      className: "input",
    });

    const loginInput = new Input({
      id: "login",
      type: "text",
      name: "login",
      placeholder: "Логин",
      value: "",
      className: "input",
    });

    const emailInput = new Input({
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Email",
      value: "",
      className: "input",
    });

    const phoneInput = new Input({
      id: "phone",
      type: "tel",
      name: "phone",
      placeholder: "Телефон",
      value: "",
      className: "input",
    });

    const oldPasswordInput = new Input({
      id: "oldPassword",
      type: "password",
      name: "old_password",
      placeholder: "Старый пароль",
      value: "",
      className: "input",
    });

    const newPasswordInput = new Input({
      id: "newPassword",
      type: "password",
      name: "new_password",
      placeholder: "Новый пароль",
      value: "",
      className: "input",
    });

    const saveButton = new Button({
      id: "button",
      label: "Сохранить",
      className: "save-button",
      type: "button",
    });

    super("main", {
      firstNameInput,
      secondNameInput,
      displayNameInput,
      loginInput,
      emailInput,
      phoneInput,
      oldPasswordInput,
      newPasswordInput,
      saveButton
    });
  }

  render(): string {
    return template;
  }
}
