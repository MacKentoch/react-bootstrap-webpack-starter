// #region types
export type DevToolsMessageType = 'DISPATCH' | string;

export type DevToolsMessagePayload = {
  type?: string;
  state?: any;
};

export type DevToolsMessage = {
  type?: DevToolsMessageType;
  payload?: DevToolsMessagePayload;
};

export type DevTools = {
  connect: () => any;
  subscribe: (message: DevToolsMessage) => any;
  send: (action: { type: string; state?: any }, newState: any) => any;
  unsubscribe: () => any;
  dispatch: (action: { type: string }) => any;
  disconnect: () => any;
};
// #endregion

// #region constants
const isDEV = process.env.NODE_ENV === 'development';

export const withDevTools =
  isDEV &&
  typeof window !== 'undefined' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const devTools: DevTools = !withDevTools
  ? null
  : (window as any).__REDUX_DEVTOOLS_EXTENSION__.connect();
// #endregion

// #region devtools reducer
type State = {
  auth: any;
};
type Action = {
  type: string;
  state?: any;
};

const initialState: State = {
  auth: {},
};

export const reducer = (state: State = initialState, action: Action) => {
  /* eslint-disable no-unused-vars */
  switch (action.type) {
    // #region auth context
    case 'AUTH_CHECK_IS_AUTHENTICATED':
    case 'AUTH_CHECK_TOKEN_IS_EXPIRED':
    case 'AUTH_SET_TOKEN':
    case 'AUTH_SET_USER_INFO':
    case 'AUTH_DISCONNECT_USER': {
      const { type, state: context, ...rest } = action;
      return { ...state, user: { context, ...rest } };
    }
    // #endregion

    default:
      return state;
  }
  /* eslint-enable no-unused-vars */
};
// #endregion

// #region singleton devtools local state
let state: State;
// #endregion

// #region devToolsStore (redux like)

export const devToolsStore = !withDevTools
  ? null
  : {
      ...devTools,
      dispatch: (action: Action) => {
        // #region action validation
        if (!action) {
          throw new Error('devTools dispatched action should be defined');
        }
        if (typeof action === 'function') {
          throw new Error('devTools dispatched action should be an object');
        }
        if (typeof action !== 'object') {
          throw new Error('devTools dispatched action should be an object');
        }
        if (Array.isArray(action)) {
          throw new Error('devTools dispatched action should be an object');
        }
        // #endregion

        const newState = reducer(state, action);
        state = newState;

        devTools && devTools.send({ ...action }, newState);
      },
    };
// #endregion
