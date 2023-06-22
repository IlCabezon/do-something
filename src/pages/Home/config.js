// loader
import loader from './loader';

// action
import action from './action';

export default {
  path: '/home',
  index: true,
  async lazy(context) {
    const { Component } = await import('.');

    return {
      Component,
      loader,
      action: action(context),
    };
  },
  auth: true,
};
