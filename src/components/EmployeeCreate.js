import React from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import * as actions from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button,
} from './common';

type Props = {
  name: String,
  phone: String,
  shift: String,
  employeeUpdate: Function,
};

const EmployeeCreate = (props: Props) => {
  const {
    name,
    phone,
    shift,
    employeeUpdate,
  } = props;

  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={name}
          onChangeText={value => employeeUpdate({ prop: 'name', value })}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={value => employeeUpdate({ prop: 'phone', value })}
        />
      </CardSection>
      <CardSection>
        <Picker
          style={{ flex: 1 }}
          selectedValue={shift}
          onValueChange={value => employeeUpdate({ prop: 'shift', value })}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
      <CardSection>
        <Button>
          {'Create'}
        </Button>
      </CardSection>

    </Card>
  );
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
