import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
  const productsExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const response = yield call(api.get, `/products/${id}`);

  if (productsExists) {
    const amount = productsExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
