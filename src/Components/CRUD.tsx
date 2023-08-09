import axios, {AxiosResponse} from 'axios';

type Props = {
  method: string;
  url: string;
  payload?: {};
  headers?: {};
}

export const CRUD = async (props: Props): Promise<string> => {
  let responseOutput: string = '';

  await axios({
    method: props.method,
    url: props.url,
    data: props.payload ? props.payload : {},
    headers: props.headers ? props.headers : {},
  })
    .then((response: AxiosResponse<any, any>) => {
      // NOTE: get only data from response.data
      responseOutput = response.data.response;
      console.log('response from inner axios', responseOutput);
    })
    .catch((error) => {
      console.warn(error);
    });
  return responseOutput;
};
