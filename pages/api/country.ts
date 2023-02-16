import axios, { AxiosResponse } from 'axios';

export const getAllCountries = () => {
  const options = {
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all',
  };
  axios
    .request(options)
    .then(function (response: AxiosResponse) {
      console.log(response.data)
    })
    .catch(function (error: AxiosResponse) {
      console.error(error);
    });
}

export const getCountryByName = (country: string) => {
  const options = {
    method: 'GET',
    url: `https://restcountries.com/v2/name/${country}`,
    params: {}
  };
  axios
    .request(options)
    .then(function (response: AxiosResponse) {
      console.log(response.data);
    })
    .catch(function (error: AxiosResponse) {
      console.log(error);
    })
}

export const getCountryByCapital = (capital: string) => {
  const options = {
    method: 'GET',
    url: `https://restcountries.com/v2/capital/${capital}`,
    params: {}
  };
  axios
    .request(options)
    .then(function (response: AxiosResponse) {
      console.log(response.data);
    })
    .catch(function (error: AxiosResponse) {
      console.log(error);
    })
}