import Counter from 'ui-library/components/Counter';

const App = () => {
  const state = { count: 0 };

  const counterInstance = Counter.render(state);
  const handleAddClick = () => {
    counterInstance.updateState({ count: state.count + 1 });
  };

  return h('div', [
    counterInstance,
    h('button', { on: { click: handleAddClick } }, 'Increment Count')
  ]);
};

export default App;
