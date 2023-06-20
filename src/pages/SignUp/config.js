// action
import action from './action';

export default {
  path: '/sign-up',
  async lazy() {
    const { Component } = await import('.');

    return {
      Component,
      action,
    };
  },
};
