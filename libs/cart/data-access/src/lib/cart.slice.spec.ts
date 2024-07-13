import { fetchCart, cartAdapter, cartReducer } from './cart.slice';

describe('cart reducer', () => {
  it('should handle initial state', () => {
    const expected = cartAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(cartReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchCart', () => {
    let state = cartReducer(undefined, fetchCart.pending(''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
        ids: [],
      })
    );

    state = cartReducer(state, fetchCart.fulfilled([{ id: 1 }], ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
        ids: [1],
      })
    );

    state = cartReducer(state, fetchCart.rejected(new Error('Uh oh'), ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
        ids: [1],
      })
    );
  });
});
