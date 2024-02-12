import { IForm, IFormDependentConfig, IFormField } from './form-interface';

export const getVariablesFromConfig = ({
  variables,
  variablesFromComponent,
  componentData,
}: {
  variables: { [key: string]: any };
  variablesFromComponent?: { [key: string]: any };
  componentData?: { [key: string]: any };
}) => {
  let apiVariables: any = {};
  if (variables) {
    apiVariables = { ...variables };
  }
  if (variablesFromComponent) {
    for (const [key, value] of Object.entries(variablesFromComponent)) {
      if (componentData && componentData[key]) {
        apiVariables[key] = componentData[value];
      }
    }
  }
  return apiVariables;
};

export const getFormItemWidth = (gridSpacing: number | undefined): string => {
  if (!gridSpacing) {
    return 'w-full';
  }
  switch (gridSpacing) {
    case 12:
      return 'w-full';
      break;
    case 6:
      return 'w-1/2';
      break;
    case 4:
      return 'w-1/3';
    case 3:
      return 'w-1/4';
    case 2:
      return 'w-1/6';
    default:
      return 'w-full';
  }
};

export const isDependentRulesSatisfied = (
  fieldConfig: IFormField,
  data: any
) => {
  const { dependentConfig } = fieldConfig;
  if (!dependentConfig?.length) {
    return true;
  }
  let isRulesSatisfied = true;
  dependentConfig.forEach((rule: IFormDependentConfig) => {
    const { render } = rule;
    if (render) {
      switch (render?.op) {
        case 'eq':
          if (data[rule.key] !== render.value) {
            isRulesSatisfied = false;
          }
          break;
        case 'neq':
          if (data[rule.key] === render.value) {
            isRulesSatisfied = false;
          }
          break;
        default:
          break;
      }
    }
  });
  return isRulesSatisfied;
};

export const getDependentChangedValueFields = (
  dependencyConfig: IFormDependentConfig[],
  changedValues: any
) => {
  const dependentChangedFields: string[] = [];
  dependencyConfig.forEach((dependency: IFormDependentConfig) => {
    if (changedValues?.[dependency.key]) {
      dependentChangedFields.push(dependency.key);
    }
  });
  return dependentChangedFields;
};
