// loader
import loader from './loader';

// action
import action from './action';

export default {
  path: 'activities-to-do',
  async lazy(context) {
    const { Component } = await import('.');

    return {
      Component,
      loader: loader(context),
      action: action(context),
    };
  },
};
