import { init } from 'snabbdom/build/package/init';
import { classModule } from 'snabbdom/build/package/modules/class';
import { propsModule } from 'snabbdom/build/package/modules/props';
import { styleModule } from 'snabbdom/build/package/modules/style';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';
import Counter from 'ui-library/components/Counter';
import App from './App';

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

const appContainer = document.getElementById('app');

const render = () => {
  const appVNode = App();
  const counterVNode = Counter.render({ count: 0 });

  patch(appContainer, appVNode);
  patch(appContainer, counterVNode);
};
render();