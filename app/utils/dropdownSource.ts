interface IModelType {
  id: number|string;
  name: string;
}

export interface IDropdownSource {
  label: string;
  value: string|number;
}

export function transformForDropdown(data: Array<IModelType>): Array<IDropdownSource> {
  return data.map((item) => ({
    label: item.name,
    value: item.id,
  }));
}
