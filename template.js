import { init } from 'snabbdom/build/package/init';
import { classModule } from 'snabbdom/build/package/modules/class';
import { propsModule } from 'snabbdom/build/package/modules/props';
import { styleModule } from 'snabbdom/build/package/modules/style';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

export default function createTemplate(templateFunction) {
  let currentState = {};

  const updateState = (newState) => {
    currentState = { ...currentState, ...newState };
    updateView();
  };

  const updateView = () => {
    const newVNode = templateFunction(currentState);
    patch(prevVNode, newVNode);
    prevVNode = newVNode;
  };

  let prevVNode = templateFunction(currentState);

  return (state, props) => {
    currentState = { ...currentState, ...state };
    const vNode = templateFunction(currentState, props);
    patch(prevVNode, vNode);
    prevVNode = vNode;
    return vNode;
  };
  return {
    updateState,
    render: templateFunction
  };
}
