// loader
import loader from './loader';

export default {
  path: '/home',
  async lazy() {
    const { Component } = await import('.');

    return {
      Component,
      loader,
    };
  },
};
