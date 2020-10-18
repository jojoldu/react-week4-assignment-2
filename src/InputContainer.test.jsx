import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    name: '마녀주방',
    category: '한식',
    location: '서울사 강남구',
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  describe('first loaded', () => {
    it('show aform for add restaurant\'s info', () => {
      const { getByPlaceholderText, getByText } = renderInputContainer();

      expect(getByPlaceholderText(/이름/)).not.toBeNull();
      expect(getByPlaceholderText(/분류/)).not.toBeNull();
      expect(getByPlaceholderText(/주소/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });
  });

  describe('add restaurant', () => {
    context('with existed all input value', () => {
      it('', () => {
        const { getByText } = renderInputContainer();

        fireEvent.click(getByText(/등록/));

        expect(dispatch).toBeCalledWith({
          type: 'addRestaurant',
        });
      });
    });
  });
});
