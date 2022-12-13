import React from 'react';
import {
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/Form/Form.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.state.name);
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };
  render() {
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="">
          Name
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor="">
          Number
          <FormInput
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit" onSubmit={this.handleSubmit}>
          Add contact
        </FormButton>
      </FormBox>
    );
  }
}
export default ContactForm;
