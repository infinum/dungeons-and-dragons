import IJsonApiError from 'interfaces/IJsonApiError';

interface IJsonApiResult {
  errors?: Array<IJsonApiError>,
  data: any,
  included?: Array<Object>,
  meta?: Object
};

export default IJsonApiResult;
