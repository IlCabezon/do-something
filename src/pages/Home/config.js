// loader
import loader from './loader';

export default {
  path: '/home',
  index: true,
  async lazy() {
    const { Component } = await import('.');

    return {
      Component,
      loader,
    };
  },
  auth: true,
};
