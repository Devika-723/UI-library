import h from 'snabbdom/h';
import createTemplate from '../template';

const templateFunction = (state, props) => {
  return h('div', { class: 'my-component' }, [
    h('p', `State: ${state}`),
    h('p', `Props: ${props}`),
    h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Increment')
  ]);
};

const { updateState, render } = createTemplate(templateFunction);

export default { updateState, render };
