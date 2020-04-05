import { createSlice } from '@reduxjs/toolkit'

// create slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    loggedIn: false,
    user: undefined,
  },
  reducers: {
    loginRequest(state, action) {
      console.log("loginRequest");
      state.loading = true;
    },
    loginSuccess(state, action) {
      console.log("loginSuccess");
      state.loading = false;
      state.loggedIn = true;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      console.log("loginFailure");
      state.loading = false;
      state.loggedIn = false;
      state.user = undefined;
    }
  }
})

// extract action-creators from slice
const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

// helper function to mock an api request
const mockAPIReguest = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ name: 'Test User' });
      } else {
        reject({ message: 'Error' });
      }
    }, timeout || 1000);
  });
}

export const login = (credentials) => async dispatch => {
  console.log("login action-creator");
  console.log(credentials);

  const { email, password } = credentials;
  const mockSucessfulLogin = (email === 'test@test.com' && password === 'PASSWORD') ? true : false;

  try {
    dispatch(loginRequest());
    const response = await mockAPIReguest(mockSucessfulLogin);
    console.log(response);
    dispatch(loginSuccess(response.data));
  }
  catch (err) {
    console.log(err);
    dispatch(loginFailure(err));
  }
}

export default authSlice.reducer;
