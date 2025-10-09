'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  switch (actions.type) {
    case 'addPropreties':
      for (const action of actions) {
        Object.assign(state, action.extraDate);
      }
    case 'removeProperties':
      for (const key of actions) {
        delete state[key];
      }

    case 'clear':
      for (const key in actions) {
        delete state[key];
      }
  }

}

module.exports = transformStateWithClones;
