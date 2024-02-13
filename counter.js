// packages/ui-library/src/components/Counter.js
import h from 'snabbdom/h';
import createTemplate from '../template';

const templateFunction = (state) => {
  return h('div', { class: 'counter' }, [
    h('h1', `Count: ${state.count}`),
    h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add')
  ]);
};

const { updateState, render } = createTemplate(templateFunction);

export default { updateState, render };
