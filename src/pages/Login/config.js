// action
import action from './action';

export default {
  path: '/login',
  async lazy() {
    const { Component } = await import('.');

    return {
      Component,
      action,
    };
  },

};
