import {computed, IComputedValue} from 'mobx';
import {Model} from 'mobx-collection-store';

/**
 * Conditional reference prop for the MobX Collection Store
 *
 * @export
 * @param {string} name - Prop name
 * @param {Function} getRefModel - Function that receives the primitive value
 * and should return the model or null if value is not valid
 * @param {Model} model - Model instance
 * @returns {IComputedValue<any>}
 */
export default function conditional(name: string, getRefModel: (data) => Model, model: Model): IComputedValue<any> {
  const internalName = `__${name}Id`;
  model.assign(internalName, model[internalName]);
  return computed(
    () => getRefModel(model[internalName]),
    (value: Model|number|string) => {
      const valueId = value instanceof Model ? value[value.static.idAttribute] : value;
      if (getRefModel(valueId)) {
        model[internalName] = valueId;
      }
    },
  );
}
