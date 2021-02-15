export interface IEnv {
    environment: string
    version: string
    description: string
    shortname: string
    name: string
    apiV1: string
    apiKey: string
}

const env: IEnv = {
    environment: process.env.REACT_APP_ENV || process.env.NODE_ENV || 'production',
    name: process.env.REACT_APP_NAME || 'Yofit Gym',
    shortname: process.env.REACT_APP_DESCRIPTION || 'Yofit',
    description: process.env.REACT_APP_DESCRIPTION || 'Yofit Gym application',
    version: process.env.REACT_APP_TAG || '0.0.1',
    apiV1: process.env.REACT_APP_YOFIT_API_V1 || 'http://localhost:4000/api/v1/',
    apiKey: process.env.REACT_APP_API_KEY || ''
}
  
export default env
