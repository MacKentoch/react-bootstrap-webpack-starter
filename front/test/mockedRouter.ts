import { RouteComponentProps } from 'react-router';
import { UnregisterCallback, Href } from 'history';

export function getMockRouterProps<P>(data: P) {
  const location = {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: {},
  };

  const props: RouteComponentProps<P> = {
    match: {
      isExact: true,
      params: data,
      path: '',
      url: '',
    },
    location,
    history: {
      length: 2,
      action: 'POP',
      location,
      push: () => {},
      replace: () => {},
      go: num => {},
      goBack: () => {},
      goForward: () => {},
      block: t => {
        const temp: UnregisterCallback = () => {};
        return temp;
      },
      createHref: t => {
        const temp: Href = '';
        return temp;
      },
      listen: t => {
        const temp: UnregisterCallback = () => {};
        return temp;
      },
    },
    staticContext: {},
    ...data,
  };

  return props;
}
