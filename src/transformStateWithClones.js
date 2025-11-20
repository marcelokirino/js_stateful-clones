'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const history = []; // array para guardar os resultados
  let current = { ...state} //cópia do estado atual, pois não podemos alterar o original
  for (const action of actions) {
    //loop para percorrer cada tipo de ação

  }
  return history;
}

module.exports = transformStateWithClones;
