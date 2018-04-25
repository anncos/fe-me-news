import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { mockClasses } from 'nordnet-ui-kit';
import { Component as Subsection } from './Subsection';
import styleSheet from './Subsection.styles';

const classes = mockClasses(styleSheet);

const props = {
  classes,
};

test('is a div', t => {
  const component = shallow(<Subsection {...props} />);

  t.true(component.is('div'));
});

test('should be untoggled by default', t => {
  const component = shallow(<Subsection {...props} />);

  t.false(component.state('toggled'));
});

test('should toggle on title click', t => {
  const component = shallow(<Subsection {...props} />);

  component.find(`.${classes.title}`).simulate('click');
  t.true(component.state('toggled'));
});
