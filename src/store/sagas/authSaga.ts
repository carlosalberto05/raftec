import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { loginRequest, registerRequest, authSuccess, authFailure } from '../slices/authSlice';
import { PayloadAction } from '@reduxjs/toolkit';

// Mock API simulate
function* handleLogin(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const { email, password } = action.payload;
    yield delay(1000); // Simulate network

    if (email === 'guerrero@raftec.com' && password === 'password123') {
      yield put(authSuccess({
        id: '1',
        email: 'guerrero@raftec.com',
        name: 'Leo',
        level: 5,
        energyPoints: 1500,
      }));
    } else {
      yield put(authFailure('Credenciales inválidas'));
    }
  } catch (error: any) {
    yield put(authFailure(error.message));
  }
}

function* handleRegister(action: PayloadAction<{ name: string; email: string; password: string }>) {
  try {
    const { name, email } = action.payload;
    yield delay(1000);

    yield put(authSuccess({
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      level: 1,
      energyPoints: 100,
    }));
  } catch (error: any) {
    yield put(authFailure(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
}
