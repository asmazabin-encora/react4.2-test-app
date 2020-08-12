import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './UpdateRecord.scss';

/**
 * This Component will update the record as per user input
 */
class UpdateRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      allFields: [
        {
          inValid: false,
          touched: false,
          elementConfig: {
            type: 'text',
            placeholder: 'Title',
            name: 'Title'
          },
          value: '',
          title: 'Title',
          error: 'Please enter the title.'
        },
        {
          value: '',
          inValid: false,
          touched: false,
          elementConfig: {
            type: 'text',
            placeholder: 'Description',
            name: 'Body'
          },
          title: 'Description',
          error: 'Please enter the description.'
        }
      ]
    };
    this.saveChanges = this.saveChanges.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    let allRecords = { ...this.props.allRecords };
    const fields = [...this.state.allFields];
    allRecords = fields.map(item => {
      const fieldName = item.elementConfig.name.toLowerCase();
      const listKeys = Object.keys(allRecords);
      let updatedField = {};
      if (listKeys.includes(fieldName)) {
        item.value = allRecords[fieldName];
        updatedField = item;
      }
      return updatedField;
    });

    this.setState({
      allFields: [...allRecords]
    });
  }
  /**
   * This function will handle the change event of inputs(Title and Description)
   */
  changeHandler(event, i) {
    const value = event.target.value;
    const fields = [...this.state.allFields];
    const inValid = Boolean(fields[i].value.trim().length);
    fields[i].value = value;
    fields[i].inValid = !inValid;
    fields[i].touched = true;
    this.setState({
      isValid: inValid,
      allFields: [...fields]
    });
  }

  /**
   * This function will save the record changes made by user.
   */
  saveChanges() {
    let fields = [...this.state.allFields];
    const { allRecords } = this.props;
    fields = fields.reduce((field, item) => {
      const fieldName = item.elementConfig.name.toLowerCase();
      field[fieldName] = item.value;
      return field;
    }, {});
    let updatedRecord = {
      ...allRecords,
      ...fields
      };
    this.props.updatedItems(updatedRecord);
  }

  render() {
    const { isValid, allFields } = this.state;
    return (
      <form className='editModal' onSubmit={event => event.preventDefault()}>
        <h3>UPDATE RECORD</h3>
        {allFields.map((field, i) => {
          return (
            <div className='d-flex' key={i}>
              <label>{`${field.title}`}:</label>
              <Input
                elementConfig={field.elementConfig}
                value={field.value}
                inValid={field.inValid}
                touched={field.touched}
                onChange={event => this.changeHandler(event, i)}
                onBlur={event => this.changeHandler(event, i, false)}
                errorMessage={field.error}
              />
            </div>
          );
        })}
        <div className='buttons'>
          <Button
            disabled={!isValid}
            clicked={this.saveChanges}
          >
            UPDATE
          </Button>
          <Button clicked={this.props.cancel}>
            CLOSE
          </Button>
        </div>
      </form>
    );
  }
}

export default UpdateRecord;
