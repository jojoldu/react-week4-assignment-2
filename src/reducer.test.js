import reducer from './reducer';

describe('reducer', () => {
  describe('without parameter', () => {
    const newState = reducer();

    it('restaurants is empty', () => {
      expect(newState.restaurants).toHaveLength(0);
    });
  });

  describe('changeRestaurant', () => {
    context('changeName', () => {
      it('change a restaurant name', () => {
        const prevState = {
          restaurants: [],
          restaurantName: '',
        };

        const action = {
          type: 'changeName',
          payload: {
            restaurantName: 'New restaurantName',
          },
        };

        const newState = reducer(prevState, action);

        expect(newState.restaurantName).toBe('New restaurantName');
      });
    });

    context('changeType', () => {
      it('change a restaurant type', () => {
        const prevState = {
          restaurants: [],
          restaurantName: '',
          restaurantType: '',
        };

        const action = {
          type: 'changeType',
          payload: {
            restaurantType: 'New restaurantType',
          },
        };

        const newState = reducer(prevState, action);

        expect(newState.restaurantType).toBe('New restaurantType');
      });
    });

    context('changeAddress', () => {
      it('change a restaurant address', () => {
        const prevState = {
          restaurants: [],
          restaurantName: '',
          restaurantType: '',
          restaurantAddress: '',
        };

        const action = {
          type: 'changeAddress',
          payload: {
            restaurantAddress: 'New restaurantAddress',
          },
        };

        const newState = reducer(prevState, action);

        expect(newState.restaurantAddress).toBe('New restaurantAddress');
      });
    });
  });
});
