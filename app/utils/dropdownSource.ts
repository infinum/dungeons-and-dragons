type ModelType = {id: number|string, name: string};

export type DropdownSource = {label: string, value: string|number};

export function transformForDropdown(data: Array<ModelType>): Array<DropdownSource> {
  return data.map((item) => ({
    label: item.name,
    value: item.id,
  }));
}
