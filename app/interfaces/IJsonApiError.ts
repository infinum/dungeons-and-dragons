interface IJsonApiError {
  source?: {
    pointer?: string
  },
  field?: string
};

export default IJsonApiError;
